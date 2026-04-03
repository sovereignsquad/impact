import { z } from "zod";

/** Confidence for detections: explicit in outputs, conservative by default */
export const DetectionConfidenceSchema = z.enum([
  "detected",
  "inferred",
  "unavailable",
  "unknown",
]);

export const GpuAccelerationSchema = z.object({
  metal_available: z.boolean().nullable(),
});

export const HostSchema = z.object({
  machine_class: z.string(),
  fingerprint_hash: z.string(),
  os_name: z.string(),
  os_version: z.string(),
  architecture: z.string(),
  chip: z.string().nullable(),
  memory_gb: z.number().nullable(),
  core_count: z.number().int().nullable().optional(),
  gpu_acceleration: GpuAccelerationSchema.optional(),
  disk: z
    .object({
      free_gb: z.number().nullable(),
    })
    .optional(),
});

export const RuntimeRecordSchema = z.object({
  id: z.string(),
  installed: z.boolean(),
  version: z.string().nullable(),
  reachable: z.boolean().nullable(),
  confidence: DetectionConfidenceSchema.optional(),
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
  version: z.string().nullable(),
  kind: ToolKindSchema,
  confidence: DetectionConfidenceSchema.optional(),
});

export const ModelLocalitySchema = z.enum(["local", "cloud", "unknown"]);

export const ModelRecordSchema = z.object({
  id: z.string(),
  runtime_id: z.string(),
  locality: ModelLocalitySchema,
  detected: z.boolean(),
  quantization: z.string().nullable(),
  confidence: DetectionConfidenceSchema.optional(),
});

export const PrivacyBlockSchema = z.object({
  raw_identifiers_stored: z.literal(false),
  consent_required_for_submission: z.literal(true),
});

export const ImpactProfileV01Schema = z.object({
  schema_version: z.literal("impact.v0.1"),
  run_id: z.string().uuid(),
  created_at: z.string().datetime(),
  host: HostSchema,
  runtimes: z.array(RuntimeRecordSchema),
  tools: z.array(ToolRecordSchema),
  models: z.array(ModelRecordSchema),
  privacy: PrivacyBlockSchema,
  /** Phase 2+: coarse readiness hints; omitted or empty in strict MVP export */
  readiness: z
    .object({
      summary: z.string(),
      confidence: DetectionConfidenceSchema,
    })
    .optional(),
});

export type ImpactProfileV01 = z.infer<typeof ImpactProfileV01Schema>;
export type HostProfile = z.infer<typeof HostSchema>;
export type RuntimeRecord = z.infer<typeof RuntimeRecordSchema>;
export type ToolRecord = z.infer<typeof ToolRecordSchema>;
export type ModelRecord = z.infer<typeof ModelRecordSchema>;
export type ToolKind = z.infer<typeof ToolKindSchema>;
