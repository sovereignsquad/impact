## Objective

**macOS M2 — Packaging pipeline.** Reproducible build and versioned artifact; clean-Mac smoke.

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 3 · depends on [#63](https://github.com/moldovancsaba/impact/issues/63)

## Deliverables

- [x] Reproducible build (scripted) — [`packaging/macos/build-dmg.sh`](../../packaging/macos/build-dmg.sh); `npm run build:dmg` (macOS)
- [x] Versioned release artifact — `packaging/macos/out/Impact-{semver}-macos.dmg` + `.sha256`
- [x] Install / run instructions (not clone) — [install-macos.md](../../docs/install-macos.md) **Path D**
- [ ] Smoke test on clean Mac + evidence notes — checklist in [release-checklist.md](../../docs/release-checklist.md); maintainer to attach evidence on Release / comment

## Related

[#38](https://github.com/moldovancsaba/impact/issues/38) historical spike — fold learnings here.
