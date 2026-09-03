#!/usr/bin/env node
// The scaffolds must offer every field its loader accepts, filled or commented
// out. Without this the two drift apart silently and a field becomes
// undiscoverable — you only find it by reading the parser.
import { readFileSync } from "node:fs";

const collections = [
  { script: "scripts/new-event.mjs", loader: "src/lib/events.ts" },
  { script: "scripts/new-member.mjs", loader: "src/lib/board.ts" },
];

let failed = false;

for (const { script, loader } of collections) {
  const lists = readFileSync(loader, "utf8").match(
    /(?:REQUIRED|ALLOWED) = \[([^\]]*)\]/g,
  );
  const accepted = new Set(
    lists.flatMap((list) => [...list.matchAll(/"([a-z]+)"/g)].map((m) => m[1])),
  );

  const template = readFileSync(script, "utf8").match(/`---\n([\s\S]*?)\n---/);
  const offered = new Set(
    [...template[1].matchAll(/^(?:# ?)?([a-z]+):/gm)].map((m) => m[1]),
  );

  for (const field of accepted) {
    if (!offered.has(field)) {
      console.error(`${script}: missing "${field}" (accepted by ${loader})`);
      failed = true;
    }
  }
  for (const field of offered) {
    if (!accepted.has(field)) {
      console.error(`${script}: offers "${field}", which ${loader} rejects`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log("templates match their loaders");
