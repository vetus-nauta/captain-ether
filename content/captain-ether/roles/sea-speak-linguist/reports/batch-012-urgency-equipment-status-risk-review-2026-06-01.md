# Batch 012 Urgency Equipment Status Risk Review

Date: 2026-06-01
Task: `TASK-CE-0075`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-012-urgency-equipment-status-reinforcement.json
```

## Approved Decisions

- Keep Pan-Pan equipment/status language as urgency, not Mayday distress or
  Securite safety.
- Keep towage separate from rescue, pilotage, and berth requests.
- Keep medical advice separate from medical assistance and rescue.
- Keep `no immediate danger` and `not in distress` as strict negation
  boundaries.
- Keep low battery, low fuel, radio failure, and radio check separate.
- Keep disabled vessel separate from distressed vessel, aground, sinking, and
  course reports.

## Check Run

```text
PASS
Batch status: linguist_reviewed
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
