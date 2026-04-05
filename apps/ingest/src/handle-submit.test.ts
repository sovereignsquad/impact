import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import { describe, expect, it, beforeEach } from "vitest";
import { initSchema } from "./store.js";
import { processSubmission } from "./handle-submit.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(__dirname, "../../../fixtures/baseline-profile.sample.json");

function memoryDb(): Database.Database {
  const db = new Database(":memory:");
  initSchema(db);
  return db;
}

describe("processSubmission", () => {
  let db: Database.Database;
  beforeEach(() => {
    db = memoryDb();
  });

  it("accepts valid profile JSON", () => {
    const raw = readFileSync(fixturePath, "utf8");
    const r = processSubmission(db, raw);
    expect(r.status).toBe(200);
    if (r.status === 200) {
      expect(r.body.submission_id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );
      expect(r.body.received_at).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    }
  });

  it("returns 400 for invalid JSON", () => {
    const r = processSubmission(db, "not json");
    expect(r.status).toBe(400);
  });

  it("returns 400 for schema violations", () => {
    const r = processSubmission(db, JSON.stringify({ foo: 1 }));
    expect(r.status).toBe(400);
    if (r.status === 400) {
      expect(r.body.error).toContain("Schema validation failed");
    }
  });

  it("returns 409 duplicate for identical body", () => {
    const raw = readFileSync(fixturePath, "utf8");
    expect(processSubmission(db, raw).status).toBe(200);
    const r2 = processSubmission(db, raw);
    expect(r2.status).toBe(409);
    if (r2.status === 409) {
      expect(r2.body.submission_id).toBeTruthy();
      expect(r2.body.message).toContain("Duplicate");
    }
  });

  it("returns 409 when same run_id with different JSON bytes", () => {
    const base = JSON.parse(readFileSync(fixturePath, "utf8")) as Record<string, unknown>;
    const raw1 = JSON.stringify(base);
    expect(processSubmission(db, raw1).status).toBe(200);
    const raw2 = JSON.stringify({ ...base, created_at: "2099-01-01T00:00:00.000Z" });
    const r2 = processSubmission(db, raw2);
    expect(r2.status).toBe(409);
    if (r2.status === 409) {
      expect(r2.body.message).toContain("run_id");
    }
  });

  it("accepts impact.submission.v0.1 envelope and stores dashboard_summary_json", () => {
    const profile = JSON.parse(readFileSync(fixturePath, "utf8")) as Record<string, unknown>;
    const dashboard_summary = {
      summary_version: "impact.summary.v0.1",
      normalization_version: "1",
      profile_schema_version: "impact.v0.3",
      platform_family: "macos",
      machine_class: "apple_m1_pro_16gb_arm64",
      chip_family: "apple_m_series",
      memory_band_gb: "16_32gb",
      runtime_families: ["mlx_python", "ollama"],
      tool_families: ["codex_cli"],
      model_families: ["llama"],
      local_model_count: 1,
      cloud_tool_present: false,
      reachable_runtime_count: 1,
      partial_runtime_count: 1,
      architecture: "arm64",
    };
    const body = JSON.stringify({
      submission_kind: "impact.submission.v0.1",
      profile,
      dashboard_summary,
    });
    const r = processSubmission(db, body);
    expect(r.status).toBe(200);
    const row = db
      .prepare(`SELECT profile_json, dashboard_summary_json FROM submissions LIMIT 1`)
      .get() as { profile_json: string; dashboard_summary_json: string };
    expect(JSON.parse(row.profile_json).schema_version).toBe("impact.v0.3");
    expect(JSON.parse(row.dashboard_summary_json).summary_version).toBe("impact.summary.v0.1");
  });
});
