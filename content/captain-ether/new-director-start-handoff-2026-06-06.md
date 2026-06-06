# Captain Ether New Director Start Handoff

Date: 2026-06-06
Repository: `git@github.com:vetus-nauta/captain-ether.git`
Local WebStorm path on current machine: `/home/alexey/WebstormProjects/captain-ether`
Production route: `https://game.brkovic.ltd/games/captain-ether`
Status: `LOCAL_GITHUB_RC_READY_PRODUCTION_SYNC_NOT_RUN`

## 1. Read This First

This is the current start file for the next Captain Ether director/chat.

Do not restart from older batch handoffs or re-plan the course from zero. The active big task was CE-0196 and it has reached local/GitHub release-candidate readiness.

The correct operating rule is:

```text
Captain Ether only.
Do not touch Watch Officer, Nav Desk, other games, shared auth/platform/router, production config, Atlas secrets, player email/session data, or WebStorm DB console files unless a separate explicit task says so.
```

## 2. Current Git State To Expect

Expected after clone or pull:

```text
branch=main
head=8c19992 captain-ether: record ce0196g release candidate qa
origin_parity=0 0
working_tree=clean
```

Recent commits:

```text
8c19992 captain-ether: record ce0196g release candidate qa
0858d46 captain-ether: implement ce0196f summary simplification
fab3aae captain-ether: implement ce0196e semantic soft acceptance
d6e359e captain-ether: implement ce0196d stage zero routing
509b20d captain-ether: implement ce0196c active watch hud
```

## 3. Last Active Big Task

Last active big task:

```text
CE-0196 Big Implementation Sprint
```

Final status:

```text
CE-0196A pre-code baseline: PASS
CE-0196B first-run funnel: implemented, QA PASS, pushed
CE-0196C active watch HUD: implemented, QA PASS, pushed
CE-0196D Stage 0 beginner routing: implemented, QA PASS, pushed
CE-0196E semantic soft acceptance: implemented, QA PASS, pushed
CE-0196F progression summary simplification: implemented, QA PASS, pushed
CE-0196G release-candidate QA: PASS, pushed
```

Release-candidate decision:

```text
local_github_release_candidate=READY
production_sync_task=REQUIRES_EXPLICIT_AUTHORIZATION
production_deploy_status=NOT_RUN
```

## 4. What Changed In CE-0196

CE-0196B:

```text
Dedicated Captain Ether first-run screen.
First-watch login intent is preserved.
Intermediate/advanced choices are secondary for new users.
OTP input and accessible status lines improved.
```

CE-0196C:

```text
Answer button has busy/disabled behavior.
Double-submit guard added.
Final answer feedback is held before summary.
Question/answer card logic is clearer.
Right rail partner placeholder is desktop/tablet only.
```

CE-0196D:

```text
1000 starter items now have learning metadata.
Stage 0 beginner first-session pool has 43 items.
First beginner mixed watch is filtered to safe Stage 0 items.
Validator and API smoke protect against Stage 0 leakage.
```

CE-0196E:

```text
Deterministic item-local semantic soft acceptance added.
New match_type=understood_non_standard.
New reason=soft_accept.
Soft accepted answers score at 80%.
Examples covered: bring first aid; clearance/guest pier user session case.
Danger boundaries remain protected.
```

CE-0196F:

```text
Finish summary now has soft_accept counter.
Debrief exposes primary_action, secondary_action, recommendation_copy_key, evidence.
Player UI hides technical pressure maps.
Summary has one clear main action and no duplicate revision CTA.
```

## 5. Current QA Baseline

Latest full RC QA passed:

```text
Captain Ether public/api PHP lint: PASS
private/bootstrap.php PHP lint: PASS
Captain Ether tools PHP lint: PASS
public/assets/app.js node --check: PASS
starter.json parse: PASS
accept-reject-qa-pairs.json parse: PASS
git diff --check: PASS
validator: PASS
API smoke: PASS captain-ether-api-smoke checks=347
```

Validator expected counts:

```text
starter_items=1000
grammar_patterns=581
qa_items=1000
should_accept=1943
should_soft_accept=5
should_reject=3032
dangerous_pairs=243
danger_must_accept=821
danger_must_reject=1789
stage0_allowed=43
stage0_bad_runs=0
```

## 6. Next Sequential Actions

If the Director wants to continue toward release:

```text
1. Confirm local/GitHub sync.
2. Run RC QA again locally.
3. If and only if Director explicitly authorizes production sync, run a separate Captain Ether production-sync task.
4. After production sync, run production smoke.
5. Authenticated production watch smoke remains a separate access-gated QA task requiring an approved QA login/session.
```

Do not combine production sync with unrelated implementation.

If the Director does not authorize production sync:

```text
1. Hold local/GitHub RC.
2. Run manual local browser QA.
3. Record any player-facing findings as a new implementation sprint after CE-0196, not as a rewrite of CE-0196.
```

## 7. GitHub-Only Local Bootstrap On Another PC

A second machine with GitHub access only can recreate the local development copy.

Prerequisites:

```text
git
PHP 8.1+ recommended
Node.js for JS syntax checks
```

Clone:

```sh
git clone git@github.com:vetus-nauta/captain-ether.git
cd captain-ether
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

Create local config from the committed example:

```sh
cp private/config.example.php private/config.php
```

Keep `private/config.php` local only. It is ignored by Git and must not be pushed.

Prepare writable storage:

```sh
mkdir -p storage
[ -f storage/.gitkeep ] || touch storage/.gitkeep
```

Run local site:

```sh
php -S 127.0.0.1:18110 -t public
```

Open:

```text
http://127.0.0.1:18110/
http://127.0.0.1:18110/games/captain-ether
```

Local email-code behavior:

```text
In local mode, the request-code endpoint may return the development code in JSON. Do not use this behavior in production.
```

Local QA commands:

```sh
php -l private/bootstrap.php
find public/api/captain-ether -name '*.php' -print | sort | xargs -n1 php -l
find content/captain-ether/tools -name '*.php' -print | sort | xargs -n1 php -l
node --check public/assets/app.js
php content/captain-ether/tools/validate-captain-ether.php --runs=30
CAPTAIN_ETHER_PHP=$(command -v php) php content/captain-ether/tools/smoke-start-watch-api.php
```

Expected:

```text
validator PASS
API smoke PASS captain-ether-api-smoke checks=347
```

## 8. Returning To This WebStorm Machine Later

When returning to `/home/alexey/WebstormProjects/captain-ether`, first check sync before editing:

```sh
cd /home/alexey/WebstormProjects/captain-ether
git status --short --branch
git fetch origin
git rev-list --left-right --count HEAD...origin/main
git log --oneline -5
```

Interpretation:

```text
0 0 = WebStorm local repo and GitHub are synchronized.
0 N = local WebStorm is behind GitHub; pull before editing.
N 0 = local WebStorm has commits not pushed; inspect before continuing.
N M = divergent; stop and resolve deliberately, do not reset hard.
```

Safe update when local tree is clean and behind only:

```sh
git pull --ff-only origin main
```

Never run destructive reset/checkout to force sync unless Director explicitly approves it.

## 9. Files To Read Before Work

Read in this order:

```text
content/captain-ether/new-director-start-handoff-2026-06-06.md
content/captain-ether/new-chat-start-package-2026-06-03-batch-019-023-engineering-gated.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0196g-release-candidate-qa-2026-06-06.md
```

## 10. Non-Negotiable Boundaries

Do not commit or expose:

```text
private/config.php
storage runtime data
sessions/cookies/CSRF values
login codes
player email or identity
Atlas secrets
SMTP credentials
production secrets
```

Do not touch:

```text
Watch Officer
Nav Desk
other games
shared router/platform registry
auth architecture
production deployment scripts except in explicit production-sync task
```
