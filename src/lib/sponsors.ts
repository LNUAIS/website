import { existsSync } from "node:fs";
import { join } from "node:path";
import { readCollection } from "./frontmatter";

export type Sponsor = {
  slug: string;
  name: string;
  /** Path under public/, e.g. `/sponsors/acme.svg`. Falls back to the name. */
  logo?: string;
  url?: string;
  /** Which ground the logo needs. Most marks are dark, so light is the default. */
  background: "light" | "dark";
  order: number;
};

const REQUIRED = ["name", "order"] as const;
const ALLOWED = [...REQUIRED, "logo", "url", "background"] as const;

export function getSponsors(): Sponsor[] {
  return readCollection("sponsors", ALLOWED, REQUIRED)
    .map(({ slug, field }): Sponsor => {
      const order = Number(field("order"));
      if (!Number.isInteger(order)) {
        throw new Error(`${slug}: order must be a whole number`);
      }

      const url = field("url");
      if (url !== undefined && !/^https?:\/\/\S+$/.test(url)) {
        throw new Error(`${slug}: url must be an http(s) URL, got "${url}"`);
      }

      // Catch a typo'd or missing logo at build time rather than shipping a
      // broken <img> — the file has to actually be sitting in public/.
      const logo = field("logo");
      if (logo !== undefined) {
        if (!logo.startsWith("/")) {
          throw new Error(`${slug}: logo must start with "/", got "${logo}"`);
        }
        if (!existsSync(join(process.cwd(), "public", logo))) {
          throw new Error(`${slug}: no such file at public${logo}`);
        }
      }

      const background = field("background") ?? "light";
      if (background !== "light" && background !== "dark") {
        throw new Error(
          `${slug}: background must be "light" or "dark", got "${background}"`,
        );
      }

      return {
        slug,
        name: field("name") as string,
        logo,
        url,
        background,
        order,
      };
    })
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
