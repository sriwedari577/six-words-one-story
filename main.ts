// Story: one complete story in exactly six words — planting,
// waiting, and an absence that never resolves.
// The turn is the second sentence: the first plants in hope, the
// second makes the absence permanent, so no further words are needed.
// This program writes that story, and nothing else, to the entry file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SIX_WORD_STORY = "He planted tomatoes. She never returned.";

// Write the story to entry.txt, creating the output directory if needed.
function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(dir, SIX_WORD_STORY);
  const words = SIX_WORD_STORY.trim().split(/\s+/).length;
  console.log(`entry.txt: ${words} words, ${[...SIX_WORD_STORY].length} characters`);
}

main();
