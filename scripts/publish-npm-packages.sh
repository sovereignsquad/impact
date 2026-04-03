#!/usr/bin/env bash
# Publish all @impact/* workspaces to npm in dependency order.
# Prereq: npm login; @impact scope must allow your user (create org at npmjs.com if needed).
# Usage: from repo root —  npm run publish:npm
#        dry-run —          npm run publish:npm:dry-run
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build

ORDER=(
  @impact/schemas
  @impact/privacy
  @impact/scanner-host
  @impact/scanner-runtimes
  @impact/scanner-tools
  @impact/scanner-models
  @impact/core
  @impact/reporting
  @impact/submission
  @impact/cli
)

for pkg in "${ORDER[@]}"; do
  echo "==> $pkg"
  if [[ -n "${DRY_RUN:-}" ]]; then
    npm publish -w "$pkg" --access public --dry-run
  else
    npm publish -w "$pkg" --access public
  fi
done

echo "Done. Verify: npm view @impact/cli version && npm install -g @impact/cli@0.3.0 && impact --version"
