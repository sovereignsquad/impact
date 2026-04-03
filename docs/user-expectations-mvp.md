# What users have today (MVP) — honest scope

This page aligns **public messaging** with **shipped** behaviour. It complements [README.md](../README.md), [product.md](product.md), and [privacy-for-users.md](privacy-for-users.md).

## Shipped MVP (discovery scanner)

**Delivered:** a **privacy-first local CLI** that inventories AI-relevant signals, writes **`impact-profile.json`** and **`impact-report.html`**, and supports **optional**, consent-based submission when an endpoint is configured.

**Not delivered:** a **benchmark system**, **community dashboard**, **npm registry one-liner** (Path B is clone + build + global install from repo), **DMG / .app**, or **aggregate crowd statistics**.

## Can users see community / crowd stats?

**No.** There is no public stats UI, no aggregation service in this repo, and no ingest pipeline productised yet. Optional submission can send an anonymised payload to **your** configured endpoint only; building **ingest, aggregation, thresholds, and a public dashboard** is **post-MVP** programme work (see [issue #1](https://github.com/moldovancsaba/impact/issues/1) planning comment).

## Where do users see *their* machine?

**Locally only:** open **`impact-report.html`** after a scan, or read **`impact-profile.json`**. That is the full product surface for “my machine” today.

## How do users install today?

**Canonical Path B (macOS):** clone → `npm ci` → `npm run build` → `npm install -g ./apps/cli` → `impact scan`. See [install-macos.md](install-macos.md) and [smoke-test-macos.md](smoke-test-macos.md). **Not** a drag-and-drop Mac app.

## One-line answer for support

> IMPACT is a **macOS-first CLI** with a **verified repo-based install**. It produces a **local report** and **anonymised profile**; **submission is optional**. **Crowd analytics** and **consumer installers (DMG)** are **not** shipped in the MVP.
