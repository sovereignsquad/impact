export {
  ImpactProfileV01Schema,
  type ImpactProfileV01,
  type HostProfile,
  type RuntimeRecord,
  type ToolRecord,
  type ModelRecord,
  type ToolKind,
  DetectionConfidenceSchema,
} from "./profile-v01.js";

import { ImpactProfileV01Schema, type ImpactProfileV01 } from "./profile-v01.js";

export function validateProfileV01(data: unknown): ImpactProfileV01 {
  return ImpactProfileV01Schema.parse(data);
}
