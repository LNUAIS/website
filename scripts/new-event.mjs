#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const [title, date] = process.argv.slice(2);

if (!title || !date) {
  console.error('usage: npm run new:event -- "Event title" YYYY-MM-DD');
  process.exit(1);
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
  console.error(`"${date}" is not a YYYY-MM-DD date`);
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  console.error(`"${title}" has no letters or digits to build a filename from`);
  process.exit(1);
}

const path = join("src", "content", "events", `${slug}.md`);
const file = `---
date: ${date}
kind: WORKSHOP
place: VÄXJÖ
# time: 17:00–19:00
title: ${title}
# link: https://luma.com/
---

One paragraph describing the event. This is the blurb under the title.
`;

try {
  writeFileSync(path, file, { flag: "wx" }); // never clobber an existing event
} catch (error) {
  console.error(
    error.code === "EEXIST" ? `${path} already exists` : error.message,
  );
  process.exit(1);
}

console.log(path);
