## Objective

**Dashboard D1 — Ingest MVP.** Backend path to receive anonymous profiles, validate, deduplicate, store safely.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 2 · relates **[#48](https://github.com/moldovancsaba/impact/issues/48)** · [submission-contract.md](../../docs/submission-contract.md)

## Start when

**[#34](https://github.com/moldovancsaba/impact/issues/34)** **Done** (npm publish + smoke + evidence). **Board:** this card should be the **first** dashboard item moved to **In Progress** — see [mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) § *Board movement & WIP discipline*.

## Deliverables

- [ ] Ingest HTTP endpoint(s)
- [ ] Validation layer (schema / contract)
- [ ] Duplicate handling (e.g. 409 / idempotency per contract)
- [ ] Storage schema + persistence
- [ ] Basic ops README (run locally / deploy)

## Acceptance

- [ ] Can accept a well-formed submission from CLI path
- [ ] Invalid payloads rejected with clear errors
- [ ] Documented duplicate behaviour
