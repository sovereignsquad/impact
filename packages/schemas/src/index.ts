export {
  ImpactProfileSchema,
  type ImpactProfile,
  type HostProfile,
  type RuntimeRecord,
  type ToolRecord,
  type ModelRecord,
  type ToolKind,
  type RuntimeOperationalStatus,
  RuntimeOperationalStatusSchema,
  ReadinessConfidenceSchema,
} from "./profile.js";

export {
  ValueSourceSchema,
  FieldConfidenceSchema,
  DiscoverySemanticSchema,
  ProvenancedStringSchema,
  ProvenancedNumberSchema,
  ProvenancedBooleanSchema,
  type ValueSource,
  type FieldConfidence,
  type DiscoverySemantic,
  type ProvenancedString,
  type ProvenancedNumber,
  type ProvenancedBoolean,
  ps,
  pn,
  pbool,
  pi,
} from "./provenance.js";

import { ImpactProfileSchema, type ImpactProfile } from "./profile.js";

export function validateImpactProfile(data: unknown): ImpactProfile {
  return ImpactProfileSchema.parse(data);
}

/** @deprecated Use validateImpactProfile; v0.1 removed in favour of v0.2 */
export function validateProfileV01(data: unknown): ImpactProfile {
  return validateImpactProfile(data);
}
