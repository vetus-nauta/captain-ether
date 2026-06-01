# Director-Engineer Handoff

## Beta 1.0 Transfer

The next director chat is named Director Ether.

## Active Appointment

Accepted: 2026-06-01

Active role holder: Director Ether / Captain Ether Director.

Working repository:

```text
/home/alexey/WebstormProjects/captain-ether
```

GitHub remote:

```text
git@github.com:vetus-nauta/captain-ether.git
```

This appointment accepts the Captain Ether Director-Engineer authority only.
It does not grant global Game Director authority over Watch Officer, Nav Desk,
platform auth, hub routing, production config, or deployment outside a separate
approved task.

First-read handoff:

```text
content/captain-ether/director-ether-beta-1-handoff-2026-05-27.md
```

Use it before making new Captain Ether decisions. It freezes the Beta 1.0
baseline, role folder map, closed gates, validation commands, deployment
warnings, and recommended Beta 1.1 architectural direction.

## Activation

Always active in the main Captain Ether engineering chat.

## Current Authority

Full Captain Ether ownership inside:

- `content/captain-ether/`
- `public/api/captain-ether/`

Captain Ether UI changes are allowed only when explicitly needed.

## Current State

Batch 001, Batch 002, Batch 003, Batch 004, and Batch 005 are merged into
playable `starter.json`.

Batch 006 English-native Sea Speak pilot is accepted as `draft_internal` for
hidden integration only and is not merged into `starter.json`.

Local playable corpus:

- `255` playable items;
- `112` grammar patterns;
- `2` scenarios.

Regression corpus:

- `255` QA item entries;
- `711` should-accept examples;
- `783` should-reject examples;
- `57` dangerous minimal-pair groups.

Latest local validation passed:

- full matcher regression;
- Batch 004 Safety / Securite dangerous-pair checks;
- beginner/intermediate/advanced watch-selection smoke;
- progressive order: `word -> short_expression -> phrase`.

## Closed Gates

Batch 001:

- acceptance QA: `content/captain-ether/qa-batch-001-acceptance-2026-05-27.md`;
- production smoke: `content/captain-ether/qa-batch-001-production-smoke-2026-05-27.md`;
- status: live, playable, production-smoke accepted.

Batch 002:

- Content Producer report:
  `content/captain-ether/roles/content-producer/reports/batch-002-marina-harbour-basics-card-2026-05-27.md`;
- Sea Speak Linguist report:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-002-marina-harbour-risk-review-2026-05-27.md`;
- engineering gate:
  `content/captain-ether/roles/director-engineer/reports/batch-002-engineering-gate-2026-05-27.md`;
- acceptance QA:
  `content/captain-ether/roles/qa/reports/batch-002-acceptance-qa-2026-05-27.md`;
- merge report:
  `content/captain-ether/roles/director-engineer/reports/batch-002-merge-2026-05-27.md`;
- status: live, playable, production-smoke accepted.
- production deploy: uploaded and hash-checked;
- route smoke: `https://game.brkovic.ltd/games/captain-ether` returned HTTP `200`.
- production smoke:
  `content/captain-ether/roles/qa/reports/batch-002-production-smoke-2026-05-27.md`;
- production smoke result: `PASS`.

Batch 003:

- Content Producer report:
  `content/captain-ether/roles/content-producer/reports/batch-003-navigation-reports-basics-card-2026-05-27.md`;
- Sea Speak Linguist report:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-003-navigation-reports-risk-review-2026-05-27.md`;
- engineering gate:
  `content/captain-ether/roles/director-engineer/reports/batch-003-engineering-gate-2026-05-27.md`;
- acceptance QA:
  `content/captain-ether/roles/qa/reports/batch-003-acceptance-qa-2026-05-27.md`;
- merge report:
  `content/captain-ether/roles/director-engineer/reports/batch-003-merge-2026-05-27.md`;
- production smoke:
  `content/captain-ether/roles/qa/reports/batch-003-production-smoke-2026-05-27.md`;
- production smoke accepted:
  `content/captain-ether/roles/director-engineer/reports/batch-003-production-smoke-accepted-2026-05-27.md`;
- auth-block decision:
  `content/captain-ether/roles/director-engineer/reports/batch-003-production-smoke-auth-block-decision-2026-05-27.md`;
- outbound Platform/Auth request:
  `content/captain-ether/roles/director-engineer/reports/platform-auth-production-qa-login-request-2026-05-27.md`;
- batch file:
  `content/captain-ether/batches/batch-003-navigation-reports-basics.json`;
- status: live, playable, production-smoke accepted.
- Platform Auth task:
  `game.brkovic.ltd/docs/game-director/task-0065-platform-auth-captain-ether-production-qa-login-2026-05-26.md`.
- Platform Auth decision:
  `game.brkovic.ltd/docs/game-director/captain-ether-production-qa-login-decision-2026-05-26.md`.
- TASK-0065 result accepted:
  `content/captain-ether/roles/director-engineer/reports/platform-auth-task-0065-result-accepted-2026-05-27.md`.

Batch 004:

- Content Producer report:
  `content/captain-ether/roles/content-producer/reports/batch-004-safety-securite-warnings-card-2026-05-27.md`;
- Sea Speak Linguist report:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-004-safety-securite-risk-review-2026-05-27.md`;
- engineering gate:
  `content/captain-ether/roles/director-engineer/reports/batch-004-engineering-gate-2026-05-27.md`;
- acceptance QA:
  `content/captain-ether/roles/qa/reports/batch-004-acceptance-qa-2026-05-27.md`;
- merge report:
  `content/captain-ether/roles/director-engineer/reports/batch-004-merge-2026-05-27.md`;
- production smoke task:
  `content/captain-ether/roles/qa/tasks/batch-004-production-smoke-2026-05-27.md`;
- production smoke report:
  `content/captain-ether/roles/qa/reports/batch-004-production-smoke-2026-05-27.md`;
- production smoke auth-block decision:
  `content/captain-ether/roles/director-engineer/reports/batch-004-production-smoke-auth-block-decision-2026-05-27.md`;
- Platform Auth one-off access decision:
  `game.brkovic.ltd/docs/game-director/captain-ether-batch-004-production-qa-code-channel-decision-2026-05-26.md`;
- outbound Platform/Auth request:
  `content/captain-ether/roles/director-engineer/reports/platform-auth-batch-004-production-qa-code-channel-request-2026-05-27.md`;
- production smoke accepted:
  `content/captain-ether/roles/director-engineer/reports/batch-004-production-smoke-accepted-2026-05-27.md`;
- Game Director closure accepted:
  `content/captain-ether/roles/director-engineer/reports/task-0078-game-director-closure-accepted-2026-05-27.md`;
- batch file:
  `content/captain-ether/batches/batch-004-safety-securite-warnings.json`;
- status: live, playable, production-smoke accepted, Game Director closed.

## MVP Readiness

MVP readiness analysis:

```text
content/captain-ether/roles/director-engineer/reports/mvp-readiness-analysis-2026-05-27.md
```

Decision:

```text
Controlled/public-beta training MVP is viable after Batch 002.
```

The role pipeline is not circular while each gate answers a different question.
After Batch 002, switch from pipeline-proof mode to MVP-hardening mode.

Validation command:

```text
php content/captain-ether/tools/validate-captain-ether.php
```

Implementation report:

```text
content/captain-ether/roles/director-engineer/reports/validation-command-2026-05-27.md
```

Current validation result: `PASS`.

MVP hardening completed:

- answer-log admin review report:
  `content/captain-ether/roles/director-engineer/reports/mvp-hardening-answer-log-admin-2026-05-27.md`;
- admin-only answer log endpoint now returns `review_groups`;
- admin UI has a compact `Журнал ответов` view;
- service worker cache: `brkovic-games-shell-v6`;
- status: deployed and production smoke checked for route, asset hashes, and
  unauthenticated admin endpoint guard.

## Current Role Assignment

None. `CE-SPRINT-0048 Batch 007 Merge Preparation` is closed as PASS.

Latest task closure:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0048-batch-007-merge-preparation-2026-06-01.md
```

Latest local validation:

```text
Batch 007 merged locally into starter.json and accept-reject regression.
Validator PASS with known WARN (9).
API smoke PASS captain-ether-api-smoke checks=334.
```

Current local playable corpus:

```text
starter_items=305
grammar_patterns=115
qa_items=305
should_accept=817
should_reject=933
dangerous_pairs=67
traffic_collision_items=50
```

Scope preserved:

```text
No production deploy, Atlas config/data write, auth, router, registry
implementation, Watch Officer, Nav Desk, matcher/API/UI/runtime code,
production config, deploy/FTP state, or secrets changed.
```

Next recommended work:

```text
TASK-CE-0049 post-merge QA.
Owner: QA.
Goal: independently verify merged playable corpus and regression after Batch
007 merge, including traffic/collision reachability and dangerous-pair
coverage.
```

No production deploy, router change, registry change, auth/platform edit,
matcher change, API/runtime change, UI change, Atlas change, or public
English-native release is authorized by `CE-SPRINT-0048`.

## Previous Closed Sprint

`CE-SPRINT-0017 Hidden English-Native Stream` is closed as PASS.

Sprint closure:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-closed-2026-05-28.md
```

Implemented sprint:

```text
CE-SPRINT-0017 Hidden English-Native Stream
```

Director decision and sprint plan:

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-next-summit-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md
```

Implementation report:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

QA report:

```text
content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

## Report Shape

Return one copy-ready technical card:

- decision made;
- files changed;
- checks passed;
- deploy status;
- next role command.
