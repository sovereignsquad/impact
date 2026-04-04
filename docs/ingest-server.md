# Ingest server — IMPACT profile submission (D1 MVP)

**Purpose:** optional **HTTP ingest** for anonymous `ImpactProfile` payloads so a **dashboard backend** can be built on real stored submissions. Implements [submission-contract.md](submission-contract.md).

**Code:** [`apps/ingest`](../apps/ingest/) (`@impact/ingest`, **private** workspace).

## What it does

- **POST** `Content-Type: application/json` — body is one **ImpactProfile** (`impact.v0.3`).
- **Validates** with `@impact/schemas` (`validateImpactProfile`).
- **Dedupes** on **raw body SHA-256** and **`run_id`** (UNIQUE in SQLite) — duplicates return **409** with existing `submission_id` per contract.
- **Persists** to **SQLite** (default `./data/ingest.db`, configurable).
- **Logs** one line per accept/duplicate at **info** (no full payload at info — see contract).

## Run

See [apps/ingest/README.md](../apps/ingest/README.md). Quick path:

```bash
npm run dev:ingest
```

## Relation to the dashboard tranche

This is the **D1 / [#58](https://github.com/moldovancsaba/impact/issues/58)** baseline: **ingest + storage + dedupe + validation**. **D2–D5** (aggregation, privacy, read API, web wiring) are **not** in this package yet — see [mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md) § *CTO directive — background system delivery*.

## Production notes

- Deploy behind **HTTPS**; set `IMPACT_SUBMIT_URL` on clients to the deployed base URL.
- Back up **`IMPACT_INGEST_DB_PATH`**; plan migrations as the storage model grows.
- **Signing / notarization** apply to **Mac CLI/DMG**, not this Node service.
