import type { RuntimeRecord } from "@impact/schemas";
import { execText } from "./exec.js";

const OLLAMA_TIMEOUT_MS = 4000;

async function ollamaVersion(): Promise<string | null> {
  const out = await execText("ollama", ["--version"], OLLAMA_TIMEOUT_MS);
  if (!out) return null;
  const m = out.match(/ollama\s+version\s+([\w.-]+)/i) ?? out.match(/([\d.]+)/);
  return m?.[1] ?? out.split(/\s+/)[0] ?? null;
}

async function ollamaReachable(): Promise<boolean | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("http://127.0.0.1:11434/api/tags", {
      signal: ctrl.signal,
    });
    clearTimeout(t);
    return res.ok;
  } catch {
    return false;
  }
}

export async function scanRuntimes(): Promise<RuntimeRecord[]> {
  const version = await ollamaVersion();
  const installed = version != null;
  let reachable: boolean | null = null;
  if (installed) {
    reachable = await ollamaReachable();
  }

  const ollama: RuntimeRecord = {
    id: "ollama",
    installed,
    version: installed ? version : null,
    reachable: installed ? reachable : null,
    confidence: installed ? "detected" : "unknown",
  };

  const mlx = await detectMlx();

  return [ollama, mlx];
}

async function detectMlx(): Promise<RuntimeRecord> {
  const pipShow = await execText("python3", ["-m", "pip", "show", "mlx"], 5000);
  const hasMlx = pipShow?.toLowerCase().includes("name: mlx") ?? false;
  let version: string | null = null;
  if (hasMlx) {
    const verLine = pipShow?.split(/\n/).find((l) => l.toLowerCase().startsWith("version:"));
    version = verLine?.split(":")[1]?.trim() ?? null;
  }
  return {
    id: "mlx_python",
    installed: hasMlx,
    version,
    reachable: null,
    confidence: hasMlx ? "detected" : "unknown",
  };
}
