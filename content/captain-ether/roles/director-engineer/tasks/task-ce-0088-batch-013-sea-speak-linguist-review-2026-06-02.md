# TASK-CE-0088 Batch 013 Sea Speak Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Assigned by: Director-Engineer
Scope: Captain Ether M4 Batch 013 only
Status: DONE

## Input

Review:

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0087-batch-013-restricted-manoeuvrability-draft-2026-06-02.md
```

## Review Focus

Check whether the batch safely teaches:

```text
not under command
restricted in ability to manoeuvre
constrained by draught
towing status and tow length
fishing gear deployed
dredging operations
diving operations
keep clear / do not cross ahead / do not impede passage
```

## Must-Stay-Separate Boundaries

Review especially these dangerous boundaries:

```text
not under command / restricted in ability to manoeuvre / constrained by draught
dredging / diving / drifting / fishing operations
towing / being towed / tug assistance / towage
fishing gear deployed / anchor deployed / gear recovered
do not cross ahead / cross ahead / pass astern
do not impede / impede / proceed to berth
```

## Required Output

Create a review report under:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-013-restricted-manoeuvrability-risk-review-2026-06-02.md
```

The report must state one of:

```text
ACCEPTED_FOR_ENGINEERING_GATE
ACCEPTED_WITH_PATCHES
BLOCKED_FOR_CONTENT_FIX
```

If patches are needed, list exact item ids and replacement text.

## Boundaries

Do not edit runtime, matcher, API, UI, production, database, Atlas secrets,
Watch Officer, Nav Desk, hub/router, or platform auth.
