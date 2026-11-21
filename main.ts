// Writes one original one-line joke about working beside AI coding agents
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: the same fixed string, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent apologized for the bug, fixed it, apologized for the fix, then reintroduced the bug with a better comment.";

// The gate requires 1 to 280 Unicode code points, not only white space.
// Fail loudly instead of ever writing an invalid entry.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim() === "") {
  throw new Error(`joke is ${codePoints} code points, outside the 1-280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
