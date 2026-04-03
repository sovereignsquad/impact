import type { ImpactProfileV01 } from "@impact/schemas";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderHtmlReport(profile: ImpactProfileV01): string {
  const { host, runtimes, tools, models, privacy, readiness } = profile;
  const toolsInstalled = tools.filter((t) => t.installed);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>I.M.P.A.C.T. report</title>
  <style>
    :root { font-family: system-ui, sans-serif; line-height: 1.45; color: #111; background: #fafafa; }
    body { max-width: 960px; margin: 0 auto; padding: 1.5rem; }
    h1 { font-size: 1.35rem; }
    h2 { font-size: 1.05rem; margin-top: 1.75rem; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem; }
    .card { background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem 1.25rem; margin: 1rem 0; }
    table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    th, td { text-align: left; padding: 0.45rem 0.5rem; border-bottom: 1px solid #eee; vertical-align: top; }
    th { color: #555; font-weight: 600; }
    .muted { color: #666; font-size: 0.88rem; }
    code { font-size: 0.85em; background: #f0f0f0; padding: 0.1em 0.35em; border-radius: 4px; }
    .pill { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 999px; background: #eef; font-size: 0.8rem; }
  </style>
</head>
<body>
  <h1>I.M.P.A.C.T. <span class="pill">v0.1</span></h1>
  <p class="muted">Local, privacy-first scan. Run ID: <code>${esc(profile.run_id)}</code> · ${esc(profile.created_at)}</p>

  <div class="card">
    <h2>Host</h2>
    <table>
      <tr><th>OS</th><td>${esc(host.os_name)} ${esc(host.os_version)} (${esc(host.architecture)})</td></tr>
      <tr><th>Chip / CPU</th><td>${esc(host.chip ?? "unknown")}</td></tr>
      <tr><th>Memory</th><td>${host.memory_gb != null ? `${host.memory_gb} GB` : "unknown"}</td></tr>
      <tr><th>Free disk (approx.)</th><td>${host.disk?.free_gb != null ? `${host.disk.free_gb} GB` : "unknown"}</td></tr>
      <tr><th>Machine class</th><td><code>${esc(host.machine_class)}</code></td></tr>
      <tr><th>Fingerprint</th><td><code class="muted">${esc(host.fingerprint_hash)}</code> <span class="muted">(coarse, salted; no serial/UUID)</span></td></tr>
      ${
        host.gpu_acceleration
          ? `<tr><th>GPU / acceleration</th><td>Metal: ${host.gpu_acceleration.metal_available === null ? "unknown" : host.gpu_acceleration.metal_available ? "available" : "not indicated"}</td></tr>`
          : ""
      }
    </table>
  </div>

  ${
    readiness
      ? `<div class="card"><h2>Readiness (coarse)</h2><p>${esc(readiness.summary)}</p><p class="muted">Confidence: ${esc(readiness.confidence)}</p></div>`
      : ""
  }

  <div class="card">
    <h2>Runtimes</h2>
    <table><thead><tr><th>ID</th><th>Installed</th><th>Version</th><th>Reachable</th><th>Confidence</th></tr></thead><tbody>
    ${runtimes
      .map(
        (r) =>
          `<tr><td><code>${esc(r.id)}</code></td><td>${r.installed}</td><td>${esc(r.version ?? "—")}</td><td>${r.reachable === null ? "—" : String(r.reachable)}</td><td>${esc(r.confidence ?? "—")}</td></tr>`
      )
      .join("")}
    </tbody></table>
  </div>

  <div class="card">
    <h2>Tools (allowlist)</h2>
    <p class="muted">Only curated tools are checked; others are intentionally ignored.</p>
    <table><thead><tr><th>ID</th><th>Installed</th><th>Version</th><th>Kind</th></tr></thead><tbody>
    ${toolsInstalled
      .map(
        (t) =>
          `<tr><td><code>${esc(t.id)}</code></td><td>true</td><td>${esc(t.version ?? "—")}</td><td>${esc(t.kind)}</td></tr>`
      )
      .join("")}
    ${toolsInstalled.length === 0 ? "<tr><td colspan='4'>No allowlisted tools detected on PATH.</td></tr>" : ""}
    </tbody></table>
  </div>

  <div class="card">
    <h2>Models</h2>
    <table><thead><tr><th>ID</th><th>Runtime</th><th>Locality</th><th>Quantization</th></tr></thead><tbody>
    ${models
      .map(
        (m) =>
          `<tr><td><code>${esc(m.id)}</code></td><td>${esc(m.runtime_id)}</td><td>${esc(m.locality)}</td><td>${esc(m.quantization ?? "—")}</td></tr>`
      )
      .join("")}
    ${models.length === 0 ? "<tr><td colspan='4'>No models enumerated (runtime may be offline).</td></tr>" : ""}
    </tbody></table>
  </div>

  <div class="card">
    <h2>Privacy</h2>
    <p>Raw identifiers stored: <strong>${String(privacy.raw_identifiers_stored)}</strong></p>
    <p>Submission requires explicit consent: <strong>${String(privacy.consent_required_for_submission)}</strong></p>
    <p class="muted">We do not collect serial numbers, hardware UUIDs, usernames, hostnames, file contents, or environment secrets. See docs/privacy-policy.md in the repository.</p>
  </div>
</body>
</html>`;
}
