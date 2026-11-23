export type DriverKey =
  | "ai"
  | "crypto"
  | "regulation"
  | "fragmentation"
  | "capacity";

export type Drivers = Record<DriverKey, number>;

export type ScenarioId = "absorb" | "parallel" | "fortress" | "hybrid";

export type Term = { label: string; value: number };

export type ScenarioScore = {
  id: ScenarioId;
  raw: number;
  share: number;
  terms: Term[];
};

export type Evaluation = {
  scores: ScenarioScore[];
  leader: ScenarioId;
  runnerUp: ScenarioId;
  margin: number;
  contested: boolean;
};

export const DRIVER_META: {
  key: DriverKey;
  label: string;
  low: string;
  high: string;
  help: string;
}[] = [
  {
    key: "ai",
    label: "AI capability speed",
    low: "Narrow tools",
    high: "Reliable agents",
    help: "How quickly systems become dependable at multi-step work: drafting, coding, paying, checking. Capability, not a product launch.",
  },
  {
    key: "crypto",
    label: "Open crypto adoption",
    low: "Niche rails",
    high: "Everyday self-custody",
    help: "Stablecoins, smart contracts and self-custody used outside a bank or licensed exchange app. Regulated tokenised deposits do not count as open adoption here.",
  },
  {
    key: "regulation",
    label: "Regulatory strictness",
    low: "Light touch",
    high: "Enforced perimeter",
    help: "Whether licensing, sanctions, bank off-boarding and app-store rules are actually applied, not merely announced.",
  },
  {
    key: "fragmentation",
    label: "Geopolitical fragmentation",
    low: "Standards still travel",
    high: "Blocs stop cooperating",
    help: "Whether states still share sanctions lists, tax information and tech standards, or split into stacks that do not interoperate.",
  },
  {
    key: "capacity",
    label: "State technical capacity",
    low: "Laws without systems",
    high: "Can build and run",
    help: "Whether government can operate payments, identity, procurement and cyber defence. A statute with no engineers scores low.",
  },
];

export const SCENARIO_META: Record<
  ScenarioId,
  { name: string; hue: string; ink: string }
> = {
  absorb: { name: "State Absorbs", hue: "#9af6ff", ink: "#062228" },
  parallel: { name: "Parallel Systems", hue: "#ff8ad4", ink: "#2a1020" },
  fortress: { name: "Authoritarian Fortress", hue: "#ffd27a", ink: "#2a2108" },
  hybrid: { name: "Hybrid Pluralism", hue: "#7dface", ink: "#062218" },
};

export const PRESETS: {
  id: string;
  label: string;
  blurb: string;
  drivers: Drivers;
}[] = [
  {
    id: "baseline",
    label: "Late 2026",
    blurb:
      "Licensing is arriving. Agents are useful and uneven. Stablecoins are large, and still mostly dollar claims.",
    drivers: { ai: 66, crypto: 36, regulation: 64, fragmentation: 50, capacity: 72 },
  },
  {
    id: "clamp",
    label: "State clamp",
    blurb: "Rules are tight, states can implement them, and blocs still coordinate.",
    drivers: { ai: 48, crypto: 22, regulation: 90, fragmentation: 22, capacity: 86 },
  },
  {
    id: "exit",
    label: "Parallel exit",
    blurb:
      "Self-custody and agent payments spread faster than enforcement, across a split world.",
    drivers: { ai: 74, crypto: 88, regulation: 24, fragmentation: 84, capacity: 40 },
  },
  {
    id: "fortress",
    label: "Bloc fortress",
    blurb:
      "Fast AI, closed rails, and fragmented geopolitics. Open crypto is squeezed into a supervised pipe.",
    drivers: { ai: 88, crypto: 14, regulation: 92, fragmentation: 80, capacity: 84 },
  },
  {
    id: "open-fast",
    label: "Fast and open",
    blurb:
      "Agents improve quickly, crypto rails stay relatively open, and enforcement is real but patchy.",
    drivers: { ai: 90, crypto: 70, regulation: 46, fragmentation: 62, capacity: 58 },
  },
];

const clamp = (n: number) => Math.max(0, Math.min(100, n));

function band(value: number, target: number, width: number) {
  return Math.max(0, 100 - (Math.abs(value - target) / width) * 100);
}

function shares(raw: Record<ScenarioId, number>): Record<ScenarioId, number> {
  const ids = Object.keys(raw) as ScenarioId[];
  const total = ids.reduce((sum, id) => sum + Math.max(raw[id], 0), 0);
  const rows = ids.map((id) => {
    const exact = total === 0 ? 0 : (Math.max(raw[id], 0) / total) * 100;
    return { id, floor: Math.floor(exact), frac: exact - Math.floor(exact) };
  });
  let left = 100 - rows.reduce((sum, row) => sum + row.floor, 0);
  rows.sort((a, b) => b.frac - a.frac || a.id.localeCompare(b.id));
  const out = {} as Record<ScenarioId, number>;
  for (const row of rows) {
    const extra = left > 0 ? 1 : 0;
    out[row.id] = row.floor + extra;
    if (left > 0) left -= 1;
  }
  return out;
}

export function evaluate(input: Drivers): Evaluation {
  const ai = clamp(input.ai);
  const crypto = clamp(input.crypto);
  const reg = clamp(input.regulation);
  const frag = clamp(input.fragmentation);
  const cap = clamp(input.capacity);

  const terms: Record<ScenarioId, Term[]> = {
    absorb: [
      { label: "Rules that are actually enforced", value: 0.32 * reg },
      { label: "States that can run what they legislate", value: 0.3 * cap },
      { label: "Cross-border cooperation still works", value: 0.22 * (100 - frag) },
      { label: "AI useful inside firms and agencies", value: 0.1 * ai },
      { label: "Crypto large enough to bother licensing", value: 0.06 * crypto },
    ],
    parallel: [
      { label: "Open self-custody and stablecoin use", value: 0.34 * crypto },
      { label: "Enforcement stops at the border", value: 0.28 * frag },
      { label: "Agents that can pay without a bank app", value: 0.16 * ai },
      { label: "A loose or patchy legal perimeter", value: 0.14 * (100 - reg) },
      { label: "States that struggle to build alternatives", value: 0.08 * (100 - cap) },
    ],
    fortress: [
      { label: "Blocs that no longer share a stack", value: 0.28 * frag },
      { label: "Strict control of money, models and identity", value: 0.22 * reg },
      { label: "AI capable enough to administer control", value: 0.22 * ai },
      { label: "States able to run surveillance and CBDCs", value: 0.16 * cap },
      { label: "Little room left for open crypto", value: 0.12 * (100 - crypto) },
    ],
    hybrid: [
      {
        label: "AI fast, but not an ungoverned leap",
        value: 0.22 * band(ai, 60, 40),
      },
      {
        label: "Crypto present, not the household balance sheet",
        value: 0.2 * band(crypto, 40, 42),
      },
      {
        label: "Regulation serious, short of a closed perimeter",
        value: 0.22 * band(reg, 60, 38),
      },
      {
        label: "Rivalry without a full split of the stack",
        value: 0.16 * band(frag, 42, 42),
      },
      {
        label: "Capable states that do not only surveil",
        value: 0.2 * band(cap, 70, 36),
      },
    ],
  };

  const raw = {
    absorb: terms.absorb.reduce((sum, term) => sum + term.value, 0),
    parallel: terms.parallel.reduce((sum, term) => sum + term.value, 0),
    fortress: terms.fortress.reduce((sum, term) => sum + term.value, 0),
    hybrid: terms.hybrid.reduce((sum, term) => sum + term.value, 0),
  } satisfies Record<ScenarioId, number>;

  const share = shares(raw);
  const scores = (Object.keys(raw) as ScenarioId[])
    .map((id) => ({
      id,
      raw: raw[id],
      share: share[id],
      terms: [...terms[id]].sort((a, b) => b.value - a.value),
    }))
    .sort((a, b) => b.share - a.share || a.id.localeCompare(b.id));

  const leader = scores[0].id;
  const runnerUp = scores[1].id;
  const margin = scores[0].share - scores[1].share;

  return {
    scores,
    leader,
    runnerUp,
    margin,
    contested: margin < 5,
  };
}
