# CE-SPRINT-0063 Batch 010 Distress / Mayday Linguist Review

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS / ROUTED TO ENGINEERING GATE

## Sprint Purpose

Review Batch 010 language risk before engineering gate, QA acceptance, or
playable merge.

## Output

Batch file:

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Sea Speak Linguist task:

```text
content/captain-ether/roles/sea-speak-linguist/tasks/task-ce-0063-batch-010-distress-mayday-risk-review-2026-06-01.md
```

Sea Speak Linguist report:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-010-distress-mayday-risk-review-2026-06-01.md
```

## Review Result

```text
Batch status: linguist_reviewed
Content patch: none
Matcher/API change requested: no
Playable merge approved: no, engineering gate and QA still required
```

## Accepted Linguist Decisions

- Keep Mayday, Pan-Pan, and Securite as strict distress, urgency, and safety
  signal families.
- Approve `may day` spelling only item-locally for assigned Mayday items.
- Approve `Seelonce Mayday` only item-locally beside `silence Mayday`.
- Keep Mayday relay separate from own Mayday, Pan-Pan relay, and readback.
- Keep position, course, bearing, destination, vessel name, call sign, and MMSI
  boundaries strict.
- Keep rescue separate from towage, pilotage, berth, and routine assistance.
- Keep false distress alert cancellation advanced and strict.

## Check Result

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
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

Open `TASK-CE-0064` Director-Engineer engineering gate.
