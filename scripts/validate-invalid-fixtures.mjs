#!/usr/bin/env node
/**
 * Fixtures under fixtures/invalid must FAIL schema validation.
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const invalidDir = join(root, "fixtures/invalid");
const schemaEntry = join(root, "packages/schemas/dist/index.js");

const { validateImpactProfile } = await import(pathToFileURL(schemaEntry).href);

const names = readdirSync(invalidDir).filter((n) => n.endsWith(".json")).sort();

let failed = false;
for (const n of names) {
  const f = join(invalidDir, n);
  const data = JSON.parse(readFileSync(f, "utf8"));
  try {
    validateImpactProfile(data);
    console.error(`FAIL ${f}: expected validation error, but profile parsed`);
    failed = true;
  } catch {
    console.log(`OK   ${f} (correctly rejected)`);
  }
}

if (failed) process.exit(1);
