import { readCollection } from "./frontmatter";

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

const REQUIRED = ["date", "kind", "place", "title"] as const;
const ALLOWED = [...REQUIRED, "link"] as const;

// Dates are authored as plain `2025-12-11`, which parses as UTC midnight, so
// every derived field has to be formatted in UTC or the day can slip by one.
const part = (date: Date, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { ...options, timeZone: "UTC" }).format(
    date,
  );

export function getEvents(): LnuEvent[] {
  return readCollection("events", ALLOWED, REQUIRED)
    .map(({ slug, field, body }): LnuEvent => {
      const date = new Date(`${field("date")}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) {
        throw new Error(`${slug}: "${field("date")}" is not a YYYY-MM-DD date`);
      }

      if (!body) throw new Error(`${slug}: no body text to use as the blurb`);

      const link = field("link");
      if (link !== undefined && !/^https?:\/\/\S+$/.test(link)) {
        throw new Error(`${slug}: link must be an http(s) URL, got "${link}"`);
      }

      return {
        slug,
        date,
        kind: field("kind") as string,
        place: field("place") as string,
        title: field("title") as string,
        blurb: body,
        link,
        day: part(date, { day: "2-digit" }),
        month: part(date, { month: "short" }).toUpperCase(),
        year: part(date, { year: "numeric" }),
        weekday: part(date, { weekday: "long" }),
      };
    })
    .sort(
      (a, b) =>
        b.date.getTime() - a.date.getTime() || a.slug.localeCompare(b.slug),
    );
}
