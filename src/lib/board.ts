import { existsSync } from "node:fs";
import { join } from "node:path";
import { readCollection } from "./frontmatter";

export type BoardMember = {
  slug: string;
  name: string;
  role: string;
  /** Optional — omitted until someone writes one. */
  blurb?: string;
  linkedin?: string;
  /** Path under public/, e.g. `/board/ada.jpg`. Falls back to a placeholder. */
  photo?: string;
  /** Appointed rather than elected. */
  committee: boolean;
  order: number;
};

const REQUIRED = ["name", "role", "order"] as const;
const ALLOWED = [...REQUIRED, "linkedin", "photo", "committee"] as const;

export function getBoard(): BoardMember[] {
  return readCollection("board", ALLOWED, REQUIRED)
    .map(({ slug, field, body }): BoardMember => {
      const order = Number(field("order"));
      if (!Number.isInteger(order)) {
        throw new Error(`${slug}: order must be a whole number`);
      }

      const linkedin = field("linkedin");
      if (linkedin !== undefined && !/^https?:\/\/\S+$/.test(linkedin)) {
        throw new Error(`${slug}: linkedin must be an http(s) URL`);
      }

      // Catch a typo'd or missing photo at build time rather than shipping a
      // broken <img> — the file has to actually be sitting in public/.
      const photo = field("photo");
      if (photo !== undefined) {
        if (!photo.startsWith("/")) {
          throw new Error(`${slug}: photo must start with "/", got "${photo}"`);
        }
        if (!existsSync(join(process.cwd(), "public", photo))) {
          throw new Error(`${slug}: no such file at public${photo}`);
        }
      }

      const committee = field("committee");
      if (committee !== undefined && committee !== "true") {
        throw new Error(`${slug}: committee may only be "true" or omitted`);
      }

      return {
        slug,
        name: field("name") as string,
        role: field("role") as string,
        blurb: body || undefined,
        linkedin,
        photo,
        committee: committee === "true",
        order,
      };
    })
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
