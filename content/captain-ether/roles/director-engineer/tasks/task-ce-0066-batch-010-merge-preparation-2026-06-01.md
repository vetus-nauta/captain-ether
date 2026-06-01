# TASK-CE-0066 Batch 010 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Merge QA-accepted Batch 010 Distress / Mayday into the local playable Captain
Ether corpus and regression source.

## Target Files

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

## Required Merge Actions

- Add `50` Batch 010 items to playable `starter.json`.
- Remove `qa_notes` from playable items.
- Add `50` Batch 010 regression entries.
- Add `10` dangerous minimal-pair groups to regression.
- Add `12` grammar patterns to playable grammar patterns.
- Mark Batch 010 status as `merged`.
- Run validator, API smoke, and JS syntax guard.

## Forbidden

- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Matcher/API/UI/runtime changes
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Next Gate

Post-merge QA before any production deploy or production smoke.
