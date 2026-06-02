# CE-SPRINT-0097 Batch 014 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0097`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Target text: 25/25
Should-accept: 45/45
Should-reject: 77/77
Dangerous-pair groups: 6/6
Danger must-accept: 22/22
Danger must-reject: 44/44
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Targeted QA Cases

```text
PASS targeted_batch014 cases=14
```

Targeted cases covered:

```text
Engine restarted, temporary repair holding. -> accept
Engine restarted, temporary repair is holding. -> accept
Engine restarted assistance no longer required -> reject
Engine failed assistance required -> reject
Engine restarted rescue required -> reject
bilge pump running -> accept
bilge pump is running -> accept
fire pump running -> reject
Leak controlled, bilge pump running. -> accept
Leak controlled fire pump running -> reject
Medical evacuation not required, advice needed. -> accept
Medical evacuation required advice needed -> reject
Medical situation, no immediate danger. -> accept
Mayday medical situation -> reject
```

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
injury / illness / vessel damage / generic emergency
medical advice / medical assistance / medical evacuation / rescue
person conscious / person unconscious / person overboard / person missing
hypothermia / hyperthermia / seasickness / shock
engine restarted / engine failed / steering restored / steering failed
temporary repair holding / assistance no longer required / rescue required
leak controlled / leak increasing / flooding uncontrolled
bilge pump running / bilge pump failed / fire pump running
water ingress reduced / water ingress increasing / water tank reduced
no immediate danger / immediate danger / Mayday medical escalation
```

## Runtime Checks

```text
Validator: PASS
Targeted matcher: PASS targeted_batch014 cases=14
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Starter duplicate id/target preflight: PASS
Secret scan on changed inputs: PASS
```

## QA Decision

Batch 014 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
