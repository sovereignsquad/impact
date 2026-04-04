import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { validateImpactProfile } from "@impact/schemas";
import {
  accumulateProfile,
  applyPrivacyThreshold,
  buildPublicStats,
  emptyRollup,
  memoryBandGb,
} from "./aggregate.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(__dirname, "../../../fixtures/baseline-profile.sample.json");

describe("memoryBandGb", () => {
  it("buckets", () => {
    expect(memoryBandGb(4)).toBe("under_8gb");
    expect(memoryBandGb(16)).toBe("16_32gb");
    expect(memoryBandGb(128)).toBe("64gb_plus");
  });
});

describe("applyPrivacyThreshold", () => {
  it("drops small buckets", () => {
    const m = new Map([
      ["a", 10],
      ["b", 2],
      ["c", 5],
    ]);
    expect(applyPrivacyThreshold(m, 5, 10)).toEqual([
      { key: "a", count: 10 },
      { key: "c", count: 5 },
    ]);
  });
});

describe("buildPublicStats", () => {
  it("suppresses all dimension buckets when below global threshold", () => {
    const p = validateImpactProfile(JSON.parse(readFileSync(fixturePath, "utf8")) as object);
    const stats = buildPublicStats([p], 5);
    expect(stats.submission_count).toBe(1);
    expect(stats.below_global_threshold).toBe(true);
    expect(stats.hardware.machine_class).toEqual([]);
  });

  it("publishes buckets when global threshold met", () => {
    const p = validateImpactProfile(JSON.parse(readFileSync(fixturePath, "utf8")) as object);
    const stats = buildPublicStats([p, p, p, p, p], 1);
    expect(stats.below_global_threshold).toBe(false);
    expect(stats.hardware.machine_class.length).toBeGreaterThan(0);
  });

  it("accumulates multiple profiles", () => {
    const p = validateImpactProfile(JSON.parse(readFileSync(fixturePath, "utf8")) as object);
    const r = emptyRollup();
    accumulateProfile(r, p);
    accumulateProfile(r, p);
    expect(r.submission_count).toBe(2);
    const stats = buildPublicStats([p, p], 1);
    expect(stats.submission_count).toBe(2);
  });
});
