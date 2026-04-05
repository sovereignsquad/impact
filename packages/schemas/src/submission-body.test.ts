import { describe, expect, it } from "vitest";
import { parseSubmissionBody } from "./submission-body.js";

describe("parseSubmissionBody", () => {
  it("parses legacy profile-only JSON", () => {
    const profile = {
      schema_version: "impact.v0.3",
      run_id: "550e8400-e29b-41d4-a716-446655440000",
      created_at: "2026-04-03T12:00:00.000Z",
      host: {
        machine_class: { value: "x", source: "derived", probe: "m", confidence: "low" },
        fingerprint_hash: { value: "sha256:a", source: "derived", probe: "f", confidence: "high" },
        os_name: { value: "macOS", source: "derived", probe: "o", confidence: "high" },
        os_version: { value: "14", source: "derived", probe: "r", confidence: "high" },
        architecture: { value: "arm64", source: "derived", probe: "a", confidence: "high" },
        chip: { value: "M1", source: "derived", probe: "c", confidence: "medium" },
        memory_gb: { value: 8, source: "derived", probe: "mem", confidence: "high" },
      },
      runtimes: [],
      tools: [],
      models: [],
      privacy: { raw_identifiers_stored: false, consent_required_for_submission: true },
    };
    const r = parseSubmissionBody(profile);
    expect(r.format).toBe("legacy");
    expect(r.dashboard_summary).toBeNull();
    expect(r.profile.run_id).toBe(profile.run_id);
  });

  it("parses impact.submission.v0.1 envelope", () => {
    const profile = {
      schema_version: "impact.v0.3",
      run_id: "550e8400-e29b-41d4-a716-446655440000",
      created_at: "2026-04-03T12:00:00.000Z",
      host: {
        machine_class: { value: "x", source: "derived", probe: "m", confidence: "low" },
        fingerprint_hash: { value: "sha256:a", source: "derived", probe: "f", confidence: "high" },
        os_name: { value: "macOS", source: "derived", probe: "o", confidence: "high" },
        os_version: { value: "14", source: "derived", probe: "r", confidence: "high" },
        architecture: { value: "arm64", source: "derived", probe: "a", confidence: "high" },
        chip: { value: "M1", source: "derived", probe: "c", confidence: "medium" },
        memory_gb: { value: 8, source: "derived", probe: "mem", confidence: "high" },
      },
      runtimes: [],
      tools: [],
      models: [],
      privacy: { raw_identifiers_stored: false, consent_required_for_submission: true },
    };
    const dashboard_summary = {
      summary_version: "impact.summary.v0.1",
      profile_schema_version: "impact.v0.3",
      platform_family: "macos",
      machine_class: "x",
      chip_family: "apple_m_series",
      memory_band_gb: "8_16gb",
      runtime_families: [] as string[],
      tool_families: [] as string[],
      model_families: [] as string[],
      local_model_count: 0,
      cloud_tool_present: false,
      reachable_runtime_count: 0,
      partial_runtime_count: 0,
    };
    const r = parseSubmissionBody({
      submission_kind: "impact.submission.v0.1",
      profile,
      dashboard_summary,
    });
    expect(r.format).toBe("envelope_v0.1");
    expect(r.dashboard_summary?.summary_version).toBe("impact.summary.v0.1");
  });
});
