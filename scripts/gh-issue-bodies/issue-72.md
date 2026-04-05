## Objective

Preserve the idea of **historical trends** and **time-series** views: how hardware classes, runtimes, tools, and model families **shift over calendar time** in the aggregate dashboard.

## Unified Context

First dashboard work aims at **current** trustworthy aggregates ([#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)). Temporal slicing needs stable storage, retention policy, and enough points per bucket to avoid fingerprinting — a **later** analytics layer.

## Theme / Goal

Keep a visible slot for **trend charts** and period comparisons without promising a Bloomberg terminal on day one.

## Why this matters

Stakeholders often ask “are we winning week over week?” too early; an ideabank card sets expectations and ties future work to **privacy-preserving** bucketing.

## What this does not mean yet

This issue does **not** mean:
- building full time-series infra now
- per-user history
- real-time streaming dashboards

This is **ideabank (Someday)**.

## Dependencies / downstream links

- [#59](https://github.com/moldovancsaba/impact/issues/59) — aggregation model (must support time keys later)
- [#50](https://github.com/moldovancsaba/impact/issues/50)–[#53](https://github.com/moldovancsaba/impact/issues/53) — historical IA / dataset themes (may inform UX)
- [docs/mlp-status-cto.md](https://github.com/moldovancsaba/impact/blob/main/docs/mlp-status-cto.md)

## Risks of misunderstanding

Shipping sparse or volatile trend lines that **re-identify** contributors or mislead when sample size is tiny.

## Related execution issues

Current execution: [#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62); near-term web slice [#50](https://github.com/moldovancsaba/impact/issues/50)–[#57](https://github.com/moldovancsaba/impact/issues/57).
