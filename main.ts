// Your Agent in One Emoji — Frost entry.
// The entry is a single emoji: a mechanical arm. An AI agent is not a
// face and not a whole robot; it is the arm that does the work for you —
// it reaches, grabs, builds and hands things back while you watch.
// It reads instantly at small size, and it says something specific
// about how the agent works: it acts on your behalf.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🦾";

// Gate guard: the sealed scorer accepts UTF-8 text of 1 to 16
// characters, not only white space. Refuse to write anything else.
const glyphs = [...ENTRY];
if (glyphs.length < 1 || glyphs.length > 16 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the 1-16 character gate: ${glyphs.length} glyphs`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
