# macOS Signing and Notarization Guide

To distribute IMPACT as a trusted macOS application without "Unidentified Developer" warnings, you must sign the artifacts with a **Developer ID Application** certificate and submit them to Apple's Notary Service.

## Prerequisites

1.  **Apple Developer Program Membership**: $99/year (required for Developer ID).
2.  **Certificate**: A "Developer ID Application" certificate installed in your macOS Keychain.
3.  **App-Specific Password**: Created at [appleid.apple.com](https://appleid.apple.com) for use with `xcrun notarytool`.

## Configuration

Set the following environment variables on your build machine (or in a persistent `.zshrc`):

```bash
export APPLE_TEAM_ID="ABC123XYZ"       # Your 10-character Team ID
export APPLE_ID_PASS="xxxx-xxxx-xxxx" # The App-specific password
export APPLE_TEAM_NAME="John Doe"      # Your formal Team Name (displayed in certificates)
```

## Automated Flow

The `packaging/macos/build-dmg.sh` script will automatically trigger the notarization flow if `APPLE_TEAM_ID` is present:

1.  **Build**: `npm run build:dmg`
2.  **Sign**: Deep-signs the `.app` bundle and DMG.
3.  **Notarize**: Submits to Apple and waits for approval.
4.  **Staple**: Attaches the notarization ticket to the DMG.

## Verification

Once complete, verify the trust status:

```bash
spctl -a -v --type install Impact-0.xxx-macos.dmg
```

You should see: `Impact-0.xxx-macos.dmg: accepted`
