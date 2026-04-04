## Objective

**Dashboard D1 — Ingest MVP.** Backend path to receive anonymous profiles, validate, deduplicate, store safely.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2 · relates **[#48](https://github.com/moldovancsaba/impact/issues/48)** · [submission-contract.md](../../docs/submission-contract.md)

## Start when

**[#34](https://github.com/moldovancsaba/impact/issues/34)** **Done** (npm publish + smoke + evidence). **Board:** this card should be the **first** dashboard item moved to **In Progress** — see [mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) § *Board movement & WIP discipline*.

## Deliverables

- [x] Ingest HTTP endpoint(s) — [`apps/ingest`](../../apps/ingest) `POST /` and `POST /ingest`, `GET /health`
- [x] Validation layer — `@impact/schemas` / `validateImpactProfile`
- [x] Duplicate handling — **409** + `submission_id` per [submission-contract.md](../../docs/submission-contract.md) (`payload_sha256` + `run_id` UNIQUE)
- [x] Storage schema + persistence — SQLite (`better-sqlite3`), default `./data/ingest.db`
- [x] Basic ops README — [apps/ingest/README.md](../../apps/ingest/README.md), [ingest-server.md](../../docs/ingest-server.md)

## Acceptance

- [x] Can accept a well-formed submission from CLI path (`IMPACT_SUBMIT_URL` → local ingest)
- [x] Invalid payloads rejected with clear errors (**400** + schema message)
- [x] Documented duplicate behaviour (README + contract)

**Follow-on (still D1-adjacent / ops):** production deploy wiring, auth/rate limits, backup runbooks — track separately if needed before closing board **Done**.
