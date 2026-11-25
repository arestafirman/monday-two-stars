// monday-two-stars — Monday, Reviewed in One Line
// Writes one single-line, two-star review of a Monday to /output/entry.txt.
// No dependencies, no network, no randomness: the entry text is a constant.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Two stars: the lift dropped me at the wrong floor three times, my badge opened every door except mine, and lunch was a vending-machine sandwich from 2019.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${ENTRY.length}`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY + "\n", "utf8");
