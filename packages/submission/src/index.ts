import { appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ImpactProfile } from "@impact/schemas";

export type SubmissionResult =
  | { ok: true; submission_id: string; raw?: string }
  | { ok: false; error: string };

const RECEIPT_DIR = ".impact";
const RECEIPT_FILE = "submission-receipts.log";

/**
 * POST anonymised profile to IMPACT_SUBMIT_URL when set.
 * Without URL, returns a clear error (no silent network).
 */
export async function submitProfile(
  profile: ImpactProfile,
  opts?: { signal?: AbortSignal }
): Promise<SubmissionResult> {
  const url = process.env.IMPACT_SUBMIT_URL?.trim();
  if (!url) {
    return {
      ok: false,
      error:
        "No submission endpoint configured (set IMPACT_SUBMIT_URL). Local files are unchanged.",
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(profile),
      signal: opts?.signal,
    });
    const text = await res.text();
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}: ${text.slice(0, 500)}` };
    }
    let submission_id = `http_${Date.now()}`;
    try {
      const j = JSON.parse(text) as { id?: string; submission_id?: string };
      submission_id = j.submission_id ?? j.id ?? submission_id;
    } catch {
      /* use default */
    }
    return { ok: true, submission_id, raw: text };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, error: msg };
  }
}

export async function appendLocalReceipt(
  homedir: string,
  line: string
): Promise<void> {
  const dir = path.join(homedir, RECEIPT_DIR);
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, RECEIPT_FILE);
  await appendFile(file, `${new Date().toISOString()} ${line}\n`, "utf8");
}

export async function writePayloadPreview(dir: string, profile: ImpactProfile): Promise<string> {
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "impact-submit-preview.json");
  await writeFile(file, `${JSON.stringify(profile, null, 2)}\n`, "utf8");
  return file;
}
