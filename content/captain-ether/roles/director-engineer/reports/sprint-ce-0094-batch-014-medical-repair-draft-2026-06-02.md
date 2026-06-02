# CE-SPRINT-0094 Batch 014 Medical Assistance / Emergency Repair Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether M4 content only
Status: PASS / DRAFT READY

## Sprint Purpose

Continue the M4 `1000+` content track after Batch 013 production sync by drafting
a medical-detail and temporary-repair batch that does not touch playable
`starter.json` yet.

The batch deliberately avoids duplicating earlier generic items for:

```text
medical assistance
medical advice
low battery / radio limited
bilge pump failure
flooding on board
engine failure / steering failure
```

## Batch File

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
```

## Batch Shape

```text
batch_id=batch-014-medical-repair-basics
status=draft
branch=urgency_panpan
items=25
grammar_patterns=11
dangerous_minimal_pairs=6
```

Type count:

```text
word=5
short_expression=9
phrase=11
```

Level count:

```text
beginner=7
intermediate=10
advanced=8
```

## Content Lanes

```text
injury / illness / bleeding / fracture / hypothermia
first aid / medical advice / medical assistance / evacuation boundary
conscious / unconscious / overboard / missing boundary
temporary repair / engine restarted / steering restored
leak controlled / water ingress reduced / pump running
no immediate danger / immediate danger / Mayday / rescue boundary
```

## Validation Result

Command:

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-014-medical-repair-basics.json
```

Result:

```text
PASS
Batch items: 25
Batch target_text: 25
Batch should_accept: 41
Batch should_reject: 75
Batch danger_must_accept: 21
Batch danger_must_reject: 42
Batch-specific warnings: 0
Known starter warnings: 9
```

Draft cleanup performed:

```text
punctuation-only accepted-answer duplicates were deduplicated so Batch 014 adds
no batch-specific duplicate-normalization warnings.
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

Batch 014 is ready for Sea Speak Linguist risk review.

Do not merge into `starter.json` until the Linguist, Engineering Gate, QA
Acceptance, and merge-preparation gates are closed.

## Next Gate

```text
TASK-CE-0095 Batch 014 Sea Speak Linguist Risk Review
```
