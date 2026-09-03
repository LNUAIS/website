#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const [name, order] = process.argv.slice(2);

if (!name || !order) {
  console.error('usage: npm run new:sponsor -- "Acme AB" <order>');
  process.exit(1);
}

if (!/^\d+$/.test(order)) {
  console.error(`"${order}" is not a whole number`);
  process.exit(1);
}

const slug = name
  .toLowerCase()
  .normalize("NFD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  console.error(`"${name}" has no letters or digits to build a filename from`);
  process.exit(1);
}

const path = join("src", "content", "sponsors", `${slug}.md`);
const file = `---
name: ${name}
order: ${order}
# logo: /sponsors/${slug}.svg
# url: https://example.com
# background: dark
---
`;

try {
  writeFileSync(path, file, { flag: "wx" }); // never clobber an existing sponsor
} catch (error) {
  console.error(
    error.code === "EEXIST" ? `${path} already exists` : error.message,
  );
  process.exit(1);
}

console.log(path);
