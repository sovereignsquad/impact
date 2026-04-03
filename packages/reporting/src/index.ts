import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ImpactProfileV01 } from "@impact/schemas";
import { renderHtmlReport } from "./html.js";

export { renderHtmlReport };

async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true });
}

export async function writeJsonReport(dir: string, profile: ImpactProfileV01): Promise<string> {
  await ensureDir(dir);
  const file = path.join(dir, "impact-profile.json");
  await writeFile(file, `${JSON.stringify(profile, null, 2)}\n`, "utf8");
  return file;
}

export async function writeHtmlReport(dir: string, profile: ImpactProfileV01): Promise<string> {
  await ensureDir(dir);
  const file = path.join(dir, "impact-report.html");
  await writeFile(file, renderHtmlReport(profile), "utf8");
  return file;
}
