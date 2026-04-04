import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import { describe, expect, it, beforeEach } from "vitest";
import { initSchema, insertSubmission } from "./store.js";
import { getFullStats, getOverview, loadValidatedProfiles } from "./stats-from-db.js";
import { randomUUID } from "node:crypto";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(__dirname, "../../../fixtures/baseline-profile.sample.json");

function sha256(s: string): string {
  return createHash("sha256").update(s, "utf8").digest("hex");
}

describe("stats-from-db", () => {
  let db: Database.Database;
  beforeEach(() => {
    db = new Database(":memory:");
    initSchema(db);
  });

  function insertFixture(runId: string): void {
    const raw = readFileSync(fixturePath, "utf8");
    const profile = JSON.parse(raw) as { run_id: string };
    profile.run_id = runId;
    const body = JSON.stringify(profile);
    insertSubmission(db, {
      submission_id: randomUUID(),
      received_at: new Date().toISOString(),
      payload_sha256: sha256(body),
      run_id: runId,
      schema_version: "impact.v0.3",
      profile_json: body,
    });
  }

  it("loadValidatedProfiles returns parsed profiles", () => {
    insertFixture(randomUUID());
    const list = loadValidatedProfiles(db);
    expect(list).toHaveLength(1);
    expect(list[0].schema_version).toBe("impact.v0.3");
  });

  it("getOverview reflects count", () => {
    insertFixture(randomUUID());
    const o = getOverview(db, 5);
    expect(o.submission_count).toBe(1);
    expect(o.below_global_threshold).toBe(true);
  });

  it("getFullStats exposes hardware after threshold", () => {
    for (let i = 0; i < 5; i++) insertFixture(randomUUID());
    const s = getFullStats(db, 2);
    expect(s.below_global_threshold).toBe(false);
    expect(s.hardware.machine_class.length).toBeGreaterThan(0);
  });
});
