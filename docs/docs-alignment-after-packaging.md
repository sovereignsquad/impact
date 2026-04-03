# Documentation alignment after packaging (D6)

**Purpose:** when the canonical **packaging / install path** is finished (tracked on the [programme board](https://github.com/users/moldovancsaba/projects/2/views/3), e.g. [#27](https://github.com/moldovancsaba/impact/issues/27)), run a single **docs pass** so public copy matches what we ship.

## Checklist

1. **[README.md](../README.md)** — **Quick start** matches the **one** canonical install path (npm global from clone, published `npm` package, or binary — whichever is declared done).
2. **[install-macos.md](install-macos.md)** — same path; remove or clearly mark stale “future” blocks that are now real.
3. **[smoke-test-macos.md](smoke-test-macos.md)** and **[release-checklist.md](release-checklist.md)** — commands and expected **outputs** (`impact-profile.json`, `impact-report.html`, optional submission files) match the CLI.
4. **[privacy-for-users.md](privacy-for-users.md)** / **[privacy-policy.md](privacy-policy.md)** — filenames for preview/receipt still match `packages/submission`.
5. **[docs/assets/impact-report-sample.png](assets/impact-report-sample.png)** — regenerate if the HTML report template changed.
6. **Terminology** — **scanner**, **profile**, **submission**, **presence**, **status**, **support** consistent across README, [current-state.md](current-state.md), [product.md](product.md).

**Rule:** every **promise** on the front page must match the **built** CLI behaviour after the packaging milestone merges.
