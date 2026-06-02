# CE-SPRINT-0105 Batch 015 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `25` Batch 015 items to playable `starter.json`.
- Added `25` regression entries to `accept-reject-qa-pairs.json`.
- Added `6` dangerous-pair groups.
- Added `10` grammar patterns.
- Marked Batch 015 status as `merged`.
- Did not carry `qa_notes` into playable starter items.

## Final Local State

```text
starter_items=575
grammar_patterns=194
qa_items=575
should_accept=1356
should_reject=1749
dangerous_pairs=134
danger_must_accept=408
danger_must_reject=955
```

Type count:

```text
word=115
short_expression=186
phrase=274
```

Level count:

```text
beginner=196
intermediate=264
advanced=115
```

## Batch 015 Post-Merge Integrity

```text
Batch status: merged
Batch items present in starter: 25/25
Batch QA items present in registry: 25/25
Batch item ids unique in starter: PASS
Batch grammar patterns present in starter: 10/10
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Batch 015 did not introduce duplicate ids or missing grammar
references.

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS jq
PHP syntax guard: PASS
JS syntax guard: PASS
Diff whitespace check: PASS
Post-merge targeted matcher: PASS post_merge_batch015_targeted cases=20
Secret scan on changed files: PASS
```

## Preserved Boundaries

```text
last known position -> accept
last reported position -> reject
Report last known position of vessel in distress. -> accept
Report last reported position of vessel in distress -> reject
Search area north of last known position. -> accept
Search area north of last reported position -> reject
Debris sighted near last known position. -> accept
Debris sighted near last reported position -> reject
Mayday relay received -> accept
Pan-Pan relay received -> reject
Mayday relay received, unable to assist. -> accept
Mayday relay received able to assist -> reject
coastguard -> accept
VTS -> reject for coastguard item
Rescue boat approaching from starboard side. -> accept
Rescue boat approaching from port side -> reject
Keep listening watch for SAR traffic on channel one six. -> accept
Keep listening watch for SAR traffic on channel seven two -> reject
Rescue helicopter overhead, prepare for evacuation. -> accept
Rescue helicopter overhead evacuation not required -> reject
```

## Subagent Office Note

A read-only merge-risk subagent independently confirmed the intended merge scope,
required checks, and no pre-merge collisions. Its dirty-worktree warning was
attributed to the Director-Engineer's local merge changes in this sprint.

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0106` post-merge QA before production deploy.
