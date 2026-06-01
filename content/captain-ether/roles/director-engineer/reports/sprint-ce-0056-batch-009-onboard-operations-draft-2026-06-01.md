# CE-SPRINT-0056 Batch 009 Onboard Operations Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: PASS / DRAFT READY

## Sprint Purpose

Continue M3 corpus growth by drafting the first `onboard_operations` batch.

## Output

Batch file:

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Content Producer task:

```text
content/captain-ether/roles/content-producer/tasks/task-ce-0056-batch-009-onboard-operations-draft-2026-06-01.md
```

Content Producer report:

```text
content/captain-ether/roles/content-producer/reports/batch-009-onboard-operations-basics-card-2026-06-01.md
```

Director task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0056-batch-009-onboard-operations-draft-2026-06-01.md
```

## Batch Shape

```text
batch_id=batch-009-onboard-operations-basics
status=draft
branch=onboard_operations
items=50
grammar_patterns=12
dangerous_minimal_pairs=10
should_accept=100
should_reject=150
```

Type count:

```text
word=10
short_expression=17
phrase=23
```

Level count:

```text
beginner=25
intermediate=24
advanced=1
```

Module count:

```text
watch_handover=9
helm_orders=11
anchor_handling=9
mooring_stations=10
safety_checks=5
emergency_actions_aboard=6
```

## Risk Coverage

Executable dangerous-pair groups:

- `hand over watch / take over watch`
- `helm order / action completed`
- `port helm / starboard helm`
- `anchor / moor / berth`
- `let go anchor / heave up anchor`
- `make fast / let go lines`
- `bow station / stern station / port station / starboard station`
- `stand by / standing by`
- `safety check / emergency action`
- `fire / flooding / man overboard`

## Check Result

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 35
Batch danger_must_reject: 105
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0057` Sea Speak Linguist review:

```text
Owner: Sea Speak Linguist
Goal: review Batch 009 Onboard Operations for helm-order language, watch
handover, anchor/line handling, station positions, command/status wording, and
onboard emergency boundaries before engineering gate.
```
