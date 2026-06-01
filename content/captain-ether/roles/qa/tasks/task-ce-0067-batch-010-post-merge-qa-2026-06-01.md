# TASK-CE-0067 Batch 010 Post-Merge QA

Date: 2026-06-01
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether only
Mode: report-only / local post-merge verification
Status: DONE

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-010-distress-mayday-basics.json`

## Assignment

Independently verify Batch 010 after local merge into playable content.

Required focus:

- Batch status is `merged`.
- `50/50` Batch 010 items are present in playable `starter.json`.
- `50/50` Batch 010 items are present in accept/reject regression.
- Playable Batch 010 items do not contain `qa_notes`.
- Required dangerous-pair groups exist in batch and regression.
- Validator passes.
- API smoke passes.
- Scope preservation.

## Forbidden

- Production deploy
- Atlas config or data writes
- Auth/platform, router/registry, Watch Officer, Nav Desk
- Matcher/API/UI/runtime changes
- Secrets or player identity data
