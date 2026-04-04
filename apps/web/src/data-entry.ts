import "./boot";
import { statsJsonUrl } from "./stats-api-url";

type Bucket = { key: string; count: number };

type FullStats = {
  schema_version: string;
  generated_at: string;
  submission_count: number;
  below_global_threshold: boolean;
  privacy: { min_bucket_count: number; suppressed_small_buckets: boolean };
  hardware: {
    machine_class: Bucket[];
    chip: Bucket[];
    memory_band: Bucket[];
    os_name: Bucket[];
    architecture: Bucket[];
  };
  tools: {
    runtime_id: Bucket[];
    runtime_by_status: Bucket[];
    tool_id: Bucket[];
  };
  models: {
    by_id_locality: Bucket[];
  };
};

function tableHtml(title: string, rows: Bucket[]): string {
  if (rows.length === 0) {
    return `<p class="muted-small">${title}: no buckets above the privacy threshold.</p>`;
  }
  const body = rows
    .map(
      (r) =>
        `<tr><td>${escapeHtml(r.key)}</td><td>${escapeHtml(String(r.count))}</td></tr>`
    )
    .join("");
  return `
    <h3 class="stats-subheading">${escapeHtml(title)}</h3>
    <div class="profile-table-wrap">
      <table class="profile-table">
        <thead><tr><th>Key</th><th>Count</th></tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHardware(stats: FullStats): string {
  const h = stats.hardware;
  return [
    tableHtml("Machine class", h.machine_class),
    tableHtml("Chip", h.chip),
    tableHtml("Memory band", h.memory_band),
    tableHtml("OS", h.os_name),
    tableHtml("Architecture", h.architecture),
  ].join("");
}

function renderTools(stats: FullStats): string {
  const t = stats.tools;
  return [
    tableHtml("Runtime ID", t.runtime_id),
    tableHtml("Runtime × status", t.runtime_by_status),
    tableHtml("Tool ID", t.tool_id),
  ].join("");
}

function renderModels(stats: FullStats): string {
  return [tableHtml("Model × locality", stats.models.by_id_locality)].join("");
}

function thresholdNote(stats: FullStats): string {
  const m = stats.privacy.min_bucket_count;
  if (stats.below_global_threshold) {
    return `<p class="muted-small">Total submissions (${stats.submission_count}) are below the server minimum (${m}) for publishing dimension breakdowns.</p>`;
  }
  return `<p class="muted-small">Buckets require at least <strong>${m}</strong> submissions each; smaller groups are omitted.</p>`;
}

async function main(): Promise<void> {
  const raw = import.meta.env.VITE_STATS_API_BASE;
  const apiBase = typeof raw === "string" ? raw.trim().replace(/\/$/, "") : "";
  if (!apiBase) {
    return;
  }

  const statusEl = document.getElementById("stats-fetch-status");
  if (statusEl) {
    statusEl.hidden = false;
    statusEl.textContent = "Loading aggregate stats…";
  }

  const hwLive = document.getElementById("hw-live");
  const toolsLive = document.getElementById("tools-live");
  const modelsLive = document.getElementById("models-live");
  const hwFb = document.getElementById("hw-fallback");
  const toolsFb = document.getElementById("tools-fallback");
  const modelsFb = document.getElementById("models-fallback");

  try {
    const res = await fetch(statsJsonUrl(apiBase, "full"), {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const stats = (await res.json()) as FullStats;

    if (statusEl) {
      statusEl.textContent = `Live data from ingest (as of ${stats.generated_at}, schema ${stats.schema_version}).`;
    }

    if (hwLive && toolsLive && modelsLive && hwFb && toolsFb && modelsFb) {
      hwFb.hidden = true;
      toolsFb.hidden = true;
      modelsFb.hidden = true;
      hwLive.hidden = false;
      toolsLive.hidden = false;
      modelsLive.hidden = false;

      const note = thresholdNote(stats);
      hwLive.innerHTML = note + renderHardware(stats);
      toolsLive.innerHTML = note + renderTools(stats);
      modelsLive.innerHTML = note + renderModels(stats);
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    if (statusEl) {
      statusEl.textContent = `Could not load stats from ${apiBase} (${msg}). Placeholder copy below still applies.`;
    }
  }
}

void main();
