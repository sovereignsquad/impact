## Objective

Ship **historical / community data** information architecture on the public site (`apps/web`): dedicated sections for **hardware tested**, **tools tested**, and **LLMs tested** — **structure first**, honest about data availability.

## Unified context

CTO directive (2026-04): the website becomes the public home for install, use, submit, and **historical aggregates**. Phase A = IA + live-ready sections; **do not fake** data that ingest has not produced ([mlp-status-cto.md](../../docs/mlp-status-cto.md)).

## Scope

- Routes or anchor sections: **Hardware**, **Tools/runtimes**, **Models / LLMs** (labels TBD in UI).
- Placeholder or **clearly labelled** empty states until aggregates exist.
- Copy: aggregates appear as submissions accumulate and pass **privacy thresholds** (link [privacy-for-users.md](../../docs/privacy-for-users.md), [submission-contract.md](../../docs/submission-contract.md)).

## Non-goals

- Trend charts, compare-my-machine, benchmark overlays (Roadmap).
- Ingest implementation (may depend on separate backend work; this issue is **front IA**).

## Acceptance

- [ ] User can navigate to all three category areas from the marketing shell.
- [ ] Empty / placeholder states state explicitly that **live community data** follows ingest + volume.
- [ ] No fabricated counts presented as real.

## Dependencies

- **#34** — public install weakens “download” story until closed; IA can still land.
- Ingest MVP / [#48](https://github.com/sovereignsquad/impact/issues/48) class work for **real** numbers later.

## Board

**Todo (NEXT)** — P0.
