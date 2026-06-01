# CE-SPRINT-0074 Batch 012 Urgency Equipment Status Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: PASS / DRAFT READY

## Sprint Purpose

Draft a `30` item `urgency_panpan` equipment/status reinforcement batch to
complete the M3 `500` item corpus target after full merge.

## Batch Shape

```text
batch_id=batch-012-urgency-equipment-status-reinforcement
status=draft
branch=urgency_panpan
items=30
grammar_patterns=12
dangerous_minimal_pairs=8
should_accept=60
should_reject=90
```

Type count:

```text
word=6
short_expression=12
phrase=12
```

Level count:

```text
beginner=8
intermediate=15
advanced=7
```

## Check Result

```text
PASS
Batch status: draft
Batch items: 30
Batch target_text: 30
Batch should_accept: 60
Batch should_reject: 90
Batch danger_must_accept: 22
Batch danger_must_reject: 66
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0075` Sea Speak Linguist review.
