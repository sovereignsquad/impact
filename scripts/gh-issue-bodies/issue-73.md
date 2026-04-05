## Objective

Preserve the idea of **release channel governance** for CLI and packaged builds: e.g. **stable**, **beta**, and **dev** channels with clear promotion rules and compatibility promises.

## Unified Context

Today’s release story is still about **honest versioning** and **activation** ([#34](https://github.com/moldovancsaba/impact/issues/34), [#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)). Multi-channel distribution is **operational overhead** that pays off once install volume and breaking-change cadence justify it.

## Theme / Goal

Anchor future work on **channel naming**, **artifact naming**, **deprecation**, and **user expectations** — without forcing npm tags + Mac notarization + web deploy into one premature matrix.

## Why this matters

Channels reduce “upgrade roulette” for power users but confuse everyone if introduced before a single stable path is credible.

## What this does not mean yet

This issue does **not** mean:
- nightly builds for all platforms now
- separate registries or forks
- auto-update UX (see [#43](https://github.com/moldovancsaba/impact/issues/43) ideabank)

This is **ideabank (Someday)**.

## Dependencies / downstream links

- [#32](https://github.com/moldovancsaba/impact/issues/32) — roadmap: release/adoption maturity
- [docs/release-checklist.md](https://github.com/moldovancsaba/impact/blob/main/docs/release-checklist.md)
- [current-state.md](https://github.com/moldovancsaba/impact/blob/main/docs/current-state.md)

## Risks of misunderstanding

Announcing beta/stable channels before **npm and Mac trust** paths are done, fragmenting support load.

## Related execution issues

Current execution: [#34](https://github.com/moldovancsaba/impact/issues/34), [#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66).
