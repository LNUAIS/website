import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type Entry = {
  /** Filename, e.g. `tech-bar.md`. Unique within a collection. */
  slug: string;
  field: (key: string) => string | undefined;
  /** Everything after the closing `---`, trimmed. */
  body: string;
};

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;

function parse(
  slug: string,
  raw: string,
  allowed: readonly string[],
  required: readonly string[],
): Entry {
  const match = FRONTMATTER.exec(raw);
  if (!match) throw new Error(`${slug}: missing --- frontmatter block`);
  const [, head, rest] = match;

  const fields = new Map(
    head
      .split("\n")
      // Blank lines and `# comments` let a template carry optional fields.
      .filter((line) => line.trim() !== "" && !line.trim().startsWith("#"))
      .map((line) => {
        const colon = line.indexOf(":");
        if (colon === -1)
          throw new Error(`${slug}: no "key: value" in "${line}"`);
        // Split on the FIRST colon only — titles like "Company Visit: Spiris" have their own.
        const value = line.slice(colon + 1).trim();
        return [
          line.slice(0, colon).trim(),
          // Strip only a matched pair, so `Hackers'` keeps its apostrophe.
          /^(".*"|'.*')$/.test(value) ? value.slice(1, -1) : value,
        ] as const;
      }),
  );

  for (const key of fields.keys()) {
    if (!allowed.includes(key))
      throw new Error(`${slug}: unknown field "${key}"`);
  }
  for (const key of required) {
    if (!fields.get(key)) throw new Error(`${slug}: missing "${key}"`);
  }

  return { slug, field: (key) => fields.get(key), body: rest.trim() };
}

/**
 * Read every `.md` in a content directory. `_`-prefixed files are drafts and
 * notes, and are skipped.
 *
 * Kept a function so `next dev` picks up new files without a restart —
 * Turbopack doesn't watch a directory we read ourselves.
 */
export function readCollection(
  dir: string,
  allowed: readonly string[],
  required: readonly string[],
): Entry[] {
  const path = join(process.cwd(), "src/content", dir);
  return readdirSync(path)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) =>
      parse(file, readFileSync(join(path, file), "utf8"), allowed, required),
    );
}
