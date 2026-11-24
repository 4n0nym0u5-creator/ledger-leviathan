import assert from "node:assert/strict";
import { evaluateCapital, type Posture, type WorldId } from "./capitalModel.ts";

const postures: Posture[] = ["partner", "client", "owner", "referee"];

for (const posture of postures) {
  for (const concentration of [0, 40, 100]) {
    const calm = evaluateCapital({ concentration, capability: 0, posture });
    assert.equal(calm.labourIndex, 100, `labour ${posture} ${concentration}`);
    assert.equal(calm.taxIndex, 100, `tax ${posture} ${concentration}`);
    assert.equal(calm.regime, false);
    const power = calm.power.state + calm.power.firms + calm.power.open;
    assert.equal(power, 100);
    const worlds = calm.worlds.reduce((sum, world) => sum + world.share, 0);
    assert.equal(worlds, 100);
  }
}

const expected: Array<{ concentration: number; capability: number; posture: Posture; leader: WorldId }> = [
  { concentration: 82, capability: 78, posture: "partner", leader: "fusion" },
  { concentration: 90, capability: 82, posture: "client", leader: "feudal" },
  { concentration: 75, capability: 80, posture: "owner", leader: "national" },
  { concentration: 22, capability: 70, posture: "referee", leader: "open" },
];

for (const preset of expected) {
  const result = evaluateCapital(preset);
  assert.equal(result.leader, preset.leader, preset.leader);
  assert.equal(result.regime, true);
  assert.ok(result.labourIndex < 100);
}

const mild = evaluateCapital({ concentration: 70, capability: 15, posture: "referee" });
const severe = evaluateCapital({ concentration: 90, capability: 82, posture: "client" });
assert.ok(mild.labourIndex > severe.labourIndex);
assert.ok(mild.taxIndex > severe.taxIndex);
assert.ok(severe.power.firms > mild.power.firms);

console.log("capital model ok");
