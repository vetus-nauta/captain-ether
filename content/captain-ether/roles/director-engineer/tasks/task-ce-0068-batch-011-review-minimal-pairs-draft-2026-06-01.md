# TASK-CE-0068 Batch 011 Review Minimal Pairs Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: DONE

## Goal

Create a short `review_minimal_pairs` corpus-growth draft for high-risk Sea
Speak contrasts.

## Target

```text
content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

## Required Shape

- `15` draft items.
- Branch: `review_minimal_pairs`.
- Include item-local `qa_notes`.
- Include executable dangerous minimal-pair groups.
- Keep status `draft`.

## Forbidden

- Merge into `starter.json`
- Edit accept/reject regression
- Matcher/API/UI/runtime changes
- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Next Gate

Sea Speak Linguist risk review before engineering gate, QA acceptance, or any
playable merge.
