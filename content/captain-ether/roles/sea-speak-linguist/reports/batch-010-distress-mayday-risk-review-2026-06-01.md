# Batch 010 Distress / Mayday Risk Review

Date: 2026-06-01
Task: `TASK-CE-0063`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Approved Accepted Answers

- `Mayday` and item-local `may day` spelling are approved only for assigned
  Mayday items.
- `Mayday relay` is approved only for forwarding another station's distress.
- `Seelonce Mayday` is approved item-locally beside `silence Mayday`; no global
  radio-silence expansion is requested.
- `medical distress` is acceptable only as an item-local variant for the
  medical-emergency expression.
- `Towage is not enough, rescue required` is acceptable as a distress escalation
  example, not as an ordinary towage request.
- `life raft` and `liferaft` are acceptable item-local variants.

## Must-Stay-Wrong Answers

- `Pan-Pan` and `Securite` must remain wrong for Mayday/distress signal items.
- Generic `emergency` must not replace `distress` in category items.
- `Mayday relay` must not accept own `Mayday`, `Pan-Pan relay`, or readback.
- `position`, `course`, `bearing`, and `destination` must stay separate.
- `vessel name`, `call sign`, and `MMSI` must stay separate.
- `fire`, `flooding`, `sinking`, `listing`, `aground`, `collision`, and `man
  overboard` must stay separate nature-of-distress categories.
- `rescue` must not accept towage, pilotage, berth, escort, or routine
  assistance.
- `persons on board`, `persons overboard`, and `abandoning vessel` must not
  collapse.
- `read back`, `relay`, `say again`, and `cancel` must remain separate
  workflow verbs.
- False distress alert cancellation must not teach cancellation of an active
  Mayday.

## Dangerous Minimal Pairs

Approved as executable regression candidates:

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

## Matcher Risks

No matcher/API change is requested by this review.

Future matcher risk areas:

- broad synonym expansion that accepts `emergency` for distress category items;
- fuzzy matching that collapses Mayday, Pan-Pan, and Securite signal families;
- loose workflow matching that accepts relay/readback/say-again/cancel
  interchangeably;
- broad assistance matching that accepts towage, pilotage, or berth requests
  for rescue items;
- treating onboard emergency-action language as a distress radio-call
  substitute.

## Check Run

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

## Engineer Handoff

Batch 010 is approved for Director-Engineer engineering gate.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
