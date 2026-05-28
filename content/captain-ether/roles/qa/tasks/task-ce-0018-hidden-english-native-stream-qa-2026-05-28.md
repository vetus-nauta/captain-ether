# QA Task: TASK-CE-0018 Hidden English-Native Stream QA

Date: 2026-05-28

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start this task only after `TASK-CE-0017` implementation report exists:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
```

## Mandatory First Read

Before testing, read:

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/director-ether-beta-1-handoff-2026-05-27.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-next-summit-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0017-hidden-english-native-stream-2026-05-28.md
content/captain-ether/roles/director-engineer/reports/task-ce-0017-hidden-english-native-stream-implementation-2026-05-28.md
content/captain-ether/roles/qa/reports/english-native-hidden-stream-integration-contract-qa-review-2026-05-27.md
```

Then read the changed files listed in the implementation report.

## Functional Duty

QA tests and reports only.

QA verifies whether the hidden/admin-only English-native stream implementation
meets the Director-approved contract and does not regress the existing
RU-source Captain Ether flow.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

## Forbidden Files

Do not edit:

```text
content/captain-ether/starter.json
content/captain-ether/batches/
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/tools/
public/api/captain-ether/
public/assets/
docs/game-director/
private/
storage/
```

Do not touch router, registry, Nav Desk, Watch Officer, auth/platform files,
production config, deploy state, `.netrc`, SMTP, cookies, login codes, player
email, raw player identity, FTP credentials, API keys, tokens, passwords, or
other secrets.

## Exact Task

Run local QA for the `TASK-CE-0017` hidden stream implementation.

Verify these blocks:

1. Legacy default remains `ru_source`.
2. Existing mixed and focused-branch watches still pass.
3. `locale === "en"` and unsupported UI fallback do not select
   `english_native`.
4. Invalid stream returns `400 invalid_learner_stream` with no mutation.
5. Non-admin English-native start returns `403 learner_stream_unavailable` with
   no mutation.
6. Admin English-native start succeeds.
7. English-native watches select only Batch 006 `draft_internal` items.
8. Batch 006 remains outside `starter.json`.
9. `submit-answer` and `finish-watch` ignore client-supplied stream and use the
   stored watch stream.
10. Canonical Batch 006 accepts pass.
11. Source-prompt-as-answer rejects remain wrong.
12. Dangerous natural-English rejects remain wrong.
13. Wrong English-native answers create only English-native Lost Oars.
14. RU-source Lost Oars do not appear in English-native review.
15. English-native Lost Oars do not appear in omitted legacy `ru_source` review.
16. `resolve-lost-oar.php` resolves only the requested stream.
17. `skip-cleanup.php` acts on the requested stream.
18. `finish-watch.php` writes history only under the active stream.
19. `progress.php` omitted stream returns legacy `ru_source`.
20. `progress.php?learner_stream=english_native` returns English-native state.
21. `answer-log.php` omitted stream returns admin `all`.
22. `answer-log.php?learner_stream=english_native` returns only English-native
    entries and groups.
23. Answer-log grouping key separates same item ids by stream.
24. `player_hash` appears only in admin answer-log payloads.
25. Player-facing payloads expose no `player_hash`, `accepted_answers`,
    `qa_notes`, raw user id, email, token, CSRF, cookie, session id, login code,
    private config, or secrets.
26. Smoke tool backs up and restores all touched storage.

## Required Commands

Run the implementation report's exact command set. At minimum:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

If `public/assets/app.js` changed in `TASK-CE-0017`, also run:

```sh
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
```

## Expected Output

Create:

```text
content/captain-ether/roles/qa/reports/task-ce-0018-hidden-english-native-stream-qa-2026-05-28.md
```

The report must include:

- task result: PASS, FAIL, or NEEDS DIRECTOR DECISION;
- PASS/FAIL by block;
- exact command results;
- failures with reproduction steps;
- severity;
- owner route;
- confirmation QA was report-only;
- confirmation no forbidden files or secrets were changed.

## Required Short Reply

After writing the report, return:

```text
TASK-CE-0018 done
```

or:

```text
TASK-CE-0018 blocked
```

with the report path.

## Next Expected Gate

Director-Engineer accepts or rejects QA. No production deploy or public selector
decision is implied by QA PASS.

