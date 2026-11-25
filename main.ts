// Famous Last Words: The Funniest Epitaph
// Writes a single one-line tombstone epitaph (famous last words,
// at most 150 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Tell my boss I'm working from home now.";

if (entry.length < 1 || entry.length > 150) {
  throw new Error(`entry must be 1-150 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
