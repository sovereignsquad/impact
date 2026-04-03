import type { ModelRecord, RuntimeRecord } from "@impact/schemas";

type OllamaTagsResponse = {
  models?: Array<{ name: string; details?: { quantization_level?: string } }>;
};

export async function scanModelsForOllama(
  ollama: RuntimeRecord | undefined
): Promise<ModelRecord[]> {
  if (!ollama?.installed) return [];

  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch("http://127.0.0.1:11434/api/tags", {
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) {
      return [];
    }
    const body = (await res.json()) as OllamaTagsResponse;
    const models = body.models ?? [];
    return models.map((m) => ({
      id: m.name,
      runtime_id: "ollama",
      locality: "local" as const,
      detected: true,
      quantization: m.details?.quantization_level ?? null,
      confidence: "detected" as const,
    }));
  } catch {
    return [];
  }
}

/** Placeholder for MLX-managed paths; conservative unknown until paths are defined */
export function scanModelsForMlx(mlx: RuntimeRecord | undefined): ModelRecord[] {
  if (!mlx?.installed) return [];
  return [];
}
