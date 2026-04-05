import type Database from "better-sqlite3";

export type InsertInput = {
  submission_id: string;
  received_at: string;
  payload_sha256: string;
  run_id: string;
  schema_version: string;
  profile_json: string;
  /** Client-prepared dashboard summary JSON; null for legacy submissions. */
  dashboard_summary_json: string | null;
};

export function initSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      submission_id TEXT PRIMARY KEY,
      received_at TEXT NOT NULL,
      payload_sha256 TEXT NOT NULL UNIQUE,
      run_id TEXT NOT NULL UNIQUE,
      schema_version TEXT NOT NULL,
      profile_json TEXT NOT NULL,
      dashboard_summary_json TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_submissions_received ON submissions(received_at);
  `);
  migrateSubmissionsAddSummaryColumn(db);
}

function migrateSubmissionsAddSummaryColumn(db: Database.Database): void {
  const cols = db.prepare(`PRAGMA table_info(submissions)`).all() as { name: string }[];
  if (!cols.some((c) => c.name === "dashboard_summary_json")) {
    db.exec(`ALTER TABLE submissions ADD COLUMN dashboard_summary_json TEXT`);
  }
}

export type InsertOk = { ok: true; submission_id: string; received_at: string };
export type InsertConflict = {
  ok: false;
  conflict: "payload_sha256" | "run_id";
  submission_id: string;
};

export function insertSubmission(db: Database.Database, row: InsertInput): InsertOk | InsertConflict {
  try {
    db.prepare(
      `INSERT INTO submissions (submission_id, received_at, payload_sha256, run_id, schema_version, profile_json, dashboard_summary_json)
       VALUES (@submission_id, @received_at, @payload_sha256, @run_id, @schema_version, @profile_json, @dashboard_summary_json)`
    ).run(row);
    return { ok: true, submission_id: row.submission_id, received_at: row.received_at };
  } catch (e: unknown) {
    if (e && typeof e === "object" && "code" in e && (e as { code: string }).code === "SQLITE_CONSTRAINT_UNIQUE") {
      const byHash = db
        .prepare(`SELECT submission_id FROM submissions WHERE payload_sha256 = ?`)
        .get(row.payload_sha256) as { submission_id: string } | undefined;
      if (byHash) {
        return { ok: false, conflict: "payload_sha256", submission_id: byHash.submission_id };
      }
      const byRun = db
        .prepare(`SELECT submission_id FROM submissions WHERE run_id = ?`)
        .get(row.run_id) as { submission_id: string } | undefined;
      if (byRun) {
        return { ok: false, conflict: "run_id", submission_id: byRun.submission_id };
      }
    }
    throw e;
  }
}
