import { z } from "zod";

/** Normalized dashboard summary computed locally; aggregated server-side as fast path. */
export const DashboardSummarySchema = z.object({
  summary_version: z.literal("impact.summary.v0.1"),
  /** Bump when bucketing / family rules change (client/server drift control). */
  normalization_version: z.string().min(1).max(64).optional(),
  /** Schema of the bundled raw profile. */
  profile_schema_version: z.literal("impact.v0.3"),
  platform_family: z.enum(["macos", "linux", "windows", "unknown"]),
  /** Coarse machine class slug (from profile host.machine_class). */
  machine_class: z.string().min(1).max(256),
  /** Coarse chip family (derived from host.chip). */
  chip_family: z.string().min(1).max(128),
  /** Memory bucket label, e.g. 16_32gb, 8_16gb. */
  memory_band_gb: z.string().min(1).max(64),
  /** Distinct runtime families present (e.g. ollama, mlx_python). */
  runtime_families: z.array(z.string().min(1).max(128)),
  tool_families: z.array(z.string().min(1).max(128)),
  /** Model family tags (heuristic from model ids). */
  model_families: z.array(z.string().min(1).max(128)),
  local_model_count: z.number().int().min(0),
  /** True if any model is tagged cloud locality. */
  cloud_tool_present: z.boolean(),
  reachable_runtime_count: z.number().int().min(0),
  partial_runtime_count: z.number().int().min(0),
  /** Optional coarse architecture slug for stats parity with raw aggregates. */
  architecture: z.string().min(1).max(64).optional(),
});

export type DashboardSummary = z.infer<typeof DashboardSummarySchema>;

export function validateDashboardSummary(data: unknown): DashboardSummary {
  return DashboardSummarySchema.parse(data);
}
