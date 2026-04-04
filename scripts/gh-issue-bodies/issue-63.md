## Objective

**macOS M1 — Distribution decision.** Choose standalone **CLI binary** vs **lightweight .app** wrapper (not full GUI). **DMG is not this step.**

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 3

## Default recommendation

1. Standalone **binary** first  
2. **.app** later if justified  
3. **DMG** only after M2–M3 ([#64](https://github.com/moldovancsaba/impact/issues/64), [#65](https://github.com/moldovancsaba/impact/issues/65))

## Deliverables

- [x] Decision record in repo — [macos-distribution.md](../../docs/macos-distribution.md)
- [x] Build approach outline — [`packaging/macos/README.md`](../../packaging/macos/README.md), `npm run build:dmg`
- [x] Release implications (versioning, support) — documented in macos-distribution + [release-checklist.md](../../docs/release-checklist.md) Path D

## Board

**Backlog** until dashboard foundation is underway (per CTO order: dashboard before Mac packaging push).
