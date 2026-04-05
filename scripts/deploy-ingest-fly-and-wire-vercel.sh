#!/usr/bin/env bash
# One-shot: deploy ingest to Fly.io (Dockerfile.ingest), then add IMPACT_INGEST_UPSTREAM on Vercel and redeploy.
# Prerequisites:
#   - flyctl (brew install flyctl) and either `flyctl auth login` or FLY_API_TOKEN in the environment
#   - vercel CLI logged in (`vercel whoami`) and repo linked (.vercel/project.json)
#   - Docker (for local builds) OR use --remote-only (Fly remote builder; default below)
#
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

CONFIG="${ROOT}/fly.ingest.toml"
APP="$(grep '^app = ' "$CONFIG" | sed 's/.*"\([^"]*\)".*/\1/')"
REGION="$(grep '^primary_region = ' "$CONFIG" | sed 's/.*"\([^"]*\)".*/\1/')"
ORIGIN="https://${APP}.fly.dev"

if ! command -v flyctl >/dev/null 2>&1; then
  echo "Install flyctl: brew install flyctl" >&2
  exit 1
fi

if ! flyctl auth whoami >/dev/null 2>&1; then
  echo "Fly.io: not authenticated. Run one of:" >&2
  echo "  flyctl auth login" >&2
  echo "  export FLY_API_TOKEN='…'   # deploy token from https://fly.io/user/personal_access_tokens" >&2
  exit 1
fi

echo "==> Fly app: ${APP} (region ${REGION})"

if ! flyctl apps show "${APP}" >/dev/null 2>&1; then
  echo "==> Creating app ${APP}…"
  flyctl apps create "${APP}"
fi

if ! flyctl volumes list -a "${APP}" 2>/dev/null | grep -q ingest_data; then
  echo "==> Creating volume ingest_data (1 GB)…"
  flyctl volumes create ingest_data --region "${REGION}" --size 1 -a "${APP}" --yes
fi

echo "==> flyctl deploy (remote builder)…"
flyctl deploy --config "${CONFIG}" --remote-only

echo "==> Smoke ${ORIGIN}/health …"
curl -sfS "${ORIGIN}/health" | head -c 200
echo ""

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI missing; set upstream yourself:" >&2
  echo "  printf '%s' '${ORIGIN}' | vercel env add IMPACT_INGEST_UPSTREAM production" >&2
  exit 0
fi

echo "==> Vercel: IMPACT_INGEST_UPSTREAM → ${ORIGIN}"
vercel env rm IMPACT_INGEST_UPSTREAM production --yes 2>/dev/null || true
vercel env add IMPACT_INGEST_UPSTREAM production --yes --value "${ORIGIN}"

echo "==> Vercel production deploy…"
vercel --prod --yes

echo ""
echo "Done. Check:"
echo "  curl -sS https://impact.sovereignsquad.com/api/health"
echo "  # expect stats_mode upstream once edge config propagates"
echo ""
echo "Submit from CLI:"
echo "  export IMPACT_SUBMIT_URL=${ORIGIN}/"
echo "  impact scan --yes-submit   # interactive, or IMPACT_SUBMIT_NON_INTERACTIVE=1 for CI"
