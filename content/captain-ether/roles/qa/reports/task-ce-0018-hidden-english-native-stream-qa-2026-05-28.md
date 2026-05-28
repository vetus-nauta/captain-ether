# QA Report: TASK-CE-0018 Hidden English-Native Stream

Date: 2026-05-28
Role: QA / Captain Ether
Mode: report-only

## Result

PASS.

The hidden/admin-only English-native stream implementation from `TASK-CE-0017`
meets the Director-approved local Beta 1.1 contract. No public selector,
production deploy, router/registry change, auth/platform change, Watch Officer
or Nav Desk work is approved by this QA pass.

## Scope

QA report-only confirmation.

Changed by QA:

- `content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md`

QA did not edit runtime/API/UI/content/tool files after implementation.

## Sources Reviewed

- `content/captain-ether/roles/director-engineer/reports/director-analysis-next-summit-2026-05-28.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md`
- `content/captain-ether/roles/qa/reports/english-native-hidden-stream-integration-contract-qa-review-2026-05-27.md`
- changed API and smoke files from the implementation report.

## Command Results

Validator command:

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
PASS
```

Validator confirmed:

- starter items: `255`;
- regression QA items: `255`;
- Batch 006 items: `35`;
- Batch 006 status: `draft_internal`;
- Batch 006 should-accept rows: `105`;
- Batch 006 should-reject rows: `167`.

Known non-blocking validator warnings:

```text
WARN (9) duplicate accepted_answers after normalization
```

API smoke command:

```text
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
PASS captain-ether-api-smoke checks=271
```

Patch hygiene:

```text
git diff --check
PASS
```

## PASS / FAIL By Block

| Block | Result | Evidence |
| --- | --- | --- |
| Legacy default remains `ru_source` | PASS | API smoke covers default beginner/intermediate/advanced and legacy branch/module ignored cases. |
| Existing mixed and focused branch behavior | PASS | API smoke covers mixed, explicit mixed, focused `core_radio`, `marina_harbour`, `navigation_reports`, and `safety_securite`. |
| UI locale does not select stream | PASS | `public/assets/app.js` was not changed; watch start payload remains level-only for visible UI. |
| Invalid stream no mutation | PASS | API smoke covers `400 invalid_learner_stream` with storage hash unchanged. |
| Non-admin English-native gate | PASS | API smoke covers `403 learner_stream_unavailable` with storage hash unchanged. |
| Admin English-native start | PASS | API smoke covers beginner and advanced English-native admin watches. |
| Batch 006-only selection | PASS | API smoke verifies selected English-native ids start with `EN-B006-`, are absent from `starter.json`, and exclude `EN-B006-REV-*`. |
| Stored stream source of truth | PASS | API smoke verifies submit and finish keep English-native stream despite client-supplied `ru_source`. |
| Source prompt reject | PASS | API smoke verifies English-native source prompt answer remains wrong. |
| Dangerous natural-English reject | PASS | API smoke verifies `repeat` for `EN-B006-CORE-001` remains wrong. |
| Progress stream scope | PASS | API smoke verifies `progress.php?learner_stream=english_native` reports English-native state. |
| Lost Oars stream scope | PASS | API smoke verifies English-native Lost Oars do not appear in omitted legacy Lost Oars. |
| Resolve stream scope | PASS | API smoke resolves English-native Lost Oar by explicit stream. |
| Answer-log default `all` | PASS | API smoke verifies omitted answer-log filter is `all`. |
| Answer-log English-native filter | PASS | API smoke verifies English-native filter returns only English-native entries/groups. |
| `player_hash` policy | PASS | API smoke verifies `player_hash` appears in admin answer-log and is forbidden from player-facing payload checks. |
| Storage backup/restore | PASS | API smoke backs up/restores legacy and stream storage names. |

## Failures

No failures found.

Severity: none.

Reproduction steps: N/A.

## Privacy Review

PASS.

Smoke checks cover absence of these forbidden player-facing keys:

- `accepted_answers`
- `qa_notes`
- raw `user_id`
- `email`
- `token`
- `csrf`
- `cookie`
- `session_id`
- `player_hash`

Admin answer-log may include `player_hash` by Director decision. The smoke
keeps raw identity, session, CSRF, cookie, email, and secret fields forbidden.

No secrets, login codes, SMTP data, `.netrc`, private config, player email, raw
player identity, API keys, tokens, passwords, or FTP credentials were written to
this report.

## Localization Impact

PASS / N/A for this QA.

No visible UI copy changed. UI locale remains separate from learner stream.
English-native is not selected by English UI locale or unsupported-locale
fallback.

## Owner Route

- Director-Engineer may accept `TASK-CE-0018` as PASS and close
  `CE-SPRINT-0017`.
- No Content Producer or Sea Speak Linguist follow-up is required by this QA.
- Future public selector work requires a separate UX/Localization/API task.
- Production deploy requires a separate Game Director deploy task.

## Copy-Ready Handoff

TASK-CE-0018 done. QA PASS for hidden/admin-only English-native stream. Local
validator PASS with known `WARN (9)`, API smoke PASS with `checks=271`, and
`git diff --check` PASS. The implementation preserves legacy RU-source default,
keeps Batch 006 separate from `starter.json`, gates English-native to admin,
scopes progress/Lost Oars/answer-log by stream, treats omitted admin answer-log
stream as `all`, and allows `player_hash` only in admin answer-log.

