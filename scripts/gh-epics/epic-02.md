**Epic 2 — Host scanner** ([docs/product.md](https://github.com/moldovancsaba/impact/blob/main/docs/product.md))

## Stories

- OS / arch / chip / memory / disk / GPU hints
- Machine class derivation
- Salted coarse fingerprint (no raw UUIDs)

## Acceptance

- Structured `host` object; missing fields degrade to `unknown` / null; no sensitive raw IDs.
