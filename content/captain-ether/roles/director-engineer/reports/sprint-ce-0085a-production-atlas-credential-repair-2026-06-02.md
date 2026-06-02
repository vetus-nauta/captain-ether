# CE-SPRINT-0085A Production Atlas Credential Repair / Gate Decision

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether production Atlas deploy gate
Status: CLOSED / PASS

## Trigger

`CE-SPRINT-0082` blocked production deploy before upload because the mandatory
production Atlas ping returned:

```text
node_probe.ping_ok=false
failure_class=MongoDB authentication failed
```

## WebStorm Datasource Check

The user-provided WebStorm DB console file was checked:

```text
/home/alexey/.var/app/com.jetbrains.WebStorm/config/JetBrains/WebStorm2026.1/consoles/db/5ab18e59-79c1-4271-8a91-1c33f72072f1/console.js
```

Result:

```text
console.js: empty, 0 bytes
```

The datasource UUID maps to WebStorm datasource:

```text
name=brkovic-game
uuid=5ab18e59-79c1-4271-8a91-1c33f72072f1
cluster=game-prod-01.ay8cdd3.mongodb.net
appName=game-prod-01
server_version=8.0.23
ping_ok=true
```

Read-only database check showed the expected Captain Ether runtime database:

```text
captain_ether.answer_logs=119
captain_ether.profiles=0
captain_ether.progress=2
captain_ether.watch_sessions=282
captain_ether.weak_points=18
```

No database writes were performed during the WebStorm datasource check.

## Production Secret Comparison

The production server-only secret was downloaded for masked comparison only:

```text
/private/captain-ether-atlas.php
```

The file had the expected structure:

```text
atlas_mirror.enabled=true
atlas_live_read.enabled=true
atlas_primary_write.enabled=true
```

Masked hash comparison showed:

```text
same host as WebStorm datasource: true
same appName as WebStorm datasource: true
same URI credential as WebStorm datasource: false
```

This explains the production-only `MongoDB authentication failed` while the
WebStorm datasource itself was healthy.

## Repair Performed

The production server-only secret was updated to use the working WebStorm
`game-prod-01` credential for all three Atlas runtime sections.

Secrets were not printed in chat or committed to the repository.

Backup created before overwrite:

```text
/private/_deploy-backups/captain-ether-atlas/20260602T074005Z/captain-ether-atlas.php
```

Upload verification:

```text
secret_uploaded_and_verified=true
```

## Gate Result

After repair:

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

## Boundaries Preserved

Not changed:

```text
production private/config.php
production Atlas driver
production game registry
Watch Officer
Nav Desk
hub/router
platform auth
```

Changed:

```text
production server-only Atlas secret URI values only
```

## Decision

Captain Ether production deploy gate is unblocked.

Proceed to controlled production deploy using the narrow manifest prepared in
`tools/captain-ether-production-deploy.sh`.
