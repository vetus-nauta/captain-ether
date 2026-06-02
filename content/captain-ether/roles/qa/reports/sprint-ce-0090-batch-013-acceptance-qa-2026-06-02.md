# CE-SPRINT-0090 Batch 013 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0090`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Target text: 25/25
Should-accept: 51/51
Should-reject: 75/75
Dangerous-pair groups: 6/6
Danger must-accept: 21/21
Danger must-reject: 44/44
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
not under command / restricted in her ability to manoeuvre / constrained by her draught
dredging / diving / drifting / fishing operations
towing / being towed / tug assistance / towage
fishing gear deployed / anchor deployed / gear recovered
do not cross ahead / cross ahead / pass astern
do not impede / impede / proceed to berth
long tow astern / ahead
starboard side / port side
```

## QA Decision

Batch 013 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
