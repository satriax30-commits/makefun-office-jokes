// Make the AI Judge Laugh: Office Jokes
// Writes a single one-line office joke to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no wall-clock time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke. Chosen over candidates about reply-all, quick syncs, and
// out-of-office vs calendar: this one has the sharpest turn ("Nobody did"
// reframes the whole setup) and the most universal office wince.
const JOKE =
  "I finally hit inbox zero by declaring email bankruptcy and asking everyone to resend anything important. Nobody did.";

// Enforce the gate ourselves: one line, 1-199 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 199 || /\n/.test(JOKE) || JOKE.trim().length === 0) {
  throw new Error(`joke fails gate: ${JOKE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
