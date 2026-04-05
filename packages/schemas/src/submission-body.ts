import { z } from "zod";
import { DashboardSummarySchema } from "./dashboard-summary.js";
import { ImpactProfileSchema, type ImpactProfile } from "./profile.js";
import type { DashboardSummary } from "./dashboard-summary.js";

/** Wrapped submission: raw profile + client-prepared summary (MLP path). */
export const ImpactSubmissionEnvelopeV01Schema = z.object({
  submission_kind: z.literal("impact.submission.v0.1"),
  profile: ImpactProfileSchema,
  dashboard_summary: DashboardSummarySchema,
});

export type ImpactSubmissionEnvelopeV01 = z.infer<typeof ImpactSubmissionEnvelopeV01Schema>;

export type ParsedSubmissionBody =
  | { format: "legacy"; profile: ImpactProfile; dashboard_summary: null }
  | { format: "envelope_v0.1"; profile: ImpactProfile; dashboard_summary: DashboardSummary };

/**
 * Parse POST JSON: either legacy ImpactProfile or impact.submission.v0.1 envelope.
 */
export function parseSubmissionBody(parsed: unknown): ParsedSubmissionBody {
  if (
    parsed !== null &&
    typeof parsed === "object" &&
    !Array.isArray(parsed) &&
    (parsed as { submission_kind?: string }).submission_kind === "impact.submission.v0.1"
  ) {
    const env = ImpactSubmissionEnvelopeV01Schema.parse(parsed);
    return {
      format: "envelope_v0.1",
      profile: env.profile,
      dashboard_summary: env.dashboard_summary,
    };
  }
  return {
    format: "legacy",
    profile: ImpactProfileSchema.parse(parsed),
    dashboard_summary: null,
  };
}
