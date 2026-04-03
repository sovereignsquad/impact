import { createHash, randomBytes } from "node:crypto";
import os from "node:os";
import type { HostProfile } from "@impact/schemas";
import { execText } from "./exec.js";

function osDisplayName(platform: NodeJS.Platform): string {
  switch (platform) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    case "freebsd":
      return "FreeBSD";
    default:
      return platform;
  }
}

async function freeDiskGb(): Promise<number | null> {
  const out = await execText("df", ["-k", "/"], 3000);
  if (!out) return null;
  const lines = out.split(/\r?\n/).filter(Boolean);
  const data = lines.find((l) => !l.toLowerCase().startsWith("filesystem"));
  if (!data) return null;
  const parts = data.trim().split(/\s+/);
  const availKb = Number(parts[parts.length - 3]);
  if (!Number.isFinite(availKb)) return null;
  return Math.round(availKb / 1e6);
}

function metalHint(platform: NodeJS.Platform, arch: string, chip: string | null): boolean | null {
  if (platform !== "darwin") return null;
  if (arch === "arm64") return true;
  const c = chip?.toLowerCase() ?? "";
  if (c.includes("apple m")) return true;
  return false;
}

function deriveMachineClass(chip: string | null, memoryGb: number | null, arch: string): string {
  const mem = memoryGb != null ? `${memoryGb}gb` : "unknown_mem";
  const chipSlug = (chip ?? "unknown_chip")
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
  return `${chipSlug}_${mem}_${arch}`.replace(/__+/g, "_");
}

/**
 * Coarse, privacy-safe fingerprint: no serial numbers or hardware UUIDs.
 * Salt is supplied by caller (persisted locally under user control).
 */
export function fingerprintHost(
  salt: string,
  input: Pick<HostProfile, "os_name" | "os_version" | "architecture" | "chip" | "memory_gb">
): string {
  const canonical = JSON.stringify({
    os_name: input.os_name,
    os_version: input.os_version,
    architecture: input.architecture,
    chip: input.chip,
    memory_gb: input.memory_gb,
    salt,
  });
  const hash = createHash("sha256").update(canonical).digest("hex");
  return `sha256:${hash}`;
}

export async function scanHost(salt: string): Promise<HostProfile> {
  const platform = os.platform();
  const arch = os.arch();
  const cpus = os.cpus();
  const first = cpus[0];
  const chip = first?.model?.trim() || null;
  const coreCount = cpus.length > 0 ? cpus.length : null;
  const memoryBytes = os.totalmem();
  const memoryGb = memoryBytes > 0 ? Math.max(1, Math.round(memoryBytes / 1024 ** 3)) : null;

  const osName = osDisplayName(platform);
  const osVersion = os.release();

  const diskFree = await freeDiskGb();

  const hostPartial: Pick<
    HostProfile,
    "os_name" | "os_version" | "architecture" | "chip" | "memory_gb" | "core_count"
  > = {
    os_name: osName,
    os_version: osVersion,
    architecture: arch,
    chip,
    memory_gb: memoryGb,
    core_count: coreCount,
  };

  const fingerprint_hash = fingerprintHost(salt, hostPartial);

  const metal = metalHint(platform, arch, chip);

  return {
    machine_class: deriveMachineClass(chip, memoryGb, arch),
    fingerprint_hash,
    ...hostPartial,
    gpu_acceleration:
      platform === "darwin" ? { metal_available: metal } : { metal_available: null },
    disk: { free_gb: diskFree },
  };
}

export function generateLocalSalt(): string {
  return randomBytes(16).toString("hex");
}
