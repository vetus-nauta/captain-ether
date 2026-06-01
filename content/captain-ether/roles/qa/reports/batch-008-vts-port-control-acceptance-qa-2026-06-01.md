# Batch 008 VTS / Port Control Acceptance QA

Date: 2026-06-01
Task: `TASK-CE-0053`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status/count | PASS | `status=linguist_reviewed`, `items=50`. |
| Target text acceptance | PASS | `50/50` target texts accepted by matcher. |
| Should-accept examples | PASS | `109/109` accepted. |
| Should-reject examples | PASS | `150/150` rejected. |
| Dangerous-pair coverage | PASS | `10/10` required VTS / port-control groups present and executable. |
| Scope preservation | PASS | Report-only; no content/code/config changed by QA. |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
Known starter warnings: WARN (9)
```

QA structural count:

```text
PASS batch008-qa target=50 accept=109 reject=150 total=309
dangerous_pairs=10
```

## Dangerous-Pair Coverage Notes

The batch includes active reject coverage for:

- `request / report`;
- `instruction / advice / information`;
- `VTS / port control / marina control / pilot station`;
- `pilot / tug / tow`;
- `enter port / leave port`;
- `permitted / not permitted`;
- `reporting point / anchorage / berth / fairway`;
- `channel 12 / channel 13 / channel 16 / channel 72`;
- `proceed / hold / wait`;
- `inbound / outbound`.

QA spot-counted key risk terms across the batch and regression metadata:

```text
vts=356
port control=31
marina control=13
pilot station=13
instruction=98
advice=28
information=75
request=141
report=188
pilot=171
tug=89
tow=21
enter port=31
leave port=28
permitted=46
not permitted=20
channel 12=33
channel 13=11
channel 16=6
channel 72=6
reporting point=63
anchorage=37
berth=27
fairway=69
proceed=43
hold=46
wait=46
inbound=7
outbound=19
```

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
008 into playable content.
