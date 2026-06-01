# CE-SPRINT-0062 Batch 010 Distress / Mayday Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: PASS / DRAFT READY

## Sprint Purpose

Continue M3 corpus growth by drafting the first strict `distress_mayday`
batch without weakening Pan-Pan urgency, Securite safety, onboard emergency,
traffic, or port-service boundaries.

## Output

Batch file:

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Content Producer task:

```text
content/captain-ether/roles/content-producer/tasks/task-ce-0062-batch-010-distress-mayday-draft-2026-06-01.md
```

Content Producer report:

```text
content/captain-ether/roles/content-producer/reports/batch-010-distress-mayday-basics-card-2026-06-01.md
```

Director task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0062-batch-010-distress-mayday-draft-2026-06-01.md
```

## Batch Shape

```text
batch_id=batch-010-distress-mayday-basics
status=draft
branch=distress_mayday
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
beginner=24
intermediate=21
advanced=5
```

Module count:

```text
distress_signal=6
distress_relay=3
identity_position=8
nature_of_distress=14
assistance_required=7
persons_abandoning=7
distress_readback=5
```

## Risk Coverage

Executable dangerous-pair groups:

- `Mayday / Pan-Pan / Securite`
- `distress / urgency / safety`
- `Mayday / Mayday relay / Pan-Pan relay`
- `position / course / bearing / destination`
- `vessel name / call sign / MMSI`
- `fire / flooding / sinking / listing / aground`
- `rescue / towage / pilot / berth`
- `persons on board / persons overboard / abandoning vessel`
- `read back / relay / say again / cancel`
- `distress traffic / safety watch / routine traffic`

## Check Result

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 33
Batch danger_must_reject: 99
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0063` Sea Speak Linguist review:

```text
Owner: Sea Speak Linguist
Goal: review Batch 010 Distress / Mayday for distress signal boundaries,
Mayday relay wording, position and identity fields, nature-of-distress wording,
rescue/assistance escalation, persons-on-board and abandoning-vessel language,
and distress traffic control before engineering gate.
```
