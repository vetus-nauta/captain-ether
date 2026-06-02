# Captain Ether New Chat Start Package

Date: 2026-06-03
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Batch 018 production synced; Batch 019-023 linguist-reviewed and engineering-gated

## 1. Read This First

This file is the canonical start point for the next chat.

It supersedes older start handoff files that mention only Batch 018 production
sync, pre-production parity, `500` local items, or production drift. Those files
are historical context only.

The attached WebStorm DB console path, if present, is IDE context only:

```text
/home/alexey/.var/app/com.jetbrains.WebStorm/config/JetBrains/WebStorm2026.1/consoles/db/5ab18e59-79c1-4271-8a91-1c33f72072f1/console.js
```

Do not treat that `console.js` file as Captain Ether source code or product
state.

## 2. Current Playable State

Production/local/GitHub playable baseline remains Batch 018:

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

Production was not touched during Batch 019-023 draft/review/gate work.

## 3. Current Draft Backlog

Batch 019-023 are not merged into playable content. They are reviewed and passed
engineering gate for QA acceptance.

```text
Batch 019 status=linguist_reviewed, items=30, grammar_patterns=27, dangerous_pairs=8
Batch 020 status=linguist_reviewed, items=50, grammar_patterns=47, dangerous_pairs=13
Batch 021 status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7
Batch 022 status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7
Batch 023 status=linguist_reviewed, items=30, grammar_patterns=30, dangerous_pairs=6
```

Combined draft backlog:

```text
draft_backlog_items=180
draft_backlog_grammar_patterns=174
draft_backlog_qa_items=180
draft_backlog_dangerous_pairs=41
draft_should_accept=299
draft_should_reject=540
```

If Batch 019-023 later pass QA and merge, expected playable baseline:

```text
starter_items: 650 -> 830
grammar_patterns: 237 -> 411
qa_items: 650 -> 830
dangerous_pairs: 152 -> 193
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
```

Important reports:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0140-batch-019-023-combined-engineering-gate-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0139-batches-021-023-vocabulary-expansion-summary-2026-06-03.md
```

## 5. Current Next Task

Next task to run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0141-batch-019-023-combined-acceptance-qa-2026-06-03.md
```

Goal:

```text
QA acceptance for Batch 019-023 before any merge into starter.json.
```

No merge or production deploy is authorized until QA returns:

```text
PASS_FOR_MERGE
```

## 6. Recommended Merge Plan After QA

Do not merge all 180 draft items in one step unless explicitly requested.

Recommended sequence:

```text
1. QA acceptance for Batch 019-023.
2. Merge Set A: Batch 019+020, 80 items.
3. Post-merge QA Set A.
4. Production sync Set A.
5. Merge Set B: Batch 021+022+023, 100 items.
6. Post-merge QA Set B.
7. Production sync Set B.
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
