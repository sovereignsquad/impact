## Objective

**Historical LLM / model dataset MVP**: **model families** (normalised), **local vs cloud** where schema allows, **counts by family**, **runtime association** hints — aggregates only, no raw payloads.

## Constraints

- Privacy-safe aggregates only; align with [submission-contract.md](../../docs/submission-contract.md).
- No fake “top models” without data.

## Scope

- Family normalisation strategy (document in issue or `docs/`).
- Top N families + locality split when data exists.

## Acceptance

- [ ] UI section for model aggregates; placeholder when empty.
- [ ] Wording: stats update after ingestion + thresholds.

## Board

**Backlog (SOONER)** — P0 data slice.
