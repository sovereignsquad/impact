## Objective

Preserve the future capability to reprocess stored raw profiles into newer summary and aggregation versions as schemas evolve.

## Unified Context

The current fast path is to get useful dashboard data live, potentially using prepared summary payloads alongside raw profiles. Over time, schemas and normalization rules will evolve.

This creates a future need:
- re-derive new summaries from old raw profiles
- migrate historical data safely
- avoid losing value when the schema changes

## Theme / Goal

Keep the future reprocessing/migration layer visible.

Potential future value:
- schema evolution without data loss
- improved aggregates from older submissions
- cleaner long-term analytics governance

## Why this matters

Without this capability:
- old data may become stranded
- dashboard meaning may drift between client versions
- summary logic changes may fragment historical comparability

## What this does not mean yet

This issue does **not** mean:
- full migration machinery must be built now
- schema evolution is the current bottleneck
- the active MLP path should slow down for this

This is a future system-hardening ideabank item.

## Dependencies / downstream links

- [#58](https://github.com/sovereignsquad/impact/issues/58)–[#62](https://github.com/sovereignsquad/impact/issues/62)
- [docs/submission-contract.md](https://github.com/sovereignsquad/impact/blob/main/docs/submission-contract.md)
- [Issue #1](https://github.com/sovereignsquad/impact/issues/1)

## Risks of misunderstanding

The main risk is over-engineering migration infrastructure before the live system proves value.

If misunderstood, the team may:
- build a data platform before the product loop is alive
- overcomplicate a still-early service
- delay the first useful dashboard unnecessarily

## Related execution issues

Current execution remains focused on:
- [#34](https://github.com/sovereignsquad/impact/issues/34)
- [#58](https://github.com/sovereignsquad/impact/issues/58)–[#62](https://github.com/sovereignsquad/impact/issues/62)
