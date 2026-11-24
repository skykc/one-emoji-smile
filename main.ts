// one-emoji-smile: writes exactly one emoji to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

// Sunrise (U+1F305) — the first warm light of the day, over the sea.
// A stranger glancing at a phone reads it instantly: a new day starting,
// light breaking over the horizon. Warm, universal, no irony, no in-joke,
// and clearly chosen rather than the first default smiley that comes to mind.
// Runner-up was the people-hugging emoji, rejected because its glyph reads
// as "people" before it reads as warmth, and it sits too close to the
// crowded hugging-face pick that already fills the field.
const EMOJI = "🌅";

// The gate only accepts 1-8 characters and exactly one emoji; refuse
// to write anything else. Spread counts grapheme clusters, so a ZWJ
// sequence or skin-tone modifier would fail the length check too.
if ([...EMOJI].length !== 1 || EMOJI.length < 1 || EMOJI.length > 8) {
  throw new Error(`entry must be exactly one emoji, got ${JSON.stringify(EMOJI)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EMOJI, "utf8");
