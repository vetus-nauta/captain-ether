# CE-SPRINT-0068 Batch 011 Review Minimal Pairs Draft

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether only
Status: PASS / DRAFT READY

## Sprint Purpose

Open the `review_minimal_pairs` branch with a short, high-risk contrast batch
that reinforces existing Sea Speak boundaries without adding broad synonyms.

## Output

Batch file:

```text
content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

Content Producer task:

```text
content/captain-ether/roles/content-producer/tasks/task-ce-0068-batch-011-review-minimal-pairs-draft-2026-06-01.md
```

Content Producer report:

```text
content/captain-ether/roles/content-producer/reports/batch-011-review-minimal-pairs-basics-card-2026-06-01.md
```

Director task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0068-batch-011-review-minimal-pairs-draft-2026-06-01.md
```

## Batch Shape

```text
batch_id=batch-011-review-minimal-pairs-basics
status=draft
branch=review_minimal_pairs
items=15
grammar_patterns=3
dangerous_minimal_pairs=11
should_accept=30
should_reject=45
```

Type count:

```text
word=4
short_expression=8
phrase=3
```

Level count:

```text
beginner=9
intermediate=5
advanced=1
```

## Risk Coverage

Executable dangerous-pair groups:

- `over / out`
- `roger / affirmative`
- `say again / read back`
- `port / starboard`
- `ahead / astern`
- `channel one six / channel one three`
- `zero nine zero / nine zero`
- `one four zero zero / one five zero zero`
- `Pan-Pan / Mayday / Securite`
- `alter course to port / alter course to starboard`
- `give way / stand on`

## Check Result

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-011-review-minimal-pairs-basics.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 15
Batch target_text: 15
Batch should_accept: 30
Batch should_reject: 45
Batch danger_must_accept: 15
Batch danger_must_reject: 45
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0069` Sea Speak Linguist review.
