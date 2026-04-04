## Objective

**macOS M4 — DMG packaging (last layer).** Drag-to-Applications, uninstall/update notes — **only after M1–M3 complete.**

## SSOT

[mlp-next-delivery-tranche.md](../../docs/mlp-next-delivery-tranche.md) Phase 3

## Constraints

[#63](https://github.com/moldovancsaba/impact/issues/63)–[#65](https://github.com/moldovancsaba/impact/issues/65) satisfied in repo (signing **ad-hoc** per #65; production notarization still open).

## Deliverables

- [x] `.dmg` + checksums — `npm run build:dmg` → `packaging/macos/out/Impact-*-macos.dmg` + `.sha256`
- [x] Applications-folder flow documented — [install-macos.md](../../docs/install-macos.md) Path D + `README-VOLUME.txt` on disk image
- [x] Uninstall / update notes — [macos-distribution.md](../../docs/macos-distribution.md) + [`packaging/macos/README.md`](../../packaging/macos/README.md)
