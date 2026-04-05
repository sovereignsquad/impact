#!/usr/bin/env bash
# Set Project #2 Status from board columns (single source of truth for workflow).
# Compatible with bash 3.2 (macOS).
# Sprint B + post-MVP + MLP + public web/data + dashboard/mac tranche + ideabank P2 (2026-04): issues 17–74 item IDs from `gh project item-add` / item-list.
set -euo pipefail
PROJECT_ID="PVT_kwHOACGtF84BTnzN"
STATUS_FIELD="PVTSSF_lAHOACGtF84BTnzNzhA1jZc"

IDEABANK=97b637fb
ROADMAP=6311d6f7
BACKLOG=f44409d8
TODO=f75ad846
IN_PROGRESS=47fc9ee4
REVIEW=c92ddcf4
DONE=98236657

set_status() {
  local item_id="$1" option_id="$2"
  gh project item-edit \
    --id "$item_id" \
    --project-id "$PROJECT_ID" \
    --field-id "$STATUS_FIELD" \
    --single-select-option-id "$option_id"
}

item_for_issue() {
  case "$1" in
    1) echo PVTI_lAHOACGtF84BTnzNzgpD2r4 ;;
    2) echo PVTI_lAHOACGtF84BTnzNzgpD2sI ;;
    3) echo PVTI_lAHOACGtF84BTnzNzgpD2tM ;;
    4) echo PVTI_lAHOACGtF84BTnzNzgpD2uI ;;
    5) echo PVTI_lAHOACGtF84BTnzNzgpD2uo ;;
    6) echo PVTI_lAHOACGtF84BTnzNzgpD6iM ;;
    7) echo PVTI_lAHOACGtF84BTnzNzgpD6i0 ;;
    8) echo PVTI_lAHOACGtF84BTnzNzgpD6j8 ;;
    9) echo PVTI_lAHOACGtF84BTnzNzgpD6kw ;;
    10) echo PVTI_lAHOACGtF84BTnzNzgpD6l8 ;;
    11) echo PVTI_lAHOACGtF84BTnzNzgpD6ng ;;
    12) echo PVTI_lAHOACGtF84BTnzNzgpD6pc ;;
    13) echo PVTI_lAHOACGtF84BTnzNzgpD6qs ;;
    14) echo PVTI_lAHOACGtF84BTnzNzgpD6sA ;;
    15) echo PVTI_lAHOACGtF84BTnzNzgpD6sw ;;
    16) echo PVTI_lAHOACGtF84BTnzNzgpD6uE ;;
    17) echo PVTI_lAHOACGtF84BTnzNzgpEX6I ;;
    18) echo PVTI_lAHOACGtF84BTnzNzgpEX6w ;;
    19) echo PVTI_lAHOACGtF84BTnzNzgpEX7M ;;
    20) echo PVTI_lAHOACGtF84BTnzNzgpEX78 ;;
    21) echo PVTI_lAHOACGtF84BTnzNzgpEX8k ;;
    22) echo PVTI_lAHOACGtF84BTnzNzgpEX-M ;;
    23) echo PVTI_lAHOACGtF84BTnzNzgpEX_Y ;;
    24) echo PVTI_lAHOACGtF84BTnzNzgpEYAE ;;
    25) echo PVTI_lAHOACGtF84BTnzNzgpEYAs ;;
    26) echo PVTI_lAHOACGtF84BTnzNzgpEYBQ ;;
    27) echo PVTI_lAHOACGtF84BTnzNzgpEYBs ;;
    28) echo PVTI_lAHOACGtF84BTnzNzgpEYCo ;;
    29) echo PVTI_lAHOACGtF84BTnzNzgpFC7Y ;;
    30) echo PVTI_lAHOACGtF84BTnzNzgpFC7M ;;
    31) echo PVTI_lAHOACGtF84BTnzNzgpFC8k ;;
    32) echo PVTI_lAHOACGtF84BTnzNzgpFC8o ;;
    33) echo PVTI_lAHOACGtF84BTnzNzgpFNWE ;;
    34) echo PVTI_lAHOACGtF84BTnzNzgpFNWc ;;
    35) echo PVTI_lAHOACGtF84BTnzNzgpFNZA ;;
    36) echo PVTI_lAHOACGtF84BTnzNzgpFNZg ;;
    37) echo PVTI_lAHOACGtF84BTnzNzgpFNbw ;;
    38) echo PVTI_lAHOACGtF84BTnzNzgpFNdk ;;
    39) echo PVTI_lAHOACGtF84BTnzNzgpFNe4 ;;
    40) echo PVTI_lAHOACGtF84BTnzNzgpFNic ;;
    41) echo PVTI_lAHOACGtF84BTnzNzgpFNj8 ;;
    42) echo PVTI_lAHOACGtF84BTnzNzgpFNk8 ;;
    43) echo PVTI_lAHOACGtF84BTnzNzgpFNm0 ;;
    44) echo PVTI_lAHOACGtF84BTnzNzgpGXRk ;;
    45) echo PVTI_lAHOACGtF84BTnzNzgpGXSA ;;
    46) echo PVTI_lAHOACGtF84BTnzNzgpGXSE ;;
    47) echo PVTI_lAHOACGtF84BTnzNzgpGXSM ;;
    48) echo PVTI_lAHOACGtF84BTnzNzgpGXSc ;;
    49) echo PVTI_lAHOACGtF84BTnzNzgpGXSg ;;
    50) echo PVTI_lAHOACGtF84BTnzNzgpGxvI ;;
    51) echo PVTI_lAHOACGtF84BTnzNzgpGxvY ;;
    52) echo PVTI_lAHOACGtF84BTnzNzgpGxvo ;;
    53) echo PVTI_lAHOACGtF84BTnzNzgpGxv0 ;;
    54) echo PVTI_lAHOACGtF84BTnzNzgpGxv8 ;;
    55) echo PVTI_lAHOACGtF84BTnzNzgpGxwI ;;
    56) echo PVTI_lAHOACGtF84BTnzNzgpGxwQ ;;
    57) echo PVTI_lAHOACGtF84BTnzNzgpGxwo ;;
    58) echo PVTI_lAHOACGtF84BTnzNzgpG2J8 ;;
    59) echo PVTI_lAHOACGtF84BTnzNzgpG2KM ;;
    60) echo PVTI_lAHOACGtF84BTnzNzgpG2KY ;;
    61) echo PVTI_lAHOACGtF84BTnzNzgpG2Ks ;;
    62) echo PVTI_lAHOACGtF84BTnzNzgpG2K4 ;;
    63) echo PVTI_lAHOACGtF84BTnzNzgpG2Kw ;;
    64) echo PVTI_lAHOACGtF84BTnzNzgpG2LQ ;;
    65) echo PVTI_lAHOACGtF84BTnzNzgpG2LY ;;
    66) echo PVTI_lAHOACGtF84BTnzNzgpG2Lg ;;
    67) echo PVTI_lAHOACGtF84BTnzNzgpI6N0 ;;
    68) echo PVTI_lAHOACGtF84BTnzNzgpI6OA ;;
    69) echo PVTI_lAHOACGtF84BTnzNzgpI6OQ ;;
    70) echo PVTI_lAHOACGtF84BTnzNzgpI6Oc ;;
    71) echo PVTI_lAHOACGtF84BTnzNzgpI6Ow ;;
    72) echo PVTI_lAHOACGtF84BTnzNzgpI6O4 ;;
    73) echo PVTI_lAHOACGtF84BTnzNzgpI6O8 ;;
    74) echo PVTI_lAHOACGtF84BTnzNzgpI6PQ ;;
    *) echo ""; return 1 ;;
  esac
}

# Doctrine + roadmap
set_status "$(item_for_issue 1)" "$IN_PROGRESS"
set_status "$(item_for_issue 16)" "$ROADMAP"
# Roadmap theme horizon markers (non-executable)
for n in 29 30 31 32; do
  set_status "$(item_for_issue "$n")" "$ROADMAP"
done

# Historical programme issues
set_status "$(item_for_issue 2)" "$DONE"
set_status "$(item_for_issue 3)" "$IN_PROGRESS"
# Programme hygiene — Backlog (near-future, not next execution queue)
set_status "$(item_for_issue 4)" "$BACKLOG"
set_status "$(item_for_issue 5)" "$BACKLOG"
set_status "$(item_for_issue 6)" "$DONE"
set_status "$(item_for_issue 7)" "$DONE"
set_status "$(item_for_issue 8)" "$DONE"
set_status "$(item_for_issue 9)" "$DONE"
# #10 / #14: MVP discovery + readiness shipped; MLX depth / rule tuning = platform backlog, not "in review" on board
set_status "$(item_for_issue 10)" "$DONE"
set_status "$(item_for_issue 11)" "$DONE"
set_status "$(item_for_issue 12)" "$DONE"
set_status "$(item_for_issue 13)" "$BACKLOG"
set_status "$(item_for_issue 14)" "$DONE"
set_status "$(item_for_issue 15)" "$DONE"

# Sprint B — delivered on board (repo complete except packaging track)
for n in 17 18 19 20 21 22 24 25 26 28; do
  set_status "$(item_for_issue "$n")" "$DONE"
done
# B7 — #23 superseded by #27; Path B verified — #27 Done
set_status "$(item_for_issue 23)" "$DONE"
set_status "$(item_for_issue 27)" "$DONE"

# Post-MVP programme (from issue #1 directive) — CTO 2026-04: #33 done; #34 primary; #38 exploratory in Backlog
set_status "$(item_for_issue 33)" "$DONE"
set_status "$(item_for_issue 34)" "$IN_PROGRESS"
for n in 35 36 37 38; do
  set_status "$(item_for_issue "$n")" "$BACKLOG"
done
for n in 39 40 41; do
  set_status "$(item_for_issue "$n")" "$ROADMAP"
done
for n in 42 43 67 68 69 70 71 72 73 74; do
  set_status "$(item_for_issue "$n")" "$IDEABANK"
done

# MLP execution (docs/mlp.md) — CTO: Todo M1–M3; Backlog M4–M6; do not implement spine before #34 closed
for n in 44 45 46; do
  set_status "$(item_for_issue "$n")" "$TODO"
done
for n in 47 48 49; do
  set_status "$(item_for_issue "$n")" "$BACKLOG"
done

# MLP public web / historical data (CTO 2026-04) — H1,H5–H8 Todo; H2–H4 Backlog
for n in 50 54 55 56 57; do
  set_status "$(item_for_issue "$n")" "$TODO"
done
for n in 51 52 53; do
  set_status "$(item_for_issue "$n")" "$BACKLOG"
done

# Next delivery tranche — code in repo; activation sprint owns board **In Progress** on #58 (mlp-status-cto § Leadership view); #59–#62 Todo until closure order / hosted proof
set_status "$(item_for_issue 58)" "$IN_PROGRESS"
for n in 59 60 61 62; do
  set_status "$(item_for_issue "$n")" "$TODO"
done
for n in 63 64 65 66; do
  set_status "$(item_for_issue "$n")" "$BACKLOG"
done

echo "Project Status field updated for issues 1–74 (MVP + MLP + web/data + dashboard + macOS packaging + ideabank expansion)."
