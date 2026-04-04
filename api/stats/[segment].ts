import type { VercelRequest, VercelResponse } from "@vercel/node";
import { corsHeaders, sendJson, statsMinBucketCount } from "../_util";

const ALLOWED = new Set(["overview", "full", "hardware", "tools", "models"]);

function nowIso(): string {
  return new Date().toISOString();
}

function fallbackOverview(min: number, t: string) {
  return {
    schema_version: "impact.stats.overview.v0.1" as const,
    generated_at: t,
    submission_count: 0,
    below_global_threshold: true,
    min_bucket_count: min,
  };
}

function fallbackFull(min: number, t: string) {
  return {
    schema_version: "impact.stats.v0.1" as const,
    generated_at: t,
    privacy: { min_bucket_count: min, suppressed_small_buckets: true as const },
    submission_count: 0,
    below_global_threshold: true,
    hardware: {
      machine_class: [] as { key: string; count: number }[],
      chip: [] as { key: string; count: number }[],
      memory_band: [] as { key: string; count: number }[],
      os_name: [] as { key: string; count: number }[],
      architecture: [] as { key: string; count: number }[],
    },
    tools: {
      runtime_id: [] as { key: string; count: number }[],
      runtime_by_status: [] as { key: string; count: number }[],
      tool_id: [] as { key: string; count: number }[],
    },
    models: { by_id_locality: [] as { key: string; count: number }[] },
  };
}

function fallbackHardware(min: number, t: string) {
  return {
    schema_version: "impact.stats.hardware.v0.1" as const,
    generated_at: t,
    submission_count: 0,
    below_global_threshold: true,
    min_bucket_count: min,
    machine_class: [],
    chip: [],
    memory_band: [],
    os_name: [],
    architecture: [],
  };
}

function fallbackTools(min: number, t: string) {
  return {
    schema_version: "impact.stats.tools.v0.1" as const,
    generated_at: t,
    submission_count: 0,
    below_global_threshold: true,
    min_bucket_count: min,
    runtime_id: [],
    runtime_by_status: [],
    tool_id: [],
  };
}

function fallbackModels(min: number, t: string) {
  return {
    schema_version: "impact.stats.models.v0.1" as const,
    generated_at: t,
    submission_count: 0,
    below_global_threshold: true,
    min_bucket_count: min,
    by_id_locality: [],
  };
}

function segmentName(req: VercelRequest): string {
  const q = req.query.segment;
  if (typeof q === "string") {
    return q;
  }
  if (Array.isArray(q) && typeof q[0] === "string") {
    return q[0];
  }
  return "";
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders());
    res.end();
    return;
  }
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const segment = segmentName(req);
  if (!ALLOWED.has(segment)) {
    sendJson(res, 404, { error: "Unknown stats segment" });
    return;
  }

  const upstream = process.env.IMPACT_INGEST_UPSTREAM?.trim().replace(/\/$/, "") ?? "";
  if (upstream) {
    const target = `${upstream}/api/stats/${segment}`;
    try {
      const r = await fetch(target, { headers: { Accept: "application/json" }, redirect: "follow" });
      const text = await r.text();
      for (const [k, v] of Object.entries(corsHeaders())) {
        res.setHeader(k, v);
      }
      const ct = r.headers.get("content-type");
      if (ct) {
        res.setHeader("content-type", ct);
      } else {
        res.setHeader("content-type", "application/json; charset=utf-8");
      }
      res.status(r.status).send(text);
      return;
    } catch {
      sendJson(res, 502, { error: "upstream_unavailable" });
      return;
    }
  }

  const min = statsMinBucketCount();
  const t = nowIso();
  switch (segment) {
    case "overview":
      sendJson(res, 200, fallbackOverview(min, t));
      return;
    case "full":
      sendJson(res, 200, fallbackFull(min, t));
      return;
    case "hardware":
      sendJson(res, 200, fallbackHardware(min, t));
      return;
    case "tools":
      sendJson(res, 200, fallbackTools(min, t));
      return;
    case "models":
      sendJson(res, 200, fallbackModels(min, t));
      return;
    default:
      sendJson(res, 404, { error: "Unknown stats segment" });
  }
}
