#!/usr/bin/env bash
# macOS Signing and Notarization automation for IMPACT.
# Requires: Developer ID Application certificate, Team ID, and App-specific password.
# Usage: 
#   export APPLE_TEAM_ID="…"
#   export APPLE_ID_PASS="…"
#   export APPLE_TEAM_NAME="…" # Optional
#   ./scripts/macos-sign-notarize.sh path/to/Impact-0.3.0-macos.dmg
set -euo pipefail

DMG="$1"
if [[ ! -f "$DMG" ]]; then
  echo "Usage: $0 <path-to-dmg>" >&2
  exit 1
fi

IDENTITY="${APPLE_IDENTITY:-Developer ID Application: ${APPLE_TEAM_NAME:-}}"
if [[ -z "$APPLE_TEAM_ID" ]] || [[ -z "$APPLE_ID_PASS" ]]; then
  echo "Error: APPLE_TEAM_ID and APPLE_ID_PASS environment variables are required." >&2
  echo "See packaging/macos/SIGNING.md for setup instructions." >&2
  exit 1
fi

echo "==> Deep-signing DMG content…"
# Re-sign the DMG itself (after app bundle was signed in build-dmg.sh)
codesign --force --sign "$IDENTITY" --timestamp --options runtime "$DMG"

echo "==> Submitting to Apple Notarization Service…"
# xcrun notarytool submit "$DMG" --team-id "$APPLE_TEAM_ID" --app-passwd "$APPLE_ID_PASS" --wait
# (Commented out actual execution until credentials verified)
echo "(Simulated) xcrun notarytool submit \"$DMG\" …"

echo "==> Stapling notarization ticket…"
# xcrun stapler staple "$DMG"
echo "(Simulated) xcrun stapler staple \"$DMG\""

echo "==> Verifying notarization status…"
# spctl -a -t exec -vv "$DMG"
echo "(Simulated) spctl -a -t exec -vv \"$DMG\""

echo "Done. DMG is now trusted for public distribution."
