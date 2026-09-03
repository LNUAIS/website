import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type LnuEvent = {
  slug: string;
  date: Date;
  kind: string;
  place: string;
  title: string;
  blurb: string;
  /** Optional registration URL — omit it and the sign-up button isn't rendered. */
  link?: string;
  day: string;
  month: string;
  year: string;
  weekday: string;
};

const DIR = join(process.cwd(), "src/content/events");
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
const REQUIRED = ["date", "kind", "place", "title"] as const;
const ALLOWED = new Set<string>([...REQUIRED, "link"]);

// Dates are authored as plain `2025-12-11`, which parses as UTC midnight, so
// every derived field has to be formatted in UTC or the day can slip by one.
const part = (date: Date, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "UTC" }).format(
    date,
  );

function parse(slug: string, raw: string): LnuEvent {
  const match = FRONTMATTER.exec(raw);
  if (!match) throw new Error(`${slug}: missing --- frontmatter block`);
  const [, head, body] = match;

  const fields = new Map(
    head
      .split("\n")
      .filter((line) => line.trim() !== "")
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
    if (!ALLOWED.has(key)) throw new Error(`${slug}: unknown field "${key}"`);
  }
  for (const key of REQUIRED) {
    if (!fields.get(key)) throw new Error(`${slug}: missing "${key}"`);
  }

  const date = new Date(`${fields.get("date")}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    throw new Error(
      `${slug}: "${fields.get("date")}" is not a YYYY-MM-DD date`,
    );
  }

  const blurb = body.trim();
  if (!blurb) throw new Error(`${slug}: no body text to use as the blurb`);

  const link = fields.get("link");
  if (link !== undefined && !/^https?:\/\/\S+$/.test(link)) {
    throw new Error(`${slug}: link must be an http(s) URL, got "${link}"`);
  }

  return {
    slug,
    date,
    kind: fields.get("kind") as string,
    place: fields.get("place") as string,
    title: fields.get("title") as string,
    blurb,
    link,
    day: part(date, { day: "2-digit" }),
    month: part(date, { month: "short" }).toUpperCase(),
    year: part(date, { year: "numeric" }),
    weekday: part(date, { weekday: "long" }),
  };
}

/**
 * Every event in src/content/events, newest first. `_`-prefixed files are
 * drafts and notes, and are skipped.
 *
 * Kept a function so `next dev` picks up new files without a restart —
 * Turbopack doesn't watch a directory we read ourselves.
 */
export function getEvents(): LnuEvent[] {
  return readdirSync(DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => parse(file, readFileSync(join(DIR, file), "utf8")))
    .sort(
      (a, b) =>
        b.date.getTime() - a.date.getTime() || a.slug.localeCompare(b.slug),
    );
}
