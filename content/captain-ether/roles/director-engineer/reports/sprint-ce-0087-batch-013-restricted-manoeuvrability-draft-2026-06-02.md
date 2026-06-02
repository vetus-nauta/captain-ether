# CE-SPRINT-0087 Batch 013 Restricted Manoeuvrability Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether M4 content only
Status: PASS / DRAFT READY

## Sprint Purpose

Start the M4 `1000+` content track after production parity closure by drafting a
small, high-safety batch that does not touch playable `starter.json` yet.

The chosen lane is traffic/legal-status language:

```text
not under command
restricted in ability to manoeuvre
constrained by draught
towing status
fishing gear deployed
dredging operations
diving operations
keep-clear / do-not-impede / crossing warnings
```

## Batch File

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

## Batch Shape

```text
batch_id=batch-013-restricted-manoeuvrability-basics
status=draft
branch=traffic_collision
items=25
grammar_patterns=10
dangerous_minimal_pairs=6
```

Type count:

```text
word=5
short_expression=10
phrase=10
```

## Validation Result

Command:

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

Result:

```text
PASS
Batch items: 25
Batch target_text: 25
Batch should_accept: 46
Batch should_reject: 75
Batch danger_must_accept: 21
Batch danger_must_reject: 44
Batch-specific warnings: 0
Known starter warnings: 9
```

One draft correction was made during validation:

```text
word_status_trawling_001 should_reject "trailing" was removed because the matcher
fairly treated it as a spelling-near form of "trawling". It was replaced with
"drifting".
```

Accepted-answer punctuation duplicates were also deduplicated so the new batch
adds no new duplicate-normalization warnings.

## Scope Preserved

No changes were made to:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
matcher
API/runtime
UI/assets
production
Atlas secrets
WebStorm DB console/datasource
Watch Officer
Nav Desk
hub/router
platform auth
```

## Decision

Batch 013 is ready for Sea Speak Linguist risk review.

Do not merge into `starter.json` until the Linguist, Engineering Gate, QA
Acceptance, and merge-preparation gates are closed.

## Next Gate

```text
TASK-CE-0088 Batch 013 Sea Speak Linguist Risk Review
```
