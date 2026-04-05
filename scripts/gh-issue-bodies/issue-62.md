## Objective

**Dashboard D5 — Wire webapp.** Replace placeholders on `data.html` (and home if needed) with **real** aggregates only when D1–D4 are live.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2 · [web.md](../../docs/web.md)

## Depends on

[#61](https://github.com/sovereignsquad/impact/issues/61) + live backend.

## Deliverables

- [x] Real hardware section — [`data.html`](../../apps/web/data.html) + [`data-entry.ts`](../../apps/web/src/data-entry.ts) when **`VITE_STATS_API_BASE`** set at build time (fetches `/api/stats/full`)
- [x] Real tools/runtimes section — same
- [x] Real LLM/model section — same
- [x] Copy — live status line + threshold note in rendered tables; static page stays honest when env unset ([`apps/web/README.md`](../../apps/web/README.md))
- [x] **MLP closure** — **`/data.html`** shows real community aggregates from the **live** stats path when ingest has **summary (or raw) submissions** above thresholds; no fake data ([mlp-cto-directive-mlp-summary-payload.md](../../docs/mlp-cto-directive-mlp-summary-payload.md))
- [x] No benchmark overlays

## Constraints

No fake numbers; match [web-deploy-smoke.md](../../docs/web-deploy-smoke.md) after wiring.

## Acceptance

- [x] Build with `VITE_STATS_API_BASE=http://127.0.0.1:8787` (or deployed ingest) and open `/data.html` — tables fill when global + per-bucket thresholds allow
- [x] Build without env — placeholders unchanged (no fabricated counts)
