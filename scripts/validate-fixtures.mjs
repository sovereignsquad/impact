#!/usr/bin/env node
/**
 * Validate JSON fixtures against @impact/schemas (build first: npm run build).
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const schemaEntry = join(root, "packages/schemas/dist/index.js");

const { validateImpactProfile } = await import(pathToFileURL(schemaEntry).href);

const dirs = [join(root, "fixtures"), join(root, "fixtures/scenarios")];
const files = [];
for (const d of dirs) {
  let names = [];
  try {
    names = readdirSync(d);
  } catch {
    continue;
  }
  for (const n of names) {
    if (n.endsWith(".json")) files.push(join(d, n));
  }
}

let failed = false;
for (const f of files.sort()) {
  const raw = readFileSync(f, "utf8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error(`FAIL ${f}: invalid JSON`, e);
    failed = true;
    continue;
  }
  try {
    validateImpactProfile(data);
    console.log(`OK   ${f}`);
  } catch (e) {
    console.error(`FAIL ${f}:`, e.message ?? e);
    failed = true;
  }
}

if (failed) process.exit(1);
