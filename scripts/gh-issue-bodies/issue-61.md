## Objective

**Dashboard D4 — Read API.** Stable endpoints for the webapp.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2

## Depends on

[#59](https://github.com/sovereignsquad/impact/issues/59) + [#60](https://github.com/sovereignsquad/impact/issues/60) (or stub with enforcement stubs).

## Endpoints (intent)

- Hardware tested (totals / distributions)
- Tools/runtimes tested
- LLMs/models tested

## Deliverables

- [x] Stable API contract — normative markdown: [ingest-server.md](../../docs/ingest-server.md) § stats `GET` endpoints
- [x] Documented response shapes — `impact.stats.*.v0.1` schema versions on payloads; slice vs full documented in README
- [x] Sample payloads — exercise via `GET /api/stats/*` against local ingest; integration tests in [`http-server.test.ts`](../../apps/ingest/src/http-server.test.ts)
- [x] **Summary-first path** — when rows include **`dashboard_summary_json`**, public JSON dimensions are driven from client-normalized fields (e.g. **`chip_family`**, **`model_families`**) while **`profile_json`** remains stored for reprocessing

## Acceptance

- [x] `GET /api/stats/overview`, `/full`, `/hardware`, `/tools`, `/models` return **200** + JSON
- [x] `OPTIONS` + CORS headers for browser clients (`IMPACT_STATS_CORS_ORIGIN`, default `*`)
