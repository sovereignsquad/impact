## Objective

**Historical hardware dataset MVP** on the public site: show aggregate **machine classes**, **chip families**, **memory bands**, **platform (OS) counts** — only **real** data from ingest, else **labelled placeholders**.

## Constraints

- **Do not** fabricate community statistics.
- Start with **counts**, **top categories**, **simple distributions** — not trends/comparisons ([mlp-status-cto.md](../../docs/mlp-status-cto.md)).

## Scope

- Wire UI to an API or static JSON **when available**; until then, structured empty state + “coming as submissions grow”.
- Normalisation rules documented (bucket memory, map chip strings conservatively).

## Acceptance

- [ ] When backend provides aggregates, UI renders hardware breakdown.
- [ ] Without data, UI shows honest placeholder (not zeros implied as real submissions).

## Board

**Backlog (SOONER)** — P0 data slice after IA + ingest readiness.
