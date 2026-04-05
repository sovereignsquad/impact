## Objective

Preserve the idea of a **reprocessing and schema-migration pipeline**: recomputing summary aggregates and dashboard-facing data from **stored raw (or canonical) profiles** when schemas and rules evolve.

## Unified Context

Long-lived telemetry products need a way to **re-run** normalization, bucketing, and aggregation after schema bumps without losing history or manually patching DBs. Today’s focus is first **live** ingest and aggregates ([#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)); batch recompute is a **later** operational maturity layer.

## Theme / Goal

Keep explicit that IMPACT may eventually need **versioned transforms** from stored payloads to current summary models, with governance over when and how reprocessing runs.

## Why this matters

Without this on the ideabank, schema work can paint the team into a corner where forward-only writes make honest historical charts impossible.

## What this does not mean yet

This issue does **not** mean:
- building a full data platform or lakehouse now
- blocking schema changes on a reprocessor
- exposing raw profiles for download (see separate ideabank on research export)

This is **ideabank (Someday)**.

## Dependencies / downstream links

- [#13](https://github.com/moldovancsaba/impact/issues/13) — submission contract
- [#59](https://github.com/moldovancsaba/impact/issues/59) — aggregation model
- [docs/architecture.md](https://github.com/moldovancsaba/impact/blob/main/docs/architecture.md)

## Risks of misunderstanding

Starting heavy ETL before the first stable live loop, or conflating “reprocess” with “store PII-rich blobs.”

## Related execution issues

Current execution: [#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62).
