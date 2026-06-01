# Batch 010 Distress / Mayday Acceptance QA

Date: 2026-06-01
Task: `TASK-CE-0065`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status/count | PASS | `status=linguist_reviewed`, `items=50`. |
| Target text acceptance | PASS | `50/50` target texts accepted by matcher. |
| Should-accept examples | PASS | `100/100` accepted. |
| Should-reject examples | PASS | `150/150` rejected. |
| Dangerous-pair coverage | PASS | `10/10` required distress groups present and executable. |
| Signal boundaries | PASS | Mayday, Pan-Pan, and Securite remain separated by rejects. |
| Scope preservation | PASS | Report-only; no content/code/config changed by QA. |

## Checks Run

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

QA structural count:

```text
PASS batch010-qa target=50 accept=100 reject=150 total=300
dangerous_pairs=10
```

## Dangerous-Pair Coverage Notes

The batch includes active reject coverage for:

- `Mayday / Pan-Pan / Securite`;
- `distress / urgency / safety`;
- `Mayday / Mayday relay / Pan-Pan relay`;
- `position / course / bearing / destination`;
- `vessel name / call sign / MMSI`;
- `fire / flooding / sinking / listing / aground`;
- `rescue / towage / pilot / berth`;
- `persons on board / persons overboard / abandoning vessel`;
- `read back / relay / say again / cancel`;
- `distress traffic / safety watch / routine traffic`.

## Failures

None found in the assigned acceptance scope.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, or player identity
data.

## Next Expected

Director-Engineer acceptance or merge-preparation task.

This QA pass does not approve production deploy and does not itself merge Batch
010 into playable content.
