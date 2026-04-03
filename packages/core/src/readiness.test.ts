import { describe, expect, it } from "vitest";
import { coarseReadiness } from "./readiness.js";
import type { ImpactProfileV01 } from "@impact/schemas";

function baseProfile(overrides: Partial<ImpactProfileV01> = {}): ImpactProfileV01 {
  return {
    schema_version: "impact.v0.1",
    run_id: "550e8400-e29b-41d4-a716-446655440000",
    created_at: "2026-04-03T12:00:00.000Z",
    host: {
      machine_class: "test",
      fingerprint_hash: "sha256:x",
      os_name: "macOS",
      os_version: "14.0",
      architecture: "arm64",
      chip: "Apple M1 Pro",
      memory_gb: 16,
      core_count: 10,
      gpu_acceleration: { metal_available: true },
      disk: { free_gb: 100 },
    },
    runtimes: [
      { id: "ollama", installed: true, version: "0.3.0", reachable: true, confidence: "detected" },
    ],
    tools: [],
    models: [
      {
        id: "llama3.1:8b",
        runtime_id: "ollama",
        locality: "local",
        detected: true,
        quantization: null,
        confidence: "detected",
      },
    ],
    privacy: { raw_identifiers_stored: false, consent_required_for_submission: true },
    ...overrides,
  };
}

describe("coarseReadiness", () => {
  it("suggests lightweight local workflows when signals align", () => {
    const r = coarseReadiness(baseProfile());
    expect(r?.confidence).toBe("inferred");
    expect(r?.summary.toLowerCase()).toContain("lightweight");
  });

  it("flags unreachable Ollama", () => {
    const p = baseProfile({
      runtimes: [{ id: "ollama", installed: true, version: "0.3.0", reachable: false }],
    });
    const r = coarseReadiness(p);
    expect(r?.summary.toLowerCase()).toContain("not reachable");
  });
});
