import { ImpactProfileSchema, type ImpactProfile } from "@impact/schemas";
import "./style.css";

const fileInput = document.querySelector<HTMLInputElement>("#profile-file");
const dropZone = document.querySelector<HTMLElement>("#profile-drop");
const resultEl = document.querySelector<HTMLElement>("#profile-result");
const errorEl = document.querySelector<HTMLElement>("#profile-error");

function showError(msg: string): void {
  if (!errorEl || !resultEl) return;
  errorEl.hidden = false;
  resultEl.hidden = true;
  errorEl.textContent = msg;
}

function renderProfile(p: ImpactProfile): void {
  if (!errorEl || !resultEl) return;
  errorEl.hidden = true;
  resultEl.hidden = false;

  const host = p.host;
  const runtimes = p.runtimes;
  const tools = p.tools;
  const models = p.models;
  const readiness = p.readiness;

  const osLine = `${host.os_name.value} ${host.os_version.value}`.trim() || "—";
  const memLine =
    host.memory_gb?.value != null ? `${String(host.memory_gb.value)} GB (coarse)` : "—";
  const readinessLine = readiness
    ? `${readiness.summary} (presence: ${readiness.presence})`
    : "—";

  resultEl.innerHTML = `
    <dl class="profile-dl">
      <dt>Schema</dt><dd><code>${escapeHtml(p.schema_version)}</code></dd>
      <dt>Run ID</dt><dd><code>${escapeHtml(p.run_id)}</code></dd>
      <dt>Created</dt><dd>${escapeHtml(p.created_at)}</dd>
      <dt>OS</dt><dd>${escapeHtml(osLine)}</dd>
      <dt>Memory (coarse)</dt><dd>${escapeHtml(memLine)}</dd>
      <dt>Runtimes</dt><dd>${runtimes.length} row(s)</dd>
      <dt>Tools</dt><dd>${tools.length} row(s)</dd>
      <dt>Models</dt><dd>${models.length} row(s)</dd>
      <dt>Readiness</dt><dd>${escapeHtml(readinessLine)}</dd>
    </dl>
    <p class="profile-note">This is a <strong>summary</strong> only. Open <code>impact-report.html</code> from the same scan for the full offline report. Nothing is uploaded.</p>
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function handleFile(file: File): Promise<void> {
  const text = await file.text();
  let json: unknown;
  try {
    json = JSON.parse(text) as unknown;
  } catch {
    showError("Could not parse JSON. Choose a valid impact-profile.json file.");
    return;
  }

  const parsed = ImpactProfileSchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.flatten().formErrors[0] ?? parsed.error.message;
    showError(`Not a valid impact.v0.3 profile: ${first}`);
    return;
  }

  renderProfile(parsed.data);
}

function wireFileInput(): void {
  fileInput?.addEventListener("change", () => {
    const f = fileInput.files?.[0];
    if (f) void handleFile(f);
  });
}

function wireDropZone(): void {
  if (!dropZone) return;
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drop-zone--active");
  });
  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drop-zone--active");
  });
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("drop-zone--active");
    const f = e.dataTransfer?.files?.[0];
    if (f) void handleFile(f);
  });
}

wireFileInput();
wireDropZone();
