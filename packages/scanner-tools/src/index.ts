import { execFile } from "node:child_process";
import os from "node:os";
import { promisify } from "node:util";
import type { ToolRecord } from "@impact/schemas";
import { TOOL_ALLOWLIST } from "./allowlist.js";

const execFileAsync = promisify(execFile);

async function which(binary: string): Promise<string | null> {
  const isWin = os.platform() === "win32";
  try {
    const { stdout } = await execFileAsync(isWin ? "where" : "which", [binary], {
      timeout: 3000,
      maxBuffer: 64 * 1024,
      windowsHide: true,
    });
    const line = stdout.trim().split(/\r?\n/)[0]?.trim();
    return line || null;
  } catch {
    return null;
  }
}

async function versionHint(binary: string): Promise<string | null> {
  for (const args of [["--version"], ["-v"], ["version"]]) {
    try {
      const { stdout } = await execFileAsync(binary, args, {
        timeout: 4000,
        maxBuffer: 64 * 1024,
        windowsHide: true,
      });
      const first = stdout.trim().split(/\r?\n/)[0]?.trim();
      if (first) return first.slice(0, 120);
    } catch {
      /* try next */
    }
  }
  return null;
}

export async function scanTools(): Promise<ToolRecord[]> {
  const out: ToolRecord[] = [];
  for (const tool of TOOL_ALLOWLIST) {
    let path: string | null = null;
    for (const bin of tool.binaries) {
      path = await which(bin);
      if (path) {
        const version = await versionHint(bin);
        out.push({
          id: tool.id,
          installed: true,
          version,
          kind: tool.kind,
          confidence: "detected",
        });
        break;
      }
    }
    if (!path) {
      out.push({
        id: tool.id,
        installed: false,
        version: null,
        kind: tool.kind,
        confidence: "unknown",
      });
    }
  }
  return out;
}
