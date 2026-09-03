#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const [name, role, order] = process.argv.slice(2);

if (!name || !role || !order) {
  console.error('usage: npm run new:member -- "Full Name" "ROLE" <order>');
  process.exit(1);
}

if (!/^\d+$/.test(order)) {
  console.error(`"${order}" is not a whole number`);
  process.exit(1);
}

const slug = name
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  console.error(`"${name}" has no letters or digits to build a filename from`);
  process.exit(1);
}

const path = join("src", "content", "board", `${slug}.md`);
const file = `---
name: ${name}
role: ${role.toUpperCase()}
order: ${order}
# linkedin: https://www.linkedin.com/in/${slug}/
# photo: /board/${slug}.jpg
# committee: true
---
`;

try {
  writeFileSync(path, file, { flag: "wx" }); // never clobber an existing member
} catch (error) {
  console.error(
    error.code === "EEXIST" ? `${path} already exists` : error.message,
  );
  process.exit(1);
}

console.log(path);
