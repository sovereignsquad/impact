import { z } from "zod";
import {
  DiscoverySemanticSchema,
  FieldConfidenceSchema,
  ProvenancedBooleanSchema,
  ProvenancedNumberSchema,
  ProvenancedStringSchema,
  ProvenancedIntSchema,
} from "./provenance.js";

export { DiscoverySemanticSchema, FieldConfidenceSchema };

/** Aggregate readiness line still uses discovery semantics (not field confidence) */
export const ReadinessConfidenceSchema = DiscoverySemanticSchema;

export const RuntimeOperationalStatusSchema = z.enum([
  "not_installed",
  "installed_unreachable",
  "installed_reachable",
  "unknown",
  "partial",
]);
export type RuntimeOperationalStatus = z.infer<typeof RuntimeOperationalStatusSchema>;

export const HostSchema = z.object({
  machine_class: ProvenancedStringSchema,
  fingerprint_hash: ProvenancedStringSchema,
  os_name: ProvenancedStringSchema,
  os_version: ProvenancedStringSchema,
  architecture: ProvenancedStringSchema,
  chip: ProvenancedStringSchema,
  memory_gb: ProvenancedNumberSchema,
  core_count: ProvenancedIntSchema.optional(),
  gpu_acceleration: z
    .object({
      metal_available: ProvenancedBooleanSchema,
    })
    .optional(),
  disk: z
    .object({
      free_gb: ProvenancedNumberSchema,
    })
    .optional(),
});

export const RuntimeCapabilitiesSchema = z.object({
  /** full = enumerate models; partial = some paths; none = not configured */
  model_inventory: z.enum(["full", "partial", "none"]),
  notes: z.string().optional(),
});

export const RuntimeRecordSchema = z.object({
  id: z.string(),
  /** Single operational status for the runtime row */
  status: RuntimeOperationalStatusSchema,
  installed: z.boolean(),
  reachable: z.boolean().nullable(),
  version: ProvenancedStringSchema,
  /** Row-level discovery semantic (aligned with controlled vocabulary) */
  semantic: DiscoverySemanticSchema,
  capabilities: RuntimeCapabilitiesSchema.optional(),
});

export const ToolKindSchema = z.enum([
  "editor",
  "agent",
  "runtime_ui",
  "terminal_tool",
  "other",
]);

export const ToolRecordSchema = z.object({
  id: z.string(),
  installed: z.boolean(),
  version: ProvenancedStringSchema,
  kind: ToolKindSchema,
  /** PATH / binary presence semantic */
  presence: DiscoverySemanticSchema,
});

export const ModelLocalitySchema = z.enum(["local", "cloud", "unknown"]);

export const ModelRecordSchema = z.object({
  id: z.string(),
  runtime_id: z.string(),
  locality: ModelLocalitySchema,
  discovery_status: DiscoverySemanticSchema,
  source: z.enum(["command", "api", "derived", "manual", "unknown"]),
  probe: z.string().nullable(),
  confidence: FieldConfidenceSchema,
  quantization: ProvenancedStringSchema.optional(),
});

export const PrivacyBlockSchema = z.object({
  raw_identifiers_stored: z.literal(false),
  consent_required_for_submission: z.literal(true),
});

export const ImpactProfileSchema = z.object({
  schema_version: z.literal("impact.v0.2"),
  run_id: z.string().uuid(),
  created_at: z.string().datetime(),
  host: HostSchema,
  runtimes: z.array(RuntimeRecordSchema),
  tools: z.array(ToolRecordSchema),
  models: z.array(ModelRecordSchema),
  privacy: PrivacyBlockSchema,
  readiness: z
    .object({
      summary: z.string(),
      confidence: ReadinessConfidenceSchema,
    })
    .optional(),
});

export type ImpactProfile = z.infer<typeof ImpactProfileSchema>;
export type HostProfile = z.infer<typeof HostSchema>;
export type RuntimeRecord = z.infer<typeof RuntimeRecordSchema>;
export type ToolRecord = z.infer<typeof ToolRecordSchema>;
export type ModelRecord = z.infer<typeof ModelRecordSchema>;
export type ToolKind = z.infer<typeof ToolKindSchema>;
