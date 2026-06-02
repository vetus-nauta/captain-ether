# CE-SPRINT-0085 Controlled Production Deploy

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether narrow production parity deploy
Status: CLOSED / PASS

## Precondition

`CE-SPRINT-0085A` restored the production Atlas ping gate:

```text
node_probe.ping_ok=true
```

## Deploy Command

Executed:

```text
tools/captain-ether-production-deploy.sh
```

The script uploaded a narrow Captain Ether manifest only and verified each file
through FTP round-trip compare.

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260602T074027Z
```

## Uploaded Manifest

```text
private/bootstrap.php
public/index.html
public/assets/app.js
public/assets/app.css
public/manifest.webmanifest
public/service-worker.js
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json
public/api/captain-ether/_answer-logging.php
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/answer-log.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/progress.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
```

## Explicitly Not Uploaded

```text
production private/config.php
production Atlas secret file
production Atlas driver
content/game-registry.json
public/api/auth/*.php
public/api/games/registry.php
Watch Officer files
Nav Desk files
hub/router files
platform auth files
```

Note: the Atlas secret was repaired in the previous gate task, not by this
deploy script.

## Deploy Result

```text
public shell/assets/content/API were verified by FTP round-trip compare
production registry not touched
production config not touched
production Atlas driver not touched
```

## Decision

Controlled production upload completed successfully. Continue to post-deploy
smoke and parity closure.
