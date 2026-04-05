#!/usr/bin/env bash
# Set Vercel Production IMPACT_INGEST_UPSTREAM to the hosted ingest origin (no trailing slash),
# redeploy linked project to production. Requires: vercel whoami + .vercel/project.json.
#
# Usage:
#   bash scripts/vercel-wire-ingest-upstream.sh https://impact-mm-ingest.fly.dev
#
set -euo pipefail
RAW="${1:?usage: $0 https://<ingest-host>}"
ORIGIN="${RAW%/}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ "$ORIGIN" != https://* ]]; then
  echo "Error: origin must start with https://" >&2
  exit 1
fi

command -v vercel >/dev/null 2>&1 || {
  echo "vercel CLI not found" >&2
  exit 1
}

echo "==> IMPACT_INGEST_UPSTREAM (production) = ${ORIGIN}"
vercel env rm IMPACT_INGEST_UPSTREAM production --yes 2>/dev/null || true
vercel env add IMPACT_INGEST_UPSTREAM production --yes --value "${ORIGIN}"

echo "==> vercel --prod"
vercel --prod --yes

echo ""
echo "Smoke: curl -sS https://impact.messmass.com/api/health"
echo "  expect stats_mode \"upstream\" after propagation"
