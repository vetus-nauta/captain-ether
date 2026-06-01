## Batch 007 Traffic / Collision Acceptance QA

Date: 2026-06-01
Task: `TASK-CE-0047`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

### Target

```text
content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

### PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status/count | PASS | `status=linguist_reviewed`, `items=50`. |
| Target text acceptance | PASS | `50/50` target texts accepted by matcher. |
| Should-accept examples | PASS | `106/106` accepted. |
| Should-reject examples | PASS | `150/150` rejected. |
| Dangerous-pair coverage | PASS | High-risk contrasts are present in item QA notes. |
| Scope preservation | PASS | Report-only; no content/code/config changed by QA. |

### Checks Run

```text
PASS batch007-qa target=50 accept=106 reject=150 total=306
```

QA also checked Batch 007 preflight:

```text
qa preflight batch status/count ok
```

### Dangerous-Pair Coverage Notes

The batch includes active reject coverage for:

- `port / starboard`;
- ordinary `right / left` versus Sea Speak side terms;
- `ahead / astern`;
- `stern / astern`;
- `risk of collision / collision`;
- `CPA / TCPA / ETA`;
- `bearing / heading / course`;
- `give-way vessel / stand-on vessel / stand by`;
- `alter course / change channel`;
- `reduce speed / stop engine`;
- `crossing / overtaking / passing`.

QA spot-counted reject coverage and found explicit reject examples for the
critical terms:

```text
port: 7
starboard: 5
right: 3
left: 2
CPA: 6
TCPA: 4
ETA: 5
heading: 3
course: 6
bearing: 5
stand by: 3
change channel: 2
stop engine: 2
collision: 4
risk of collision: 1
```

### Failures

None found in the assigned acceptance scope.

### Reproduction

N/A. No failure found.

### Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, or player identity
data.

### Next Expected

Director-Engineer acceptance or merge-preparation task.

This QA pass does not approve production deploy and does not itself merge Batch
007 into playable content.
