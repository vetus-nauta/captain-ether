# Captain Ether: стартовый handoff для нового директора

Дата: 2026-06-02
Роль: Director Ether / Captain Ether Director
Рабочий репозиторий: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Боевой домен: `https://game.brkovic.ltd/games/captain-ether`

## 1. Первое правило

Ты работаешь в проекте `captain-ether`.

Не лезь в `brkovic-ltd` как в отдельный продукт Captain Ether. `brkovic.ltd`
и `game.brkovic.ltd` здесь являются общей доменной/платформенной средой.
Второй игровой проект в этом домене - `watch_officer`. Он не является твоей
областью работы без отдельной задачи.

Не трогай без отдельного явного задания:

- Watch Officer;
- Nav Desk;
- общий router/hub;
- platform auth;
- production config;
- FTP/deploy;
- Atlas secrets;
- чужие базы и проекты.

Правильный Atlas-кластер для Captain Ether: `game-prod-01`.
Не путать с базами/кластерами другого проекта.

WebStorm-контекст: проект должен быть открыт как:

```text
/home/alexey/WebstormProjects/captain-ether
```

Файл `console.js` из WebStorm DB Console - это контекст IDE-консоли, а не
исходник игры и не источник правды.

## 2. Где финал

Финальная цель ближайшей большой дуги:

```text
Captain Ether должен стать стабильной публичной тренировочной игрой Sea Speak
на game.brkovic.ltd с синхронными local / GitHub / production состояниями,
Atlas game-prod-01 как рабочей runtime-базой, проверенным auth flow,
ответными логами, прогрессом игрока и широкой учебной базой 1000+ items.
```

Текущий крупный roadmap:

- M1: 100 playable items - пройдено.
- M2: 250 playable items - пройдено.
- M3: 500 playable items - пройдено локально и в GitHub.
- M4: 1000 playable items - следующий контентный этап, но начинать его нельзя,
  пока не закрыта production parity/deploy-scope задача.

Финальная инженерная планка:

- local validator PASS;
- local auth parity PASS;
- local API smoke PASS;
- GitHub `main` синхронен с локальным `main`;
- production route отвечает 200;
- production shell/assets/API/content соответствуют GitHub;
- production Atlas ping PASS:
  `mirror_enabled=true`, `live_read_enabled=true`,
  `primary_write_enabled=true`, `node_probe.ping_ok=true`;
- production auth/watch smoke PASS.

## 3. Где мы сейчас

На 2026-06-02 локал и GitHub находятся на стабильной M3-базе:

```text
starter_items=500
grammar_patterns=163
scenarios=2
qa_items=500
should_accept=1216
should_reject=1518
dangerous_minimal_pairs=116
```

Разбивка playable corpus:

```text
word=100
short_expression=157
phrase=243

beginner=182
intermediate=229
advanced=89

(missing legacy branch)=40
core_radio=50
marina_harbour=50
navigation_reports=50
safety_securite=40
urgency_panpan=55
traffic_collision=50
vts_port_control=50
onboard_operations=50
distress_mayday=50
review_minimal_pairs=15
```

Последние закрытые спринты:

```text
CE-SPRINT-0079 Batch 012 Post-Merge QA: PASS
CE-SPRINT-0080 Local Runtime Parity Check: PARTIAL PASS, found PHP filter blocker
CE-SPRINT-0081 Local PHP Auth Parity Pass: PASS, blocker fixed
```

Последний GitHub-синхронный коммит перед этим handoff:

```text
1f5baf1 captain-ether: close local php auth parity
```

Проверка `git rev-list --left-right --count HEAD...origin/main` перед этим
handoff давала:

```text
0 0
```

## 4. Что уже сделано

Контент и QA:

- Batch 001-005 merged/playable.
- Batch 006 English-native Sea Speak pilot принят только как hidden/internal,
  не публичный playable stream.
- Batch 007 Traffic / Collision merged и QA accepted.
- Batch 008 VTS / Port Control merged и QA accepted.
- Batch 009 Onboard Operations merged и QA accepted.
- Batch 010 Distress / Mayday merged и QA accepted.
- Batch 011 Review Minimal Pairs merged и QA accepted.
- Batch 012 Urgency Equipment Status merged и QA accepted.
- M3 target `500` playable items достигнут локально.

Runtime/API:

- Auth endpoints существуют: request-code, verify-code, me, logout,
  ecosystem-login.
- Captain Ether API существует: start-watch, submit-answer, finish-watch,
  progress, weak/lost-oar endpoints, answer-log.
- Runtime читает playable content из:
  `content/captain-ether/starter.json`.
- Local auth parity закрыт: request-code -> verify-code -> auth/me ->
  authenticated start-watch with CSRF.

Atlas:

- Atlas runtime mirror/live-read/primary-write implementation slices закрыты
  ранее.
- Production deploy rule зафиксирован:
  `docs/game-director/captain-ether-atlas-production-deploy-rule-2026-05-31.md`.
- Production secret file нельзя перезаписывать:
  `/home/brkovic/private/captain-ether-atlas.php`.
- Production Atlas driver нельзя перезаписывать:
  `/home/brkovic/game.brkovic.ltd/private/node_modules/mongodb`.

Локальное PHP-окружение:

- Локальный PHP:
  `/home/alexey/.local/php-codex/bin/php`.
- Добавлен runtime extension:
  `/home/alexey/.local/php-codex/lib/php/extensions/no-debug-non-zts-20250925/filter.so`.
- Добавлен локальный php.ini:
  `/home/alexey/.local/php-codex/lib/php.ini`.
- `filter_var()` теперь доступен без ручного `-d extension=...`.

## 5. Что не совпадает сейчас

На 2026-06-02 local/GitHub и production НЕ бьются полностью.

Публичный route живой:

```text
https://game.brkovic.ltd/games/captain-ether -> HTTP 200
https://game.brkovic.ltd/assets/app.js -> HTTP 200
https://game.brkovic.ltd/api/games/registry.php -> HTTP 200
```

Но production shell/assets/registry отличаются от local:

```text
local /games/captain-ether html: 2443 bytes
prod  /games/captain-ether html: 2545 bytes

local /assets/app.js: 91564 bytes
prod  /assets/app.js: 32995 bytes

local /api/games/registry.php response: 1423 bytes, 3 games
prod  /api/games/registry.php response: 2201 bytes, 4 games
```

Registry difference:

```text
local games:
- captain_ether active
- wind_rider planned
- mystic_boatswain planned

prod games:
- captain_ether active
- watch_officer prototype
- wind_rider planned
- mystic_boatswain planned
```

Local and production hashes also differ for route html, `app.js`, and registry
JSON. Therefore the current correct statement is:

```text
Local/GitHub is current. Production is reachable but behind or divergent.
Do not claim production parity until a separate CE-0082 parity/deploy-scope
task is completed.
```

Important deploy risk:

```text
tools/captain-ether-production-deploy.sh currently uploads private/bootstrap.php,
private/config.php, private/config.example.php, atlas example, and selected
public/api/captain-ether/*.php files.
```

It does not currently upload all files needed to make production equal to
local/GitHub, especially:

- `public/index.html`;
- `public/assets/app.js`;
- `public/assets/app.css`;
- `public/service-worker.js`;
- `public/manifest.webmanifest`;
- `content/captain-ether/starter.json`;
- `content/captain-ether/accept-reject-qa-pairs.json`;
- possibly registry/hub files depending on approved scope.

Do not run deploy blindly. First create/close the deploy-scope decision.

## 6. Что делать следующим

Следующая правильная большая задача:

```text
CE-SPRINT-0082 Production Parity / Deploy Scope Decision
```

Цель:

```text
Свести local / GitHub / production для Captain Ether без повреждения Watch
Officer, hub registry, platform auth, Atlas secrets и production-only files.
```

Порядок работы:

1. Составить точный список файлов, которые должны быть на production для
   Captain Ether M3 500-item baseline.
2. Сравнить local/GitHub с production по shell/assets/API/content.
3. Обновить или создать deploy script так, чтобы он покрывал Captain Ether
   scope и не затирал production-only секреты.
4. Перед deploy прогнать локально:
   - PHP lint;
   - JS syntax;
   - validator;
   - API smoke;
   - local auth parity.
5. Только после отдельного разрешения на production deploy запускать deploy.
6. После deploy обязательно:
   - route smoke;
   - asset hash/size check;
   - API registry smoke;
   - auth/me smoke;
   - production Atlas ping;
   - production auth/watch smoke если есть тестовый доступ.
7. Зафиксировать отчет и только потом переходить к M4 content/design.

После CE-0082 можно идти в M4:

- увеличить corpus с 500 до 1000+;
- добавить SAR, restricted manoeuvrability, route/voyage contexts,
  pilotage, repair/emergency operations;
- расширить scenario turns;
- продолжать minimal-pair safety QA;
- улучшить UX прогресса и answer-log review.

## 7. Команды первой проверки

Работать только отсюда:

```sh
cd /home/alexey/WebstormProjects/captain-ether
```

GitHub sync:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
git log -5 --oneline
```

Локальный PHP:

```sh
$HOME/.local/php-codex/bin/php -m | sort | grep filter
$HOME/.local/php-codex/bin/php -r 'var_dump(function_exists("filter_var"));'
```

Локальная валидация:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-012-urgency-equipment-status-reinforcement.json
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
node --check public/assets/app.js
find public/api -maxdepth 2 -type f -name '*.php' -print | sort | xargs -n1 $HOME/.local/php-codex/bin/php -l
```

Локальный сайт:

```sh
$HOME/.local/php-codex/bin/php -S 127.0.0.1:18110 -t public
```

Если `18110` уже занят, не убивать чужой процесс без причины. Использовать
временный соседний порт для проверки.

Production read-only smoke:

```sh
curl -sS -L -D /tmp/ce-prod-root.headers https://game.brkovic.ltd/games/captain-ether -o /tmp/ce-prod-root.html
curl -sS -L -D /tmp/ce-prod-app.headers https://game.brkovic.ltd/assets/app.js -o /tmp/ce-prod-app.js
curl -sS -D /tmp/ce-prod-registry.headers https://game.brkovic.ltd/api/games/registry.php -o /tmp/ce-prod-registry.json
```

Production Atlas ping command exists, but run it only inside an explicit
production parity/deploy task:

```sh
tools/captain-ether-production-atlas-ping.sh
```

Deploy command exists, but do not run it until CE-0082 deploy-scope decision is
written and accepted:

```sh
tools/captain-ether-production-deploy.sh
```

## 8. Документы, которые читать первыми

Read first:

```text
content/captain-ether/new-director-start-handoff-2026-06-02.md
content/captain-ether/roles/director-engineer/handoff.md
content/captain-ether/director-ether-beta-1-handoff-2026-05-27.md
content/captain-ether/content-growth-roadmap-1000.md
docs/game-director/mandatory-chat-operating-rules.md
docs/game-director/chat-reporting-rules.md
docs/game-director/captain-ether-atlas-production-deploy-rule-2026-05-31.md
```

Latest closure reports:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0079-batch-012-post-merge-qa-accepted-2026-06-01.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0080-local-runtime-parity-2026-06-01.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0081-local-php-auth-parity-pass-2026-06-01.md
```

## 9. Как отчитываться владельцу

Пользователь хочет короткий человеческий отчет на русском после каждого
спринта:

```text
что сделал
что проверил
что не трогал
какой статус GitHub/local/production
какая следующая задача
```

Не давать длинную простыню в чат, если полный отчет уже записан в файл.
Не обещать production parity, если production не проверен или отличается.
