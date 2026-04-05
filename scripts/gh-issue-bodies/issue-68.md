## Objective

Preserve the idea of a **public demo dataset** or **sandbox dashboard mode** so the website stays informative and trustworthy when live community submission volume is low.

## Unified Context

The product needs a credible **empty/low-volume** story: the shell and API should not look broken before the activation path ([#34](https://github.com/moldovancsaba/impact/issues/34), [#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)) has real traffic. A redacted or synthetic **sample** layer is a future polish lever, not a substitute for real ingest truth.

## Theme / Goal

Document intent for a **safe, labelled** demo or sandbox path that never pretends to be live community data.

## Why this matters

Without this ideabank hook, teams may hack misleading placeholders into production, or leave the public site looking abandoned during early adoption.

## What this does not mean yet

This issue does **not** mean:
- shipping fake stats as if they were live
- delaying real dashboard activation for demo work
- replacing privacy design with a public dump of real submissions

This is **ideabank (Someday)**.

## Dependencies / downstream links

- [#61](https://github.com/moldovancsaba/impact/issues/61) / [#62](https://github.com/moldovancsaba/impact/issues/62) — read API and web wiring to real aggregates
- [#60](https://github.com/moldovancsaba/impact/issues/60) — threshold and redaction thinking
- [Issue #1](https://github.com/moldovancsaba/impact/issues/1) — ideabank doctrine

## Risks of misunderstanding

Confusing demo mode with production aggregates, or investing in demo UX before **live** dashboard truth exists.

## Related execution issues

Current execution: [#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62).
