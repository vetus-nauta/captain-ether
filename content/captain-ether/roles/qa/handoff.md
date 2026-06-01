# QA Handoff

## Activation

Use only after Director-Engineer names the exact target and test type.

## Current Prepared QA

None.

## Last QA

TASK-CE-0065 Batch 010 Distress / Mayday acceptance QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0065-batch-010-distress-mayday-acceptance-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-010-distress-mayday-acceptance-qa-2026-06-01.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-010-distress-mayday-basics.json`
- result:
  `PASS`
- confirmed:
  target text, `should_accept`, `should_reject`, signal boundaries, and
  dangerous-pair coverage pass for the reviewed batch; no merge or production
  deploy is implied.

TASK-CE-0061 Batch 009 post-merge QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0061-batch-009-post-merge-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-009-post-merge-qa-2026-06-01.md`
- mode:
  report-only / local post-merge verification
- target:
  `content/captain-ether/starter.json`,
  `content/captain-ether/accept-reject-qa-pairs.json`, and
  `content/captain-ether/batches/batch-009-onboard-operations-basics.json`
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0061-batch-009-post-merge-qa-accepted-2026-06-01.md`
- confirmed:
  Batch 009 status `merged`, `50/50` playable items, `50/50` regression
  entries, no playable `qa_notes`, required dangerous pairs present, validator
  PASS, and API smoke `PASS captain-ether-api-smoke checks=334`.

TASK-CE-0059 Batch 009 Onboard Operations acceptance QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0059-batch-009-onboard-operations-acceptance-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-009-onboard-operations-acceptance-qa-2026-06-01.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-009-onboard-operations-basics.json`
- result:
  `PASS`
- confirmed:
  target text, `should_accept`, `should_reject`, and dangerous-pair coverage
  pass for the reviewed batch; no merge or production deploy is implied.

TASK-CE-0055 Batch 008 post-merge QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0055-batch-008-post-merge-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-008-post-merge-qa-2026-06-01.md`
- mode:
  report-only / local post-merge verification
- target:
  `content/captain-ether/starter.json`,
  `content/captain-ether/accept-reject-qa-pairs.json`, and
  `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0055-batch-008-post-merge-qa-accepted-2026-06-01.md`
- confirmed:
  Batch 008 status `merged`, `50/50` playable items, `50/50` regression
  entries, no playable `qa_notes`, required dangerous pairs present, validator
  PASS, and API smoke `PASS captain-ether-api-smoke checks=334`.

TASK-CE-0053 Batch 008 VTS / Port Control acceptance QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0053-batch-008-vts-port-control-acceptance-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-008-vts-port-control-acceptance-qa-2026-06-01.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- result:
  `PASS`
- confirmed:
  target text, `should_accept`, `should_reject`, and dangerous-pair coverage
  pass for the reviewed batch; no merge or production deploy is implied.

TASK-CE-0049 Batch 007 post-merge QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0049-batch-007-post-merge-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-007-post-merge-qa-2026-06-01.md`
- mode:
  report-only / local post-merge verification
- target:
  `content/captain-ether/starter.json`,
  `content/captain-ether/accept-reject-qa-pairs.json`, and
  `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0049-batch-007-post-merge-qa-accepted-2026-06-01.md`
- confirmed:
  Batch 007 status `merged`, `50/50` playable items, `50/50` regression
  entries, no playable `qa_notes`, required dangerous pairs present, validator
  PASS, and API smoke `PASS captain-ether-api-smoke checks=334`.

TASK-CE-0047 Batch 007 Traffic / Collision acceptance QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0047-batch-007-traffic-collision-acceptance-qa-2026-06-01.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-007-traffic-collision-acceptance-qa-2026-06-01.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- result:
  `PASS`
- confirmed:
  target text, `should_accept`, `should_reject`, and dangerous-pair coverage
  pass for the draft batch; no merge or production deploy is implied.

TASK-CE-0022 Public Stream Selector Contract QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md`
- report file:
  `content/captain-ether/roles/qa/reports/task-ce-0022-public-stream-selector-contract-qa-2026-05-28.md`
- mode:
  report-only / contract review
- target:
  `CE-SPRINT-0019 Public Stream Selector Contract`
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0019-public-stream-selector-contract-closed-2026-05-28.md`
- confirmed:
  no forced first-run gate, default `ru_source`, no locale-to-stream inference,
  opt-in/reversible stream choice, no progress overwrite, no public exposure of
  hidden/admin-only stream before explicit release, clear future smoke matrix,
  and no production deploy implied by the contract sprint.

TASK-CE-0018 Hidden English-Native Stream QA:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md`
- report file:
  `content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md`
- mode:
  report-only
- target:
  hidden/admin-only English-native stream implementation from TASK-CE-0017.
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-closed-2026-05-28.md`
- confirmed:
  legacy RU-source preservation, admin-only English-native gate, stream-scoped
  progress/Lost Oars/answer-log behavior, payload privacy, storage restore, and
  command reproducibility.

TASK-CE-0016 API smoke fixture acceptance:

- task file:
  `content/captain-ether/roles/qa/tasks/task-ce-0016-api-smoke-fixture-acceptance-qa-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/task-ce-0016-api-smoke-fixture-acceptance-qa-2026-05-27.md`
- mode:
  report-only
- target:
  `content/captain-ether/tools/smoke-start-watch-api.php`
- result:
  `PASS`
- accepted by Director-Engineer:
  `content/captain-ether/roles/director-engineer/reports/task-ce-0016-api-smoke-fixture-acceptance-accepted-2026-05-27.md`
- confirmed:
  PHP lint PASS, API smoke `PASS captain-ether-api-smoke checks=180`,
  Captain Ether validator PASS with known `WARN (9)`.

Batch 004 production smoke rerun:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-004-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-004-production-smoke-2026-05-27.md`
- mode:
  report-only
- target:
  `https://game.brkovic.ltd/games/captain-ether`
- required focus:
  production route/login, watch lengths `12/16/20`, progressive order,
  Batch 004 reachability, payload privacy, and Safety / Securite targeted
  matcher checks.
- result:
  `PASS`
- decision report:
  `content/captain-ether/roles/director-engineer/reports/batch-004-production-smoke-accepted-2026-05-27.md`
- Platform Auth one-off access decision:
  `game.brkovic.ltd/docs/game-director/captain-ether-batch-004-production-qa-code-channel-decision-2026-05-26.md`

Do not include account identifiers, codes, cookies, sessions, CSRF values, SMTP
details, `.netrc`, private config, player email, player identity data, or other
secrets in reports.

## Previous QA

Batch 004 production smoke after merge, first attempt:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-004-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-004-production-smoke-2026-05-27.md`
- mode:
  report-only
- target:
  `https://game.brkovic.ltd/games/captain-ether`
- result:
  `NEEDS DIRECTOR DECISION / PLATFORM AUTH ACCESS BLOCK`
- confirmed:
  route HTTP `200`, unauthenticated Captain Ether API `401`, production
  request-code HTTP `200`, no `dev_code` exposed, no secrets written.
- blocked:
  login/intended route, watches `12/16/20`, progressive order, Batch 004
  reachability, payload privacy, and targeted Safety / Securite matcher checks.

Batch 004 acceptance before merge:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-004-acceptance-qa-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-004-acceptance-qa-2026-05-27.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-004-safety-securite-warnings.json`
- required focus:
  Safety / Securite dangerous pairs, especially `Securite / Sécurité / security`,
  `Securite / Pan-Pan / Mayday`, `safety / urgency / distress`,
  `warning / advice / information`, `advice / advise`,
  `restricted visibility / poor visibility / reduced visibility`,
  `obstruction / obstacle`, `hazard / danger`, `read back / say again`, and
  exact channel, time, bearing, distance, unit, direction, location, and
  reporting-point values.
- result:
  `PASS`

Batch 003 production smoke rerun:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-003-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-003-production-smoke-2026-05-27.md`
- mode:
  report-only
- target:
  `https://game.brkovic.ltd/games/captain-ether`
- required focus:
  production route/login, watch lengths `12/16/20`, progressive order,
  Batch 003 reachability, payload privacy, and navigation-report targeted
  matcher checks.
- result:
  `PASS`
- decision report:
  `content/captain-ether/roles/director-engineer/reports/batch-003-production-smoke-accepted-2026-05-27.md`
- Platform Auth task:
  `game.brkovic.ltd/docs/game-director/task-0065-platform-auth-captain-ether-production-qa-login-2026-05-26.md`
- Platform Auth decision:
  `game.brkovic.ltd/docs/game-director/captain-ether-production-qa-login-decision-2026-05-26.md`

Do not include account identifiers, codes, cookies, sessions, CSRF values, SMTP
details, `.netrc`, private config, player email, player identity data, or other
secrets in the report.

## Earlier QA

Batch 003 production smoke after merge, first attempt:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-003-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-003-production-smoke-2026-05-27.md`
- mode:
  report-only
- target:
  `https://game.brkovic.ltd/games/captain-ether`
- result:
  `AUTH BLOCK ASSIGNED TO PLATFORM AUTH TASK-0065`

Batch 003 acceptance before merge:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-003-acceptance-qa-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-003-acceptance-qa-2026-05-27.md`
- mode:
  report-only
- target:
  `content/captain-ether/batches/batch-003-navigation-reports-basics.json`
- required focus:
  navigation-report dangerous pairs, especially `heading/course/bearing`,
  `090/90`, ETA values, units, decimal wording, and `say again/read back`.
- result:
  `PASS`

Batch 002 production smoke after merge:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-002-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-002-production-smoke-2026-05-27.md`
- mode:
  report-only
- target:
  `https://game.brkovic.ltd/games/captain-ether`
- result:
  `PASS`

Batch 002 acceptance QA before merge:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-002-acceptance-qa-2026-05-27.md`
- report file:
  `content/captain-ether/roles/qa/reports/batch-002-acceptance-qa-2026-05-27.md`
- result:
  `PASS`

Batch 001 production smoke:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-001-production-smoke-2026-05-27.md`
- report file:
  `content/captain-ether/qa-batch-001-production-smoke-2026-05-27.md`
- result:
  `PASS`

Batch 001 acceptance QA before merge:

- task file:
  `content/captain-ether/roles/qa/tasks/batch-001-acceptance-qa-2026-05-27.md`
- report file:
  `content/captain-ether/qa-batch-001-acceptance-2026-05-27.md`
- result:
  `PASS`

## Report Shape

Return one copy-ready technical card:

- PASS/FAIL by block;
- failures with reproduction steps;
- severity;
- owner route;
- confirmation of report-only mode.
