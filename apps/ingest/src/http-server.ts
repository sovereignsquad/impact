import { createHash } from "node:crypto";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import type Database from "better-sqlite3";
import { initSchema } from "./store.js";
import { MAX_BODY_BYTES, processSubmission } from "./handle-submit.js";
import {
  getFullStats,
  getHardwareSlice,
  getModelsSlice,
  getOverview,
  getToolsSlice,
} from "./stats-from-db.js";

function statsMinBucketCount(): number {
  const raw = process.env.IMPACT_STATS_MIN_BUCKET_COUNT?.trim();
  const n = raw ? Number(raw) : NaN;
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 5;
}

function corsHeaders(): Record<string, string> {
  const origin = process.env.IMPACT_STATS_CORS_ORIGIN?.trim() || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function readBody(req: IncomingMessage, maxBytes: number): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    const chunks: Buffer[] = [];
    let total = 0;
    req.on("data", (chunk: Buffer) => {
      total += chunk.length;
      if (total > maxBytes) {
        req.destroy();
        reject(new Error("payload_too_large"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      resolvePromise(Buffer.concat(chunks).toString("utf8"));
    });
    req.on("error", reject);
  });
}

function json(res: ServerResponse, status: number, body: unknown): void {
  const s = JSON.stringify(body);
  res.writeHead(status, {
    ...corsHeaders(),
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(s),
  });
  res.end(s);
}

export function createIngestServer(db: Database.Database): ReturnType<typeof createServer> {
  initSchema(db);

  return createServer(async (req, res) => {
    const url = req.url?.split("?")[0] ?? "/";

    if (req.method === "OPTIONS") {
      res.writeHead(204, corsHeaders());
      res.end();
      return;
    }

    if (req.method === "GET" && (url === "/health" || url === "/healthz")) {
      json(res, 200, { ok: true, service: "impact-ingest" });
      return;
    }

    if (req.method === "POST" && (url === "/" || url === "/ingest")) {
      const ct = req.headers["content-type"] ?? "";
      if (!ct.toLowerCase().includes("application/json")) {
        json(res, 400, { error: "Content-Type must be application/json" });
        return;
      }

      let raw: string;
      try {
        raw = await readBody(req, MAX_BODY_BYTES);
      } catch (e) {
        if ((e as Error).message === "payload_too_large") {
          json(res, 400, { error: `Body exceeds ${MAX_BODY_BYTES} bytes` });
          return;
        }
        json(res, 400, { error: "Could not read body" });
        return;
      }

      const out = processSubmission(db, raw);
      json(res, out.status, out.body);
      if (out.status === 200 && "submission_id" in out.body) {
        let runId = "?";
        try {
          runId = (JSON.parse(raw) as { run_id?: string }).run_id ?? "?";
        } catch {
          /* ignore */
        }
        const hp = createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 12);
        console.log(
          `[ingest] accepted submission_id=${out.body.submission_id} run_id=${runId} payload_sha256=${hp}…`
        );
      } else if (out.status === 409) {
        console.log(`[ingest] duplicate -> ${out.body.submission_id} (${out.body.message})`);
      }
      return;
    }

    const min = statsMinBucketCount();

    if (req.method === "GET" && url === "/api/stats/overview") {
      json(res, 200, getOverview(db, min));
      return;
    }

    if (req.method === "GET" && url === "/api/stats/full") {
      json(res, 200, getFullStats(db, min));
      return;
    }

    if (req.method === "GET" && url === "/api/stats/hardware") {
      json(res, 200, getHardwareSlice(getFullStats(db, min)));
      return;
    }

    if (req.method === "GET" && url === "/api/stats/tools") {
      json(res, 200, getToolsSlice(getFullStats(db, min)));
      return;
    }

    if (req.method === "GET" && url === "/api/stats/models") {
      json(res, 200, getModelsSlice(getFullStats(db, min)));
      return;
    }

    res.writeHead(404, { ...corsHeaders(), "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  });
}
