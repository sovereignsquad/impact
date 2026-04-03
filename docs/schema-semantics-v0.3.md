# Schema semantics — `impact.v0.3`

This note disambiguates overlapping concepts in the impact profile JSON.

## Four axes

1. **Operational state (`status` on runtimes)** — lifecycle / availability: `not_installed`, `installed_unreachable`, `installed_reachable`, `partial`, `unknown`.
2. **Discovery / presence (`presence`)** — how we know an entity applies: `detected`, `inferred`, `configured`, `unknown`. **`configured`** is reserved; do not emit until there is an explicit config source of truth.
3. **Provenance (`source`, `probe` on provenanced fields)** — where the value came from: `command`, `api`, `derived`, `manual`, `unknown`, plus the exact probe string.
4. **Field confidence (`confidence` on provenanced fields)** — epistemic strength of that *value*; rule-based per [confidence-rules.md](./confidence-rules.md).

## Examples

| Situation | `status` | `presence` |
| --------- | -------- | ---------- |
| Ollama binary works, API up | `installed_reachable` | `detected` |
| Ollama on PATH, API down | `installed_unreachable` | `detected` |
| MLX pip only, no inventory | `partial` | `detected` |
| Runtime not found | `not_installed` | `unknown` |

## Models

Models use `presence` (not a separate “discovery_status”). `confidence` on the model row follows the same field-confidence rules as host fields.

## Readiness

Optional block: `summary` + `presence` (epistemic basis of the narrative). It is **not** a benchmark score.
