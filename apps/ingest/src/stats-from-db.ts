import type Database from "better-sqlite3";
import { validateImpactProfile, type ImpactProfile } from "@impact/schemas";
import { buildPublicStats, type PublicStatsPayload } from "./aggregate.js";

export function loadValidatedProfiles(db: Database.Database): ImpactProfile[] {
  const rows = db.prepare(`SELECT profile_json FROM submissions ORDER BY received_at ASC`).all() as {
    profile_json: string;
  }[];
  const out: ImpactProfile[] = [];
  for (const row of rows) {
    try {
      const parsed = JSON.parse(row.profile_json) as unknown;
      out.push(validateImpactProfile(parsed));
    } catch {
      /* skip corrupt rows for stats — ops should fix DB */
    }
  }
  return out;
}

export type OverviewPayload = {
  schema_version: "impact.stats.overview.v0.1";
  generated_at: string;
  submission_count: number;
  below_global_threshold: boolean;
  min_bucket_count: number;
};

export function getOverview(db: Database.Database, minBucketCount: number): OverviewPayload {
  const profiles = loadValidatedProfiles(db);
  const stats = buildPublicStats(profiles, minBucketCount);
  return {
    schema_version: "impact.stats.overview.v0.1",
    generated_at: stats.generated_at,
    submission_count: stats.submission_count,
    below_global_threshold: stats.below_global_threshold,
    min_bucket_count: minBucketCount,
  };
}

export function getFullStats(db: Database.Database, minBucketCount: number): PublicStatsPayload {
  return buildPublicStats(loadValidatedProfiles(db), minBucketCount);
}

export function getHardwareSlice(stats: PublicStatsPayload): object {
  return {
    schema_version: "impact.stats.hardware.v0.1",
    generated_at: stats.generated_at,
    submission_count: stats.submission_count,
    below_global_threshold: stats.below_global_threshold,
    min_bucket_count: stats.privacy.min_bucket_count,
    ...stats.hardware,
  };
}

export function getToolsSlice(stats: PublicStatsPayload): object {
  return {
    schema_version: "impact.stats.tools.v0.1",
    generated_at: stats.generated_at,
    submission_count: stats.submission_count,
    below_global_threshold: stats.below_global_threshold,
    min_bucket_count: stats.privacy.min_bucket_count,
    ...stats.tools,
  };
}

export function getModelsSlice(stats: PublicStatsPayload): object {
  return {
    schema_version: "impact.stats.models.v0.1",
    generated_at: stats.generated_at,
    submission_count: stats.submission_count,
    below_global_threshold: stats.below_global_threshold,
    min_bucket_count: stats.privacy.min_bucket_count,
    ...stats.models,
  };
}
