import { describe, expect, it } from "vitest";
import { ImpactProfileSchema } from "./profile.js";
import { pn, ps, pbool, pi } from "./provenance.js";

const minimalHost = {
  machine_class: ps("x", "derived", "impact:machine_class", "low"),
  fingerprint_hash: ps("sha256:abc", "derived", "impact:fingerprint", "high"),
  os_name: ps("macOS", "derived", "node:os", "high"),
  os_version: ps("14.0", "derived", "node:os.release", "high"),
  architecture: ps("arm64", "derived", "node:os.arch", "high"),
  chip: ps("Apple M1", "derived", "node:os.cpus", "medium"),
  memory_gb: pn(16, "derived", "node:os.totalmem", "high"),
  core_count: pi(8, "derived", "node:os.cpus.length", "high"),
  gpu_acceleration: {
    metal_available: pbool(true, "derived", "impact:metal_hint", "medium"),
  },
  disk: { free_gb: pn(100, "command", "df", "medium") },
};

const minimalValid = {
  schema_version: "impact.v0.2" as const,
  run_id: "550e8400-e29b-41d4-a716-446655440000",
  created_at: "2026-04-03T12:00:00.000Z",
  host: minimalHost,
  runtimes: [
    {
      id: "ollama",
      status: "not_installed" as const,
      installed: false,
      reachable: null,
      version: ps(null, "unknown", null, "unknown"),
      semantic: "unknown" as const,
      capabilities: { model_inventory: "none" as const },
    },
  ],
  tools: [],
  models: [],
  privacy: {
    raw_identifiers_stored: false as const,
    consent_required_for_submission: true as const,
  },
};

describe("ImpactProfileSchema v0.2", () => {
  it("accepts a minimal valid profile", () => {
    const r = ImpactProfileSchema.safeParse(minimalValid);
    expect(r.success).toBe(true);
  });

  it("rejects wrong schema version", () => {
    const r = ImpactProfileSchema.safeParse({
      ...minimalValid,
      schema_version: "impact.v0.9",
    });
    expect(r.success).toBe(false);
  });
});
