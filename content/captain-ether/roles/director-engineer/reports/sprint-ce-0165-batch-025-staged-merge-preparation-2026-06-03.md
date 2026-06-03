# CE-SPRINT-0165 Batch 025 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub staged merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `35` Batch 025 items to playable `starter.json`.
- Added `35` regression entries to `accept-reject-qa-pairs.json`.
- Added `7` dangerous-pair groups.
- Added `35` grammar patterns.
- Marked Batch 025 status as `merged`.
- Did not carry `qa_notes` into playable starter items.
- Did not deploy to production.

## Final Local / GitHub Candidate State

```text
starter_items=900
grammar_patterns=481
qa_items=900
should_accept=1843
should_reject=2732
dangerous_pairs=208
danger_must_accept=713
danger_must_reject=1546
validator_warn_count=0
```

Type count:

```text
word=187
short_expression=281
phrase=432
```

Level count:

```text
beginner=248
intermediate=421
advanced=231
```

Branch deltas from Batch 025:

```text
vts_port_control +27
marina_harbour +8
```

## Post-Merge Integrity

```text
Batch 025 status=merged
Batch 025 items present in starter=35/35
Batch 025 QA items present in registry=35/35
Batch 025 grammar patterns present in starter=35/35
Batch 025 dangerous-pair groups present in registry=7/7
qa_notes_in_starter=0
b025_duplicate_target_groups=0
```

## Checks

```text
Full validator: PASS, runs=100, warnings=0
Batch 025 validator after status update: PASS
API smoke: PASS captain-ether-api-smoke checks=334
Diff whitespace check: PASS
Production FTP count read-only: 865/446/865/201
```

## Production Boundary

Production was not changed in this sprint.

Current intentional drift until a later production sync task:

```text
production_content_baseline=Batch 024 / 865 items
local_github_content_baseline=Batch 025 / 900 items after this commit
production_delta=-35 items relative to local/GitHub
```

## Next Gate

Open and run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0166-batch-025-post-merge-qa-2026-06-03.md
```

No production sync should be opened until post-merge QA passes.

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
