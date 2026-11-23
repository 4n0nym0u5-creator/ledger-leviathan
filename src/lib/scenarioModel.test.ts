import assert from "node:assert/strict";
import { evaluate, PRESETS } from "./scenarioModel.ts";

const expected: Record<string, string> = {
  baseline: "hybrid",
  clamp: "absorb",
  exit: "parallel",
  fortress: "fortress",
  "open-fast": "parallel",
};

for (const preset of PRESETS) {
  const result = evaluate(preset.drivers);
  const line = result.scores
    .map((score) => `${score.id}:${score.share}`)
    .join(" ");
  console.log(`${preset.id} -> ${result.leader} (${line}) margin ${result.margin}`);
  assert.equal(result.leader, expected[preset.id], preset.id);
}

const sum = evaluate(PRESETS[0].drivers).scores.reduce((total, score) => total + score.share, 0);
assert.equal(sum, 100);
console.log("scenario model ok");
