# CE-SPRINT-0111 Batch 016 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0111`
Owner: QA
Scope: Captain Ether Batch 016 acceptance only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-016-weather-sea-state-warnings-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Grammar patterns: 10
Dangerous-pair groups: 6
Target text: 25/25
Should-accept: 37/37
Should-reject: 76/76
Danger must-accept: 16/16
Danger must-reject: 32/32
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Targeted QA Cases

```text
PASS qa_batch016_targeted cases=32
```

Targeted cases covered:

```text
fog -> accept
smoke -> reject for fog
gale -> accept
squall -> reject for gale
swell -> accept
shallow water -> reject for swell
poor visibility -> accept
good visibility -> reject
visibility less than one mile -> accept
visibility more than one mile -> reject
floating debris -> accept
debris on deck -> reject
Securite, gale warning in area Alpha. -> accept
sécurité gale warning in area Alpha -> accept
Pan Pan gale warning in area Alpha -> reject
Mayday gale warning in area Alpha -> reject
Securite gale cancelled in area Alpha -> reject
Visibility less than one mile, navigate with caution. -> accept
Visibility less than 1 mile, navigate with caution -> accept
Visibility more than one mile navigate with caution -> reject
Visibility less than one mile proceed at full speed -> reject
Dense fog, sound signal required. -> accept
Dense fog sound signal not required -> reject
Squall warning, reduce speed. -> accept
Squall warning increase speed -> reject
Heavy swell, small craft keep clear. -> accept
Heavy swell small craft proceed -> reject
Navigational warning, debris in fairway. -> accept
Navigational warning clear fairway -> reject
Thunderstorm in area Bravo, avoid the area. -> accept
Thunderstorm in area Bravo enter the area -> reject
Thunderstorm in area Alpha avoid the area -> reject
```

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
Securite / sécurité / Pan-Pan / Mayday
active gale warning / cancelled warning / fog warning
fog / smoke / rain / clear weather
gale / squall / calm / fog
swell / shallow water / squall / wake
poor visibility / good visibility
visibility less than one mile / more than one mile
visibility / distance / depth
caution / full speed
dense fog / light fog / dense traffic
sound signal required / not required
squall warning / gale warning / squall passed
reduce speed / increase speed
heavy swell / heavy traffic / shallow water
small craft keep clear / proceed
floating debris / debris on deck / clear fairway / traffic information
fairway debris / clear fairway / debris on deck
thunderstorm / fog
area Bravo / area Alpha
avoid area / enter area
```

## Runtime Checks

```text
Validator with batch: PASS
Collision preflight: PASS
Targeted matcher: PASS qa_batch016_targeted cases=32
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS jq
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on changed inputs: PASS
Diff whitespace check: PASS
```

## QA Decision

Batch 016 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production sync task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
