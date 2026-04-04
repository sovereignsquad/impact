## Objective

**Dashboard D3 — Privacy thresholds.** Rules before any public stat is shown.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2 · [privacy-policy.md](../../docs/privacy-policy.md)

## Deliverables

- [x] Low-sample suppression — `IMPACT_STATS_MIN_BUCKET_COUNT` (default **5**); buckets with count `< min` omitted; global suppress when total submissions `< min`
- [x] Safe grouping — coarse dimensions only (no raw fingerprint in aggregates); cap **50** buckets per dimension in `applyPrivacyThreshold`
- [x] Publication thresholds — documented in [ingest-server.md](../../docs/ingest-server.md) + README
- [x] Enforcement — `buildPublicStats` in [`aggregate.ts`](../../apps/ingest/src/aggregate.ts); API returns empty dimension maps when below global threshold

## Acceptance

- [x] Documented policy + tests — [`aggregate.test.ts`](../../apps/ingest/src/aggregate.test.ts), [`stats-from-db.test.ts`](../../apps/ingest/src/stats-from-db.test.ts), docs above
- [x] Sensitive / small buckets suppressed in API output (verify with `< min` submissions in dev)
