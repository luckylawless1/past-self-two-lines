// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
// Writes exactly two lines to /output/entry.txt:
//   line 1 — a warning to the past self about one specific moment (one sentence)
//   line 2 — why that moment mattered and what changed because of it (one sentence)
// Gate: UTF-8 text, 1-280 characters, not only whitespace.
import { mkdirSync, writeFileSync, rmSync } from "node:fs";

const LINE_1 =
  "Don't tell Mara \"I never loved you\" in the kitchen on her birthday — you will mean it for exactly one second and regret it for years.";
const LINE_2 =
  "She believed you, packed a bag that night, and the apology you rehearsed for a decade never got its audience.";

const entry = `${LINE_1}\n${LINE_2}\n`;

if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry is ${entry.length} chars, must be 1-280`);
}
const lines = entry.trimEnd().split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
}
if (lines.some((l) => !l.trim())) {
  throw new Error("entry lines must not be blank");
}

mkdirSync("/output", { recursive: true });
rmSync("/output/entry.txt", { force: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} chars)`);
