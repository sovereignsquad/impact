import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function execFirstLine(
  file: string,
  args: string[],
  timeoutMs: number
): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync(file, args, {
      timeout: timeoutMs,
      maxBuffer: 512 * 1024,
      windowsHide: true,
    });
    const line = stdout.trim().split(/\r?\n/)[0]?.trim();
    return line || null;
  } catch {
    return null;
  }
}

export async function execText(
  file: string,
  args: string[],
  timeoutMs: number
): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync(file, args, {
      timeout: timeoutMs,
      maxBuffer: 512 * 1024,
      windowsHide: true,
    });
    return stdout.trim() || null;
  } catch {
    return null;
  }
}
