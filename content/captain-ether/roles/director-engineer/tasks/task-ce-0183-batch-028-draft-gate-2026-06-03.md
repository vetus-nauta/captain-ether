# TASK-CE-0183 Batch 028 Draft Gate

Date: 2026-06-03
Owner: Content Producer / Director-Engineer
Scope: Captain Ether Batch 028 isolated draft gate
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0182 Batch 027 Production Release-Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
```

## Scope Source

Use the locked M5 scope from CE-0154:

```text
Batch 028: final M5 bridge to 1000-item baseline
items=30
purpose=complete M5 expansion from 970 to 1000 after Batch 027 release-readiness
status=draft_only
```

## Required Work

```text
create isolated Batch 028 draft JSON only
keep starter.json and accept-reject-qa-pairs.json unchanged
no production deploy
run batch validator with warnings=0
run collision/id/pattern scan against the 970-item baseline
create content producer card
create director draft report
create next linguist/engineering gate task if draft passes
update handoff and start package
commit and push if all checks pass
```

## Hard Boundaries

```text
no merge into starter.json
no production deploy
no matcher/API/runtime/UI/auth/Atlas/router/registry changes
no Watch Officer or Nav Desk changes
```

Expected output:

```text
content/captain-ether/batches/batch-028-*.json
content/captain-ether/roles/content-producer/reports/batch-028-*-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0183-batch-028-draft-2026-06-03.md
next task for Batch 028 linguist/engineering gate if draft passes
```
