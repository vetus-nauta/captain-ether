# CE-SPRINT-0191A Main Course And Runtime Finalization

Date: 2026-06-04
Owner: Director-Engineer / QA
Scope: Captain Ether main-course content closure and runtime/API/production parity reconfirmation
Status: PASS / INTERNAL_100_AUTH_EXTERNAL_BLOCKER

## Purpose

Close the remaining internal work behind these estimates:

```text
content_and_main_course=97_percent_before_this_gate
runtime_api_production_parity=95_percent_before_this_gate
```

This task is read-only for production and does not implement gamification,
change runtime logic, or touch any non-Captain Ether game.

## Source State

```text
branch=main
local_github_sync=0 0
head_before_report=095cf5143835bdfa661dc5142b3b53a3f1d6e345
starter_items=1000
grammar_patterns=581
qa_items=1000
dangerous_pairs=243
```

## Local Content Regression

Command:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
```

Result:

```text
validator=PASS
starter_items=1000
grammar_patterns=581
qa_items=1000
should_accept=1943
should_reject=3032
dangerous_pairs=243
danger_must_accept=821
danger_must_reject=1789
watch_selection_beginner_bad_runs=0
watch_selection_intermediate_bad_runs=0
watch_selection_advanced_bad_runs=0
```

Inventory cross-check:

```text
course_inventory=PASS
missing_qa=0
extra_qa=0
non_006_draft_backlog=0
unexpected_unmerged_batches=0
batch_006_status=draft_internal_by_design
```

Decision:

```text
content_and_main_course_internal_status=100_PERCENT_INTERNAL_CLOSED
```

## Local Runtime/API Regression

Command:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
api_smoke=PASS captain-ether-api-smoke checks=334
```

PWA/i18n static contract:

```text
pwa_i18n=PASS
locales=7
ui_keys=233
games=3
detection_cases=15
```

## Production FTP Parity

Read-only FTP round-trip compared local files against production copies under
`/game.brkovic.ltd`. No deployment was performed.

```text
starter_json_match=PASS hash=a2a4865e15e6ed575d81533a85515821e2318be00c1397412b832ee2b4d31fb1
qa_pairs_json_match=PASS hash=0e02ec67cfedfd70831322520d4eeb11752c489b311bed57c89a03b8074b74e6
app_js_match=PASS hash=f7decab6bb90bc0b733f8171bc3c45aa7f4d5f0f8d9916582182412ab0e5b399
app_css_match=PASS hash=9f1f0e5acb7934cb6019745c72dceb4e4a4f622d83e1b20748b6d0f30b0de982
service_worker_match=PASS hash=5ac703505a5025e1e41f76dd2396313bb6c1e40f07f05669359e6b8686c8a7f1
manifest_match=PASS hash=20e1a441cc62b7b7b0d8efd53d2d4389cc51c10feacf4c9fb9e0a85f20f07184
captain_ether_api_files_match=PASS
```

API files matched:

```text
_answer-logging.php
_answer-matching.php
_learner-streams.php
answer-log.php
finish-watch.php
lost-oars.php
progress.php
resolve-lost-oar.php
skip-cleanup.php
start-watch.php
submit-answer.php
```

## Production HTTP Smoke

```text
GET /games/captain-ether -> HTTP 200 bytes=2443
GET /assets/app.js -> HTTP 200 bytes=91564
GET /assets/app.css -> HTTP 200 bytes=20386
GET /service-worker.js -> HTTP 200 bytes=1028
GET /manifest.webmanifest -> HTTP 200 bytes=945
GET /api/games/registry.php -> HTTP 200 bytes=2201
GET /api/auth/me.php -> HTTP 200 bytes=23
cache_control=no-store_no-cache_must-revalidate_max-age_0
```

Direct HTTP reads of `/content/captain-ether/*.json` return the public route
shell in this deployment. Runtime source checked in this task does not use that
path; production content parity is therefore verified by FTP read-back, matching
the previous accepted production-sync gates.

## Protected API Guards

Anonymous production checks:

```text
POST /api/captain-ether/start-watch.php -> HTTP 401 Login required
POST /api/captain-ether/submit-answer.php -> HTTP 401 Login required
POST /api/captain-ether/finish-watch.php -> HTTP 401 Login required
POST /api/captain-ether/resolve-lost-oar.php -> HTTP 401 Login required
POST /api/captain-ether/skip-cleanup.php -> HTTP 401 Login required
GET /api/captain-ether/progress.php -> HTTP 401 Login required
GET /api/captain-ether/answer-log.php -> HTTP 401 Login required
GET /api/captain-ether/lost-oars.php -> HTTP 401 Login required
```

## Production Atlas Gate

Command:

```sh
sh tools/captain-ether-production-atlas-ping.sh
```

Result:

```text
ok=true
mirror_enabled=true
live_read_enabled=true
primary_write_enabled=true
node_probe.node_exists=true
node_probe.driver_exists=true
node_probe.proc_open_exists=true
node_probe.ping_ok=true
exit_code=0
```

The deeper Atlas parity verifier was not run because the local shell lacks the
required `DRIVER_PATH`, `URI`, and `STORAGE_ROOT` environment values. The
production ping script passed and did not expose secrets.

## Public Payload Privacy

```text
public_dynamic_privacy_scan=PASS files=5
public_source_secret_value_scan=PASS bytes=91564
```

A broad first-pass grep against `app.js` matched expected UI/source identifiers
such as `auth.email`, `state.csrf`, and localized email-login copy. That was
classified as a false positive because it did not expose login codes, session
values, CSRF values, tokens, passwords, player email, Atlas URI, or player
identity data. The follow-up high-signal value scan passed.

## Closure Decision

```text
content_and_main_course=100_PERCENT_INTERNAL_CLOSED
runtime_api_production_parity=100_PERCENT_INTERNAL_CLOSED
authenticated_browser_watch_smoke=STILL_BLOCKED_BY_APPROVED_QA_ACCESS
release_truth=INTERNAL_100_AUTH_EXTERNAL_BLOCKER
```

Captain Ether's main-course content and unauthenticated/runtime/production-parity
surface are closed for the current 1000-item scope. The only remaining blocker
for a fully honest release `100%` is an approved authenticated production QA
session to run the real browser watch smoke without bypassing auth or inspecting
private player/session data.

## Scope Preserved

No production deploy, content mutation, matcher change, API/runtime change,
UI/assets change, Atlas data mutation, auth behavior change, router/registry
change, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, or foreign database was changed.
