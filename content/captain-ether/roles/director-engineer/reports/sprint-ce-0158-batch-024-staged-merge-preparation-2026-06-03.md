# CE-SPRINT-0158 Batch 024 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub staged merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `35` Batch 024 items to playable `starter.json`.
- Added `35` regression entries to `accept-reject-qa-pairs.json`.
- Added `8` dangerous-pair groups.
- Added `35` grammar patterns.
- Marked Batch 024 status as `merged`.
- Did not carry `qa_notes` into playable starter items.
- Did not deploy to production.

## Final Local / GitHub Candidate State

```text
starter_items=865
grammar_patterns=446
qa_items=865
should_accept=1808
should_reject=2627
dangerous_pairs=201
danger_must_accept=680
danger_must_reject=1480
validator_warn_count=0
```

Type count:

```text
word=185
short_expression=271
phrase=409
```

Level count:

```text
beginner=240
intermediate=399
advanced=226
```

Branch deltas from Batch 024:

```text
onboard_operations +18
urgency_panpan +12
distress_mayday +5
```

## Post-Merge Integrity

```text
Batch 024 status=merged
Batch 024 items present in starter=35/35
Batch 024 QA items present in registry=35/35
Batch 024 grammar patterns present in starter=35/35
Batch 024 dangerous-pair groups present in registry=8/8
qa_notes_in_starter=0
```

## Checks

```text
Full validator: PASS, runs=100, warnings=0
Batch 024 validator after status update: PASS
API smoke: PASS captain-ether-api-smoke checks=334
Diff whitespace check: PASS
Production route read-only: HTTP 200
Production auth/me anonymous read-only: HTTP 200 {"ok":true,"user":null}
Production anonymous start-watch JSON POST read-only: HTTP 401 Login required
```

Empty production POST without JSON headers returned LiteSpeed `403`, while JSON
POST returned the expected Captain Ether API `401`. This is an edge/WAF request
shape observation, not a Batch 024 merge regression, because production was not
changed.

## Production Boundary

Production was not changed in this sprint.

Current intentional drift until a later production sync task:

```text
production_content_baseline=Batch 023 / 830 items
local_github_content_baseline=Batch 024 / 865 items after this commit
```

## Next Gate

Open and run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0159-batch-024-post-merge-qa-2026-06-03.md
```

No production sync should be opened until post-merge QA passes.

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
