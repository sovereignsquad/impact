/**
 * Central mapping from rule ids to field confidence.
 * Rules are documented in docs/confidence-rules.md — scanners should reference the same ids in comments where practical.
 */
import type { FieldConfidence } from "./provenance.js";

export const ConfidenceRules = {
  host_os_mapping: "high" as const,
  host_os_release: "high" as const,
  host_arch: "high" as const,
  host_chip_from_cpus: "medium" as const,
  host_chip_absent: "unknown" as const,
  host_core_count: "high" as const,
  host_memory: "high" as const,
  host_disk_df_success: "medium" as const,
  host_disk_df_fail: "unknown" as const,
  host_fingerprint: "high" as const,
  host_machine_class: "medium" as const,
  host_metal_hint: "medium" as const,
  ollama_version_cli: "high" as const,
  ollama_version_missing: "unknown" as const,
  ollama_reachable_api: "high" as const,
  mlx_pip_show: "high" as const,
  mlx_pip_absent: "unknown" as const,
  tool_which_hit: "high" as const,
  tool_which_miss: "unknown" as const,
  tool_version_cli: "medium" as const,
  tool_version_probe_fail: "unknown" as const,
  model_from_ollama_api: "high" as const,
} satisfies Record<string, FieldConfidence>;

export type ConfidenceRuleId = keyof typeof ConfidenceRules;

export function fieldConfidence(rule: ConfidenceRuleId): FieldConfidence {
  return ConfidenceRules[rule];
}
