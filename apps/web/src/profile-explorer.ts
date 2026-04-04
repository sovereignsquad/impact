import { ImpactProfileSchema, type ImpactProfile } from "@impact/schemas";
import { buildRecommendations } from "@impact/reporting/recommendations";

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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
  const recs = buildRecommendations(p);
  const toolsInstalled = tools.filter((t) => t.installed);

  const osLine = `${host.os_name.value ?? ""} ${host.os_version.value ?? ""}`.trim() || "—";
  const memLine =
    host.memory_gb?.value != null ? `${String(host.memory_gb.value)} GB (coarse)` : "—";
  const readinessLine = readiness
    ? `${readiness.summary} (presence: ${readiness.presence})`
    : "—";

  const runtimesRows = runtimes
    .map(
      (r) =>
        `<tr><td><code>${escapeHtml(r.id)}</code></td><td><code>${escapeHtml(r.status)}</code></td><td>${r.installed ? "yes" : "no"}</td><td>${r.reachable === null ? "—" : r.reachable ? "yes" : "no"}</td></tr>`
    )
    .join("");

  const stepsBlock =
    recs.length === 0
      ? `<p class="profile-muted">No extra automated hints for this profile — open the full HTML report for tables and provenance.</p>`
      : `<ul class="profile-steps">${recs
          .map(
            (r) =>
              `<li><strong>${escapeHtml(r.title)}</strong> — ${escapeHtml(r.body)}${r.evidence.length ? `<span class="profile-evidence"> (${escapeHtml(r.evidence.join("; "))})</span>` : ""}</li>`
          )
          .join("")}</ul>`;

  const toolSummary =
    toolsInstalled.length === 0
      ? "None detected on allowlist"
      : toolsInstalled.map((t) => `${t.id}`).join(", ");

  resultEl.innerHTML = `
    <dl class="profile-dl">
      <dt>Schema</dt><dd><code>${escapeHtml(p.schema_version)}</code></dd>
      <dt>Run ID</dt><dd><code>${escapeHtml(p.run_id)}</code></dd>
      <dt>Created</dt><dd>${escapeHtml(p.created_at)}</dd>
      <dt>OS</dt><dd>${escapeHtml(osLine)}</dd>
      <dt>Memory (coarse)</dt><dd>${escapeHtml(memLine)}</dd>
      <dt>Models</dt><dd>${String(models.length)} listed</dd>
      <dt>Tools (allowlist)</dt><dd>${escapeHtml(toolSummary)}</dd>
      <dt>Readiness</dt><dd>${escapeHtml(readinessLine)}</dd>
    </dl>

    <h3 class="profile-subhead">Runtimes</h3>
    <div class="profile-table-wrap">
      <table class="profile-table">
        <thead><tr><th>ID</th><th>Status</th><th>Installed</th><th>Reachable</th></tr></thead>
        <tbody>${runtimesRows || `<tr><td colspan="4">No runtime rows</td></tr>`}</tbody>
      </table>
    </div>

    <h3 class="profile-subhead">Suggested next steps</h3>
    <p class="profile-muted">Same deterministic rules as <code>impact-report.html</code> — not remote advice.</p>
    ${stepsBlock}

    <p class="profile-note">This is a <strong>summary</strong> only. Open <code>impact-report.html</code> from the same scan for the full offline report. Nothing is uploaded.</p>
  `;
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
