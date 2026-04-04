I.M.P.A.C.T. — Impact CLI (macOS bundle)
========================================

This disk image contains Impact.app: a self-contained CLI (Node.js 20+ runtime
required on the system — bundled dependencies ship inside the app).

Install
-------
1. Drag "Impact.app" into your Applications folder.

Run (Terminal)
--------------
Impact is a command-line tool. Open Terminal and run for example:

  /Applications/Impact.app/Contents/MacOS/impact --version
  mkdir -p ~/impact-reports
  /Applications/Impact.app/Contents/MacOS/impact scan --no-submit -o ~/impact-reports
  open ~/impact-reports/impact-report.html

Optional: add the binary directory to your PATH, or symlink `impact` into a
directory already on PATH.

Privacy / docs
--------------
https://github.com/moldovancsaba/impact

This build is not notarized. If Gatekeeper blocks it, right-click the app →
Open, or use System Settings → Privacy & Security.
