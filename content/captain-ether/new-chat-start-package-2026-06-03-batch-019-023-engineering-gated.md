# Captain Ether New Chat Start Package

Date: 2026-06-03
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Batch 019-020 synced to production; Batch 021-023 remain staged draft backlog

## 1. Read This First

This file is the canonical start point for the next chat.

It supersedes older start handoff files that mention only Batch 018 production
sync, pre-production parity, `500` local items, or full local/production parity.
Those files are historical context only.

The attached WebStorm DB console path, if present, is IDE context only:

```text
/home/alexey/.var/app/com.jetbrains.WebStorm/config/JetBrains/WebStorm2026.1/consoles/db/5ab18e59-79c1-4271-8a91-1c33f72072f1/console.js
```

Do not treat that `console.js` file as Captain Ether source code or product
state.

## 2. Current Playable State

Local/GitHub/production playable baseline is now Batch 020 after Set A production sync:

```text
starter_items=730
grammar_patterns=311
qa_items=730
dangerous_pairs=173
batch_019_status=merged
batch_020_status=merged
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

Production was synced by CE-0144.

## 3. Current Draft Backlog

Batch 021-023 remain unmerged. They are reviewed, passed engineering gate, and
passed combined acceptance QA for staged merge.

```text
Batch 021 status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7
Batch 022 status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7
Batch 023 status=linguist_reviewed, items=30, grammar_patterns=30, dangerous_pairs=6
```

Combined draft backlog:

```text
draft_backlog_items=100
draft_backlog_grammar_patterns=100
draft_backlog_qa_items=100
draft_backlog_dangerous_pairs=20
draft_should_accept=139
draft_should_reject=300
```

If Batch 021-023 later merge, expected local/GitHub playable baseline:

```text
starter_items: 730 -> 830
grammar_patterns: 311 -> 411
qa_items: 730 -> 830
dangerous_pairs: 173 -> 193
```

## 4. Latest Closed Gates

```text
CE-0128 Batch 018 Production Sync: PASS / PRODUCTION_SYNCED
CE-0129 Batch 019 Draft: DONE
CE-0131 Batch 020 Draft: DONE
CE-0133 Batch 021 Draft: DONE
CE-0135 Batch 022 Draft: DONE
CE-0137 Batch 023 Draft: DONE
CE-0140 Batch 019-023 Combined Engineering Gate: PASS FOR QA ACCEPTANCE
CE-0141 Batch 019-023 Combined Acceptance QA: PASS_FOR_MERGE
CE-0142 Batch 019-020 Merge Set A: MERGED LOCALLY / PASS
CE-0143 Batch 019-020 Post-Merge QA Set A: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0144 Batch 019-020 Production Sync: CLOSED / PASS / PRODUCTION_SYNCED
```

Important reports:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0140-batch-019-023-combined-engineering-gate-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0139-batches-021-023-vocabulary-expansion-summary-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0141-batch-019-023-combined-acceptance-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0142-batch-019-020-merge-set-a-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0143-batch-019-020-post-merge-qa-set-a-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0144-batch-019-020-production-sync-2026-06-03.md
```

## 5. Current Next Task

Next task to run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0145-batch-021-023-merge-set-b-2026-06-03.md
```

Goal:

```text
Merge Set B only: Batch 021+022+023 into local playable content.
```

Expected Set B local increase:

```text
starter_items: 730 -> 830
grammar_patterns: 311 -> 411
qa_items: 730 -> 830
dangerous_pairs: 173 -> 193
```

No production deploy is authorized by CE-0145.

## 6. Recommended Merge Plan After QA

Merge the remaining 100 draft items only as Set B, then run post-merge QA before
any separate Set B production sync task.

Recommended sequence:

```text
1. Merge Set B: Batch 021+022+023, 100 items.
2. Post-merge QA Set B.
3. Production sync Set B, only after explicit production-sync task.
```

This keeps production parity checkpoints small enough to debug.

## 7. Standard Checks

Local validation:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
for b in 019 020 021 022 023; do
  f=$(ls content/captain-ether/batches/batch-${b}-*.json)
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch="$f"
done
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Expected:

```text
validator PASS
batch validators PASS
API smoke PASS captain-ether-api-smoke checks=334
known starter WARN only: WARN (9)
```

Git sync check:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

Expected:

```text
working tree clean
0 0
```

## 8. Hard Boundaries

Do not touch without explicit task:

```text
Watch Officer
Nav Desk
shared hub/router/platform registry
platform auth design
production config
Atlas secret file
Atlas driver
SMTP
sessions/cookies/CSRF behavior
player email or identity data
WebStorm DB console
foreign databases/projects
```

Production deploy script is allowed only in an explicit production sync task:

```sh
tools/captain-ether-production-deploy.sh
```
