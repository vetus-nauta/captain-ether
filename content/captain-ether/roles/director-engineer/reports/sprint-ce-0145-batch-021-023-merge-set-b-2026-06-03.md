# CE-SPRINT-0145 Batch 021-023 Merge Set B

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether local merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `100` Batch 021-023 items to playable `starter.json`.
- Added `100` regression entries to `accept-reject-qa-pairs.json`.
- Added `20` dangerous-pair groups.
- Added `100` grammar patterns.
- Marked Batch 021, Batch 022, and Batch 023 status as `merged`.
- Did not carry `qa_notes` into playable starter items.
- Did not deploy to production in this merge task.

## Collision Patch

Before merge, Set B had one normalized target collision inside Batch 022:

```text
expr_b022_pass_port_to_port_001 -> pass port to port
phrase_b022_pass_port_to_port_001 -> Pass port to port.
```

The phrase target was made operationally more specific and QA was updated:

```text
phrase_b022_pass_port_to_port_001 -> Pass port to port at safe distance.
```

This added one Set B reject case for the shorter expression boundary.

## Final Local State

```text
starter_items=830
grammar_patterns=411
qa_items=830
should_accept=1773
should_reject=2522
dangerous_pairs=193
danger_must_accept=642
danger_must_reject=1404
```

Type count:

```text
word=180
short_expression=263
phrase=387
```

Level count:

```text
beginner=235
intermediate=384
advanced=211
```

New Set B branches:

```text
vhf_procedure_message_markers=35
navigation_hazards_buoyage_visibility=35
emergency_medical_response=30
```

## Set B Post-Merge Integrity

```text
Batch 021 status: merged
Batch 022 status: merged
Batch 023 status: merged
Set B items present in starter: 100/100
Set B QA items present in registry: 100/100
Set B dangerous pairs present in registry: 20/20
Set B grammar patterns present in starter: 100/100
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Set B did not introduce duplicate ids, remaining target
collisions, missing grammar references, or playable `qa_notes` leakage.

## Checks

```text
Full validator: PASS with known starter WARN (9), runs=60
Batch 021 validator: PASS, status=merged
Batch 022 validator: PASS, status=merged
Batch 023 validator: PASS, status=merged
API smoke: PASS captain-ether-api-smoke checks=334
Post-merge targeted matcher: PASS post_merge_set_b_targeted items=100 accept=139 reject=301
Set B target collisions: PASS 0
JSON parse: PASS
Secret scan on changed files: PASS
Diff whitespace check: PASS
Production route read-only: HTTP 200
Production anonymous start-watch read-only: HTTP 401 Login required
```

## Production Boundary

Production was not changed in this sprint.

Current intentional drift until a later production sync task:

```text
production_content_baseline=Batch 020 / 730 items
local_github_content_baseline=Batch 023 / 830 items after this commit
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0146 Batch 021-023 Post-Merge QA Set B` before any production sync.
