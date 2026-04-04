import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import http from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { createIngestServer } from "./http-server.js";
import { processSubmission } from "./handle-submit.js";
import { initSchema } from "./store.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(__dirname, "../../../fixtures/baseline-profile.sample.json");

function httpRequest(
  port: number,
  path: string,
  method: "GET" | "OPTIONS",
  headers?: Record<string, string>
): Promise<{ status: number; headers: http.IncomingHttpHeaders; body: string }> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { hostname: "127.0.0.1", port, path, method, headers },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          resolve({
            status: res.statusCode ?? 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString("utf8"),
          });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function seedProfiles(db: Database.Database, count: number): void {
  const raw0 = readFileSync(fixturePath, "utf8");
  const base = JSON.parse(raw0) as Record<string, unknown>;
  for (let i = 0; i < count; i++) {
    const raw = JSON.stringify({
      ...base,
      run_id: randomUUID(),
      created_at: `2026-04-${String((i % 28) + 1).padStart(2, "0")}T12:00:00.000Z`,
    });
    expect(processSubmission(db, raw).status).toBe(200);
  }
}

describe("createIngestServer — stats read API", () => {
  let db: Database.Database;
  let server: ReturnType<typeof createIngestServer>;
  let port: number;

  beforeAll(async () => {
    db = new Database(":memory:");
    initSchema(db);
    seedProfiles(db, 5);
    server = createIngestServer(db);
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", () => resolve()));
    const addr = server.address();
    if (!addr || typeof addr === "string") {
      throw new Error("expected TCP listen address");
    }
    port = addr.port;
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    db.close();
  });

  it("GET /api/stats/overview", async () => {
    const r = await httpRequest(port, "/api/stats/overview", "GET");
    expect(r.status).toBe(200);
    const j = JSON.parse(r.body) as {
      schema_version: string;
      submission_count: number;
      below_global_threshold: boolean;
      min_bucket_count: number;
    };
    expect(j.schema_version).toBe("impact.stats.overview.v0.1");
    expect(j.submission_count).toBe(5);
    expect(j.below_global_threshold).toBe(false);
    expect(j.min_bucket_count).toBe(5);
  });

  it("GET /api/stats/full returns impact.stats.v0.1 with hardware buckets", async () => {
    const r = await httpRequest(port, "/api/stats/full", "GET");
    expect(r.status).toBe(200);
    const j = JSON.parse(r.body) as {
      schema_version: string;
      below_global_threshold: boolean;
      hardware: { machine_class: { key: string; count: number }[] };
    };
    expect(j.schema_version).toBe("impact.stats.v0.1");
    expect(j.below_global_threshold).toBe(false);
    expect(j.hardware.machine_class.length).toBeGreaterThan(0);
  });

  it("GET /api/stats/hardware|tools|models return slice schema versions", async () => {
    const hw = await httpRequest(port, "/api/stats/hardware", "GET");
    expect(hw.status).toBe(200);
    expect(JSON.parse(hw.body).schema_version).toBe("impact.stats.hardware.v0.1");

    const tools = await httpRequest(port, "/api/stats/tools", "GET");
    expect(tools.status).toBe(200);
    expect(JSON.parse(tools.body).schema_version).toBe("impact.stats.tools.v0.1");

    const models = await httpRequest(port, "/api/stats/models", "GET");
    expect(models.status).toBe(200);
    expect(JSON.parse(models.body).schema_version).toBe("impact.stats.models.v0.1");
  });

  it("OPTIONS responds 204 with CORS headers", async () => {
    const r = await httpRequest(port, "/api/stats/full", "OPTIONS");
    expect(r.status).toBe(204);
    expect(r.headers["access-control-allow-origin"]).toBe("*");
    expect(r.headers["access-control-allow-methods"]?.toString()).toContain("GET");
  });

  it("GET JSON includes CORS headers", async () => {
    const r = await httpRequest(port, "/health", "GET");
    expect(r.status).toBe(200);
    expect(r.headers["access-control-allow-origin"]).toBe("*");
  });

  it("unknown path is 404 with CORS", async () => {
    const r = await httpRequest(port, "/api/stats/nope", "GET");
    expect(r.status).toBe(404);
    expect(r.headers["access-control-allow-origin"]).toBe("*");
  });

  it("uses IMPACT_STATS_CORS_ORIGIN when set (read per response)", async () => {
    vi.stubEnv("IMPACT_STATS_CORS_ORIGIN", "https://app.example");
    const r = await httpRequest(port, "/health", "GET");
    expect(r.headers["access-control-allow-origin"]).toBe("https://app.example");
    vi.unstubAllEnvs();
    const r2 = await httpRequest(port, "/health", "GET");
    expect(r2.headers["access-control-allow-origin"]).toBe("*");
  });
});

describe("createIngestServer — stats below global threshold", () => {
  let db: Database.Database;
  let server: ReturnType<typeof createIngestServer>;
  let port: number;

  beforeAll(async () => {
    db = new Database(":memory:");
    initSchema(db);
    seedProfiles(db, 2);
    server = createIngestServer(db);
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", () => resolve()));
    const addr = server.address();
    if (!addr || typeof addr === "string") {
      throw new Error("expected TCP listen address");
    }
    port = addr.port;
  });

  afterAll(async () => {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    db.close();
  });

  it("GET /api/stats/full suppresses dimension buckets when n < min", async () => {
    const r = await httpRequest(port, "/api/stats/full", "GET");
    expect(r.status).toBe(200);
    const j = JSON.parse(r.body) as {
      submission_count: number;
      below_global_threshold: boolean;
      hardware: { machine_class: unknown[] };
    };
    expect(j.submission_count).toBe(2);
    expect(j.below_global_threshold).toBe(true);
    expect(j.hardware.machine_class).toEqual([]);
  });
});
