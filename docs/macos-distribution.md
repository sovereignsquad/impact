# macOS distribution decision (M1 / packaging SSOT)

**Status:** decision recorded for programme issues [#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66).  
**Build:** [`packaging/macos/`](../packaging/macos/) — `npm run build:dmg`.

## Decision

| Track | Choice |
| ----- | ------ |
| **Primary (low friction)** | **`npm install -g @impact/cli`** once [#34](https://github.com/moldovancsaba/impact/issues/34) has published the `@impact/*` scope ([npm-publish.md](npm-publish.md)). |
| **Offline / air-gapped / no registry** | **`Impact.app`** inside a **`.dmg`**, built by [`packaging/macos/build-dmg.sh`](../packaging/macos/build-dmg.sh): bundles CLI `dist/` and production **`node_modules`** (no separate compile-to-binary step). |
| **Node runtime** | **Not embedded** in the DMG (keeps image smaller; aligns with documented requirement Node 20+). Embedding Node is a future option if we need a true “no prerequisites” installer. |
| **DMG** | **Last packaging layer**: produced **after** a reproducible app bundle exists; **not** a substitute for npm or clone builds. |
| **Signing / notarization** | **Follow-up** ([#65](https://github.com/moldovancsaba/impact/issues/65)): Developer ID + notarization for wide distribution; current script uses **ad-hoc** codesign only. |

## Release implications

- **Versioning:** DMG filename uses `apps/cli` **semver** (same SSOT as npm — [current-state.md](current-state.md)).
- **Support:** DMG users run the CLI from **`Impact.app/Contents/MacOS/impact`** (see README on the disk image and [install-macos.md](install-macos.md) Path D).

## What we are not doing in this tranche

- Native rewrite (Rust/Go) for a single-file binary.
- Full GUI `.app` — CLI only inside the bundle.
