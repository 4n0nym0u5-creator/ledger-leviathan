import assert from "node:assert/strict";
import { bandOf, composeStar } from "./star.ts";

assert.equal(bandOf(0), "children");
assert.equal(bandOf(33), "children");
assert.equal(bandOf(34), "bridge");
assert.equal(bandOf(66), "bridge");
assert.equal(bandOf(67), "models");
assert.equal(bandOf(100), "models");

const star = composeStar({ mix: 40, gift: "truth", stance: "study" });
assert.equal(star.band, "bridge");
assert.ok(star.sentence.includes("truth") || star.sentence.includes("charm"));
assert.ok(star.sentence.length > 80);
assert.ok(!star.sentence.includes("undefined"));

console.log("georgia star ok");
