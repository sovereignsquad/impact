## Objective

**macOS M3 — Signing & notarization plan.** Before calling a download “normal Mac software.”

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 3

## Deliverables

- [x] Documented signing strategy — [macos-distribution.md](../../docs/macos-distribution.md) (**ad-hoc** now; **Developer ID + notarization** = production path)
- [ ] Notarization checklist — expand when Apple ID signing is scheduled
- [x] What is manual vs automated — DMG: local/macOS script today; CI runner TBD; notarization manual until automated

**Current state:** `build-dmg.sh` runs `codesign --force --deep -s -` (ad-hoc). Wide distribution still needs Developer ID + notarization.

## Depends on

[#64](https://github.com/sovereignsquad/impact/issues/64) artifact shape known.
