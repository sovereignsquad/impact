import { describe, expect, it } from "vitest";
import { ImpactProfileV01Schema } from "./profile-v01.js";

const minimalValid = {
  schema_version: "impact.v0.1" as const,
  run_id: "550e8400-e29b-41d4-a716-446655440000",
  created_at: "2026-04-03T12:00:00.000Z",
  host: {
    machine_class: "unknown",
    fingerprint_hash: "sha256:abc",
    os_name: "macOS",
    os_version: "14.0",
    architecture: "arm64",
    chip: "Apple M1",
    memory_gb: 16,
  },
  runtimes: [],
  tools: [],
  models: [],
  privacy: {
    raw_identifiers_stored: false as const,
    consent_required_for_submission: true as const,
  },
};

describe("ImpactProfileV01Schema", () => {
  it("accepts a minimal valid profile", () => {
    const r = ImpactProfileV01Schema.safeParse(minimalValid);
    expect(r.success).toBe(true);
  });

  it("rejects wrong schema version", () => {
    const r = ImpactProfileV01Schema.safeParse({
      ...minimalValid,
      schema_version: "wrong",
    });
    expect(r.success).toBe(false);
  });
});
