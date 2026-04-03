import type { ImpactProfileV01 } from "@impact/schemas";

/**
 * Coarse, conservative guidance — no benchmark claims (Phase 2 / P1).
 */
export function coarseReadiness(profile: ImpactProfileV01): NonNullable<
  ImpactProfileV01["readiness"]
> | null {
  const { host, runtimes, models } = profile;
  const ollama = runtimes.find((r) => r.id === "ollama");
  const hasLocalModels = models.some((m) => m.locality === "local" && m.detected);
  const mem = host.memory_gb ?? 0;
  const appleSilicon =
    host.architecture === "arm64" &&
    (host.chip?.toLowerCase().includes("apple") ?? false);

  if (ollama?.installed && ollama.reachable === true && hasLocalModels && appleSilicon && mem >= 8) {
    return {
      summary:
        "This machine appears suitable for lightweight local AI workflows (Ollama reachable with local models, Apple Silicon, sufficient RAM for small models). This is a coarse hint, not a performance guarantee.",
      confidence: "inferred",
    };
  }

  if (ollama?.installed && ollama.reachable === false) {
    return {
      summary:
        "Ollama appears installed but the local API was not reachable during the scan. Start the service or check configuration before relying on local inference.",
      confidence: "detected",
    };
  }

  if (ollama?.installed && !hasLocalModels) {
    return {
      summary:
        "A local runtime was detected but no models were listed. Pull models or check connectivity to the runtime API.",
      confidence: "inferred",
    };
  }

  if (mem > 0 && mem < 8 && hasLocalModels) {
    return {
      summary:
        "Limited system memory may constrain local model size; cloud-hosted or smaller quantisations may be more reliable.",
      confidence: "inferred",
    };
  }

  return {
    summary:
      "Capabilities could not be fully assessed from this scan. Prefer conservative model choices or cloud APIs until your environment is verified.",
    confidence: "unknown",
  };
}
