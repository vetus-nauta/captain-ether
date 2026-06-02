# CE-SPRINT-0101 Batch 015 SAR Relay Coordination Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether M4 content only
Status: PASS / DRAFT READY

## Sprint Purpose

Continue the M4 `1000+` content track after Batch 014 production sync by drafting
a SAR relay and rescue-coordination batch that does not touch playable
`starter.json` yet.

The batch deliberately avoids duplicating earlier generic Batch 010 targets for:

```text
Mayday
Mayday relay
liferaft
I require immediate assistance
Mayday relay from vessel Orion
```

## Batch File

```text
content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
```

## Batch Shape

```text
batch_id=batch-015-sar-relay-coordination-basics
status=draft
branch=distress_mayday
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

Level count:

```text
beginner=2
intermediate=13
advanced=10
```

## Content Lanes

```text
coastguard / SAR authority / port-control boundary
Mayday relay acknowledgement / own Mayday / Pan-Pan relay boundary
last known position / current position / destination / course boundary
search area / traffic lane / anchorage boundary
visual contact / radio contact / radar contact / contact lost boundary
survivors in sight / no survivors / person overboard / debris boundary
rescue boat / rescue helicopter / liferaft / pilot boat / tug boundary
prepare for evacuation / evacuation not required / towage / berthing boundary
SAR listening watch on channel one six / VTS traffic / channel seven two boundary
```

## Validation Result

Command:

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
```

Result:

```text
PASS
Batch items: 25
Batch target_text: 25
Batch should_accept: 48
Batch should_reject: 75
Batch danger_must_accept: 20
Batch danger_must_reject: 39
Batch-specific warnings: 0
Known starter warnings: WARN (9)
```

## Preflight

```text
Duplicate batch item ids: none
Duplicate batch target_text: none
Starter item id collisions: none
Starter target_text collisions: none
Starter grammar_pattern collisions: none
Item grammar_pattern references: PASS
```

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

Batch 015 is ready for Sea Speak Linguist risk review.

Do not merge into `starter.json` until the Linguist, Engineering Gate, QA
Acceptance, merge-preparation, post-merge QA, and production sync gates are
closed.

## Next Gate

```text
TASK-CE-0102 Batch 015 Sea Speak Linguist Risk Review
```
