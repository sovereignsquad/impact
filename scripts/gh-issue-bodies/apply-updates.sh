#!/usr/bin/env bash
# Apply retitled issues + SSOT bodies + labels. Run from repo root.
# Requires: gh auth, write access to moldovancsaba/impact
set -euo pipefail
REPO="moldovancsaba/impact"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
BD="$ROOT/scripts/gh-issue-bodies"

edit() {
  local num="$1" title="$2" file="$3"
  gh issue edit "$num" --repo "$REPO" --title "$title" --body-file "$file"
}

edit 1 "IMPACT P0: Product doctrine — Industrial Multi-Platform Agent Connector Test" "$BD/issue-01.md"
edit 2 "IMPACT P0: CI/CD, lint, and release hygiene" "$BD/issue-02.md"
edit 3 "IMPACT P1: Architecture and operations SSOT in-repo" "$BD/issue-03.md"
edit 4 "IMPACT P1: Contributor Covenant code of conduct" "$BD/issue-04.md"
edit 5 "IMPACT P1: Discussions and private vulnerability reporting" "$BD/issue-05.md"
edit 6 "IMPACT P0: Monorepo foundation and schema-first delivery" "$BD/issue-06.md"
edit 7 "IMPACT P0: Host scanner — coarse machine and OS signals" "$BD/issue-07.md"
edit 8 "IMPACT P0: Runtime scanner — Ollama, MLX, and adapters" "$BD/issue-08.md"
edit 9 "IMPACT P1: AI tool allowlist scanner (PATH and versions)" "$BD/issue-09.md"
edit 10 "IMPACT P0: Model inventory across supported runtimes" "$BD/issue-10.md"
edit 11 "IMPACT P0: Privacy pipeline — salt, denylist, consent, submission gate" "$BD/issue-11.md"
edit 12 "IMPACT P0: JSON and offline HTML reporting" "$BD/issue-12.md"
edit 13 "IMPACT P1: Anonymous submission client and server contract" "$BD/issue-13.md"
edit 14 "IMPACT P1: Readiness hints without benchmark claims" "$BD/issue-14.md"
edit 15 "IMPACT P0: Automated tests, fixtures, and failure isolation" "$BD/issue-15.md"
edit 16 "IMPACT P0: Programme phases 0–4 — discovery through capability benchmarks" "$BD/issue-16.md"

edit 17 "IMPACT P0: Separate operational state from discovery semantics in schema" "$BD/issue-17.md"
edit 18 "IMPACT P0: Define deterministic confidence assignment rules" "$BD/issue-18.md"
edit 19 "IMPACT P0: Add report rendering tests for degraded and partial states" "$BD/issue-19.md"
edit 20 "IMPACT P0: Expand fixture scenario matrix and invalid-fixture rejection" "$BD/issue-20.md"
edit 21 "IMPACT P0: Implement submission timeout, bounded retry, and local receipt" "$BD/issue-21.md"
edit 22 "IMPACT P1: Add explicit submission payload preview artifact" "$BD/issue-22.md"
edit 23 "IMPACT P1: macOS-first packaging and release path" "$BD/issue-23.md"
edit 24 "IMPACT P1: Add support diagnostics block to report and CLI summary" "$BD/issue-24.md"
edit 25 "IMPACT P1: Document support matrix and degraded platform behaviour" "$BD/issue-25.md"
edit 26 "IMPACT P1: Add merge-path tests for multi-entity scan orchestration" "$BD/issue-26.md"
edit 27 "IMPACT P1: Complete macOS-first packaging and release path" "$BD/issue-27.md"
edit 28 "IMPACT P1: Implement explicit duplicate-submission handling for 409 responses" "$BD/issue-28.md"

# Labels: P0/P1 + area; drop legacy "epic" from implementation workstreams
for n in 1 2 6 7 8 10 11 12 15 16; do
  gh issue edit "$n" --repo "$REPO" --add-label "P0" 2>/dev/null || true
  gh issue edit "$n" --repo "$REPO" --add-label "area/platform" 2>/dev/null || true
done
for n in 3 4 5 9 13 14 22 23 24 25 26 27 28; do
  gh issue edit "$n" --repo "$REPO" --add-label "P1" 2>/dev/null || true
  gh issue edit "$n" --repo "$REPO" --add-label "area/platform" 2>/dev/null || true
done
for n in 17 18 19 20 21; do
  gh issue edit "$n" --repo "$REPO" --add-label "P0" 2>/dev/null || true
  gh issue edit "$n" --repo "$REPO" --add-label "area/platform" 2>/dev/null || true
done
for n in 6 7 8 9 10 11 12 13 14 15; do
  gh issue edit "$n" --repo "$REPO" --remove-label "epic" 2>/dev/null || true
done

echo "Issue bodies and titles updated."
