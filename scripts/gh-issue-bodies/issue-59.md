## Objective

**Dashboard D2 — Aggregation model.** Convert raw submissions into dashboard-ready dimensions.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2

## Depends on

[#58](https://github.com/sovereignsquad/impact/issues/58) ingest live or parallel design with fixture data.

## Dimensions

Machine classes, chip families, memory bands, platform counts, runtime/tool families, model families, locality split.

## Deliverables

- [x] Normalized aggregation schema — `impact.stats.v0.1` + slice schemas in [`apps/ingest/src/aggregate.ts`](../../apps/ingest/src/aggregate.ts) / [`stats-from-db.ts`](../../apps/ingest/src/stats-from-db.ts)
- [x] Rollup / query layer — in-process rollup from SQLite (`profile_json` + optional `dashboard_summary_json`; **summary-first** when present) via `buildRollupFromDb` + `buildPublicStatsFromRollup`
- [x] Documented metric definitions — [ingest-server.md](../../docs/ingest-server.md) stats section, [`apps/ingest/README.md`](../../apps/ingest/README.md)

## Acceptance

- [x] Dimensions: machine class, chip, memory band, OS, architecture, runtime/tool IDs, model id × locality (see aggregate module)
- [x] Unit tests: [`aggregate.test.ts`](../../apps/ingest/src/aggregate.test.ts), [`stats-from-db.test.ts`](../../apps/ingest/src/stats-from-db.test.ts)
