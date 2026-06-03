# CE-SPRINT-0142 Batch 019-020 Merge Set A

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether local merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `80` Batch 019-020 items to playable `starter.json`.
- Added `80` regression entries to `accept-reject-qa-pairs.json`.
- Added `21` dangerous-pair groups.
- Added `74` grammar patterns.
- Marked Batch 019 and Batch 020 status as `merged`.
- Did not carry `qa_notes` into playable starter items.
- Did not deploy to production.

## Final Local State

```text
starter_items=730
grammar_patterns=311
qa_items=730
should_accept=1634
should_reject=2221
dangerous_pairs=173
danger_must_accept=542
danger_must_reject=1203
```

Type count:

```text
word=150
short_expression=233
phrase=347
```

Level count:

```text
beginner=219
intermediate=340
advanced=171
```

New Set A branches:

```text
mixed_vocabulary_expansion=30
mixed_safety_equipment_deck_operations=50
```

## Set A Post-Merge Integrity

```text
Batch 019 status: merged
Batch 020 status: merged
Set A items present in starter: 80/80
Set A QA items present in registry: 80/80
Set A dangerous pairs present in registry: 21/21
Set A grammar patterns present in starter: 74/74
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Set A did not introduce duplicate ids, target collisions,
missing grammar references, or playable `qa_notes` leakage.

## Checks

```text
Full validator: PASS with known starter WARN (9)
Batch 019 validator: PASS, status=merged
Batch 020 validator: PASS, status=merged
API smoke: PASS captain-ether-api-smoke checks=334
Post-merge targeted matcher: PASS post_merge_set_a_targeted accept=153 reject=240
JSON parse: PASS
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Production Boundary

Production was not changed in this sprint.

Current production read-only expectation until a later production sync task:

```text
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
production_content_baseline=Batch 018 / 650 items
local_github_content_baseline=Batch 020 / 730 items after this commit
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0143 Batch 019-020 Post-Merge QA Set A` before any production sync.
