#!/usr/bin/env bash
# Set Project #2 Status from board columns (single source of truth for workflow).
# Compatible with bash 3.2 (macOS).
set -euo pipefail
PROJECT_ID="PVT_kwHOACGtF84BTnzN"
STATUS_FIELD="PVTSSF_lAHOACGtF84BTnzNzhA1jZc"

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
    *) echo ""; return 1 ;;
  esac
}

set_status "$(item_for_issue 1)" "$IN_PROGRESS"
set_status "$(item_for_issue 16)" "$ROADMAP"
set_status "$(item_for_issue 2)" "$DONE"
set_status "$(item_for_issue 3)" "$REVIEW"
set_status "$(item_for_issue 4)" "$TODO"
set_status "$(item_for_issue 5)" "$TODO"
set_status "$(item_for_issue 6)" "$DONE"
set_status "$(item_for_issue 7)" "$DONE"
set_status "$(item_for_issue 8)" "$DONE"
set_status "$(item_for_issue 9)" "$DONE"
set_status "$(item_for_issue 10)" "$REVIEW"
set_status "$(item_for_issue 11)" "$DONE"
set_status "$(item_for_issue 12)" "$DONE"
set_status "$(item_for_issue 13)" "$REVIEW"
set_status "$(item_for_issue 14)" "$REVIEW"
set_status "$(item_for_issue 15)" "$IN_PROGRESS"

echo "Project Status field updated for issues 1–16."
