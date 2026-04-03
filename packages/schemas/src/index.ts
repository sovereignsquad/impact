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
  ReadinessPresenceSchema,
  PresenceSchema,
} from "./profile.js";

export {
  ValueSourceSchema,
  FieldConfidenceSchema,
  ProvenancedStringSchema,
  ProvenancedNumberSchema,
  ProvenancedBooleanSchema,
  type ValueSource,
  type FieldConfidence,
  type Presence,
  type ProvenancedString,
  type ProvenancedNumber,
  type ProvenancedBoolean,
  type ProvenancedInt,
  ps,
  pn,
  pbool,
  pi,
} from "./provenance.js";

export { ConfidenceRules, fieldConfidence, type ConfidenceRuleId } from "./confidence-rules.js";

import { ImpactProfileSchema, type ImpactProfile } from "./profile.js";

export function validateImpactProfile(data: unknown): ImpactProfile {
  return ImpactProfileSchema.parse(data);
}
