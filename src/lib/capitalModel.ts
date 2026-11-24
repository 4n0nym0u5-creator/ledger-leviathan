export type Posture = "partner" | "client" | "owner" | "referee";
export type WorldId = "fusion" | "feudal" | "national" | "open";

export type CapitalInput = {
  concentration: number;
  capability: number;
  posture: Posture;
};

export type CapitalEvaluation = {
  labourIndex: number;
  taxIndex: number;
  power: { state: number; firms: number; open: number };
  worlds: { id: WorldId; share: number }[];
  leader: WorldId;
  margin: number;
  contested: boolean;
  regime: boolean;
};

const POSTURE_TAX: Record<Posture, number> = {
  owner: 16,
  referee: 6,
  partner: -4,
  client: -14,
};

function clamp(value: number, low: number, high: number) {
  return Math.min(high, Math.max(low, value));
}

/** Largest-remainder rounding so integer parts sum to 100. */
function toShares(weights: number[]): number[] {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) {
    const base = Math.floor(100 / weights.length);
    const floors = weights.map(() => base);
    floors[0] += 100 - base * weights.length;
    return floors;
  }
  const exact = weights.map((weight) => (weight / total) * 100);
  const floors = exact.map((value) => Math.floor(value));
  let left = 100 - floors.reduce((sum, value) => sum + value, 0);
  const order = exact
    .map((value, index) => ({ index, frac: value - Math.floor(value) }))
    .sort((a, b) => b.frac - a.frac || a.index - b.index);
  for (let step = 0; step < left; step += 1) floors[order[step].index] += 1;
  return floors;
}

export function evaluateCapital(input: CapitalInput): CapitalEvaluation {
  const c = clamp(input.concentration, 0, 100) / 100;
  const a = clamp(input.capability, 0, 100) / 100;
  const labourIndex = Math.round(clamp(100 - a * (22 + 48 * c), 8, 100));
  const taxIndex = Math.round(clamp(100 - a * (12 + 28 * c) + POSTURE_TAX[input.posture] * a, 8, 100));

  let state = 46 - 8 * a - 14 * c;
  let firms = 30 + 16 * a + 26 * c;
  let open = 24 + 8 * a * (1 - c) - 16 * c;
  if (input.posture === "owner") {
    state += 18;
    firms -= 12;
    open -= 6;
  } else if (input.posture === "client") {
    state -= 12;
    firms += 14;
    open -= 2;
  } else if (input.posture === "partner") {
    state += 4;
    firms += 6;
    open -= 10;
  } else {
    state += 2;
    firms -= 6;
    open += 4;
  }
  const [stateShare, firmShare, openShare] = toShares([
    Math.max(4, state),
    Math.max(4, firms),
    Math.max(4, open),
  ]);

  const fusion = c * 48 + a * 28 + (input.posture === "partner" ? 32 : input.posture === "client" ? 8 : 0);
  const feudal = c * 42 + a * 32 + (input.posture === "client" ? 36 : input.posture === "partner" ? 6 : 0);
  const national = a * 36 + c * 8 + (input.posture === "owner" ? 48 : 0);
  const openWorld = (1 - c) * 52 + a * 12 + (input.posture === "referee" ? 34 : 0);
  const raw = [
    { id: "fusion" as const, weight: fusion },
    { id: "feudal" as const, weight: feudal },
    { id: "national" as const, weight: national },
    { id: "open" as const, weight: openWorld },
  ];
  const portions = toShares(raw.map((item) => item.weight));
  const worlds = raw.map((item, index) => ({ id: item.id, share: portions[index] }));
  const sorted = [...worlds].sort((left, right) => right.share - left.share || left.id.localeCompare(right.id));
  const leader = sorted[0].id;
  const margin = sorted[0].share - sorted[1].share;

  return {
    labourIndex,
    taxIndex,
    power: { state: stateShare, firms: firmShare, open: openShare },
    worlds,
    leader,
    margin,
    contested: margin < 5,
    regime: a >= 0.4,
  };
}
