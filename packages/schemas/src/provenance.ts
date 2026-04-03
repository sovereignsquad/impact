import { z } from "zod";

/** How the value was obtained */
export const ValueSourceSchema = z.enum(["command", "api", "derived", "manual", "unknown"]);
export type ValueSource = z.infer<typeof ValueSourceSchema>;

/** Epistemic strength of the value */
export const FieldConfidenceSchema = z.enum(["high", "medium", "low", "unknown"]);
export type FieldConfidence = z.infer<typeof FieldConfidenceSchema>;

/**
 * Semantic status for discovery rows (runtime/tool/model), closed vocabulary.
 * Aligns with architect Sprint A: detected | inferred | configured | unreachable | unknown | partial
 */
export const DiscoverySemanticSchema = z.enum([
  "detected",
  "inferred",
  "configured",
  "unreachable",
  "unknown",
  "partial",
]);
export type DiscoverySemantic = z.infer<typeof DiscoverySemanticSchema>;

export const ProvenancedStringSchema = z.object({
  value: z.string().nullable(),
  source: ValueSourceSchema,
  probe: z.string().nullable(),
  confidence: FieldConfidenceSchema,
});
export type ProvenancedString = z.infer<typeof ProvenancedStringSchema>;

export const ProvenancedNumberSchema = z.object({
  value: z.number().nullable(),
  source: ValueSourceSchema,
  probe: z.string().nullable(),
  confidence: FieldConfidenceSchema,
});
export type ProvenancedNumber = z.infer<typeof ProvenancedNumberSchema>;

export const ProvenancedBooleanSchema = z.object({
  value: z.boolean().nullable(),
  source: ValueSourceSchema,
  probe: z.string().nullable(),
  confidence: FieldConfidenceSchema,
});
export type ProvenancedBoolean = z.infer<typeof ProvenancedBooleanSchema>;

export const ProvenancedIntSchema = z.object({
  value: z.number().int().nullable(),
  source: ValueSourceSchema,
  probe: z.string().nullable(),
  confidence: FieldConfidenceSchema,
});
export type ProvenancedInt = z.infer<typeof ProvenancedIntSchema>;

/** Convenience factories for emitters */
export const ps = (
  value: string | null,
  source: ValueSource,
  probe: string | null,
  confidence: FieldConfidence
): ProvenancedString => ({ value, source, probe, confidence });

export const pn = (
  value: number | null,
  source: ValueSource,
  probe: string | null,
  confidence: FieldConfidence
): ProvenancedNumber => ({ value, source, probe, confidence });

export const pbool = (
  value: boolean | null,
  source: ValueSource,
  probe: string | null,
  confidence: FieldConfidence
): ProvenancedBoolean => ({ value, source, probe, confidence });

export const pi = (
  value: number | null,
  source: ValueSource,
  probe: string | null,
  confidence: FieldConfidence
): ProvenancedInt => ({ value, source, probe, confidence });
