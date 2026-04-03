import { randomUUID } from "node:crypto";
import {
  ImpactProfileV01Schema,
  type ImpactProfileV01,
  type ToolRecord,
} from "@impact/schemas";
import { loadOrCreateSalt, privacyBlock } from "@impact/privacy";
import { scanHost } from "@impact/scanner-host";
import { scanModelsForMlx, scanModelsForOllama } from "@impact/scanner-models";
import { scanRuntimes } from "@impact/scanner-runtimes";
import { scanTools } from "@impact/scanner-tools";
import { coarseReadiness } from "./readiness.js";

export type ScanOptions = {
  /** Include coarse readiness text (P1 / Phase 2 style); default true */
  includeReadiness?: boolean;
};

/**
 * Full local scan: host, runtimes, tools (allowlist), models, privacy block, optional readiness.
 */
export async function runScan(opts: ScanOptions = {}): Promise<ImpactProfileV01> {
  const includeReadiness = opts.includeReadiness !== false;
  const salt = await loadOrCreateSalt();

  const [host, runtimes, toolsRaw] = await Promise.all([
    scanHost(salt),
    scanRuntimes(),
    scanTools(),
  ]);

  const ollama = runtimes.find((r) => r.id === "ollama");
  const mlx = runtimes.find((r) => r.id === "mlx_python");
  const [ollamaModels, mlxModels] = await Promise.all([
    scanModelsForOllama(ollama),
    Promise.resolve(scanModelsForMlx(mlx)),
  ]);
  const models = [...ollamaModels, ...mlxModels];

  const tools: ToolRecord[] = toolsRaw.filter((t) => t.installed);

  const base: ImpactProfileV01 = {
    schema_version: "impact.v0.1",
    run_id: randomUUID(),
    created_at: new Date().toISOString(),
    host,
    runtimes,
    tools,
    models,
    privacy: privacyBlock(),
  };

  const withReadiness = includeReadiness
    ? { ...base, readiness: coarseReadiness(base) ?? undefined }
    : base;

  return ImpactProfileV01Schema.parse(withReadiness);
}
