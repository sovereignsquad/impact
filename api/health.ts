import type { VercelRequest, VercelResponse } from "@vercel/node";
import { corsHeaders, sendJson } from "./_util";

export default function handler(req: VercelRequest, res: VercelResponse): void {
  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders());
    res.end();
    return;
  }
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  const upstream = process.env.IMPACT_INGEST_UPSTREAM?.trim().replace(/\/$/, "") ?? "";
  sendJson(res, 200, {
    ok: true,
    service: "impact-vercel-api",
    stats_mode: upstream ? "upstream" : "fallback",
  });
}
