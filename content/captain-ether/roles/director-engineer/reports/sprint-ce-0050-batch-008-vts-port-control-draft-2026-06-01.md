# CE-SPRINT-0050 Batch 008 VTS / Port Control Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: PASS / DRAFT READY

## Sprint Purpose

Start the next M3 corpus-growth step after Batch 007 by drafting the first
`vts_port_control` batch.

## Output

Batch file:

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Content Producer task:

```text
content/captain-ether/roles/content-producer/tasks/task-ce-0050-batch-008-vts-port-control-draft-2026-06-01.md
```

Content Producer report:

```text
content/captain-ether/roles/content-producer/reports/batch-008-vts-port-control-basics-card-2026-06-01.md
```

Director task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0050-batch-008-vts-port-control-draft-2026-06-01.md
```

## Batch Shape

```text
batch_id=batch-008-vts-port-control-basics
status=draft
branch=vts_port_control
items=50
grammar_patterns=9
dangerous_minimal_pairs=10
should_accept=109
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
beginner=19
intermediate=27
advanced=4
```

Module count:

```text
vts_instructions=14
port_entry_departure=13
pilot_request=8
reporting_points=6
traffic_information=5
tug_assistance=4
```

## Risk Coverage

Executable dangerous-pair groups:

- `request / report`
- `instruction / advice / information`
- `VTS / port control / marina control / pilot station`
- `pilot / tug / tow`
- `enter port / leave port`
- `permitted / not permitted`
- `reporting point / anchorage / berth / fairway`
- `channel 12 / channel 13 / channel 16 / channel 72`
- `proceed / hold / wait`
- `inbound / outbound`

## Check Result

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 50
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
Known starter warnings: WARN (9)
```

During draft validation, `airway` was rejected as a fairway contrast but the
matcher accepted it as a spelling variant of `fairway`. The draft was tightened
by replacing that reject with `traffic lane`.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0051` Sea Speak Linguist review:

```text
Owner: Sea Speak Linguist
Goal: review Batch 008 VTS / Port Control for station identity, authority
language, pilot/tug boundaries, port-entry/departure permissions, exact channel
numbers, and traffic-direction contrasts before engineering gate.
```
