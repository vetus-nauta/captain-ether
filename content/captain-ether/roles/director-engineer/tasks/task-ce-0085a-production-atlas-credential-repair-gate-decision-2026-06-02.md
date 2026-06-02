# TASK-CE-0085A Production Atlas Credential Repair / Gate Decision

Date: 2026-06-02
Owner: Director-Engineer / Platform owner as needed
Scope: Captain Ether production deploy gate
Status: DONE

## Objective

Unblock the Captain Ether production parity deploy by making the mandatory
production Atlas ping gate pass again, or by recording an explicit owner-approved
exception to deploy static/API/content while Atlas ping remains blocked.

## Starting Evidence

`CE-SPRINT-0082` stopped before production upload because:

```text
mirror_enabled=true
live_read_enabled=true
primary_write_enabled=true
node_probe.node_exists=true
node_probe.driver_exists=true
node_probe.proc_open_exists=true
node_probe.ping_ok=false
failure_class=MongoDB authentication failed
```

## Boundaries

Do not overwrite production-only files from local.

Do not change or upload:

```text
private/config.php from local
/home/brkovic/private/captain-ether-atlas.php from local
/home/brkovic/game.brkovic.ltd/private/node_modules/mongodb
content/game-registry.json from local
Watch Officer
Nav Desk
hub/router
platform auth
```

## Allowed Work

Allowed:

- inspect production-safe config paths without exposing secret values in reports;
- verify that production config points to the server-only Atlas secret file;
- repair the server-only Atlas credential only if authorized by the owner;
- rerun `tools/captain-ether-production-atlas-ping.sh`;
- record the result in a report.

## Success Criteria

Preferred success:

```text
tools/captain-ether-production-atlas-ping.sh
node_probe.ping_ok=true
```

Alternative success only with explicit owner decision:

```text
Atlas ping exception approved for one narrow Captain Ether static/API/content deploy.
Reason and rollback conditions recorded before upload.
```

## Next Expected Gate

After this task passes, continue with:

```text
CE-0085 Controlled Production Deploy
CE-0086 Post-Deploy Closure / GitHub Sync
```
