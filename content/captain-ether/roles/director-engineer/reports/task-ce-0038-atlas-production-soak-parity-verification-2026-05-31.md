# TASK-CE-0038 Atlas Production Soak / Parity Verification

Date: 2026-05-31

## Result

PASS with one remaining closure condition.

Live Captain Ether runtime parity is confirmed for the three JSON-shadowed
runtime stores:

- `progress`
- `weak_points`
- `watch_sessions`

`answer_logs` is not parity-confirmed through live JSON shadow because the live
shadow file is absent at the current storage path.

## Verification Surface

Live shadow storage used for this verification:

```text
/home/alexey/GitHub/Revoyacht/brkovic-ltd/game.brkovic.ltd/storage
```

Atlas runtime database verified:

```text
captain_ether
```

Verifier added:

- `content/captain-ether/tools/verify-atlas-runtime-parity.mjs`

## Verification Rule

Parity normalization ignores service-only metadata fields:

- `_id`
- `mirrored_at`
- `migrated_at`
- `migrated_from`
- duplicated key-carrier fields such as `user_id` and `session_id`

Those fields are allowed to differ between JSON shadow storage and Atlas
runtime documents without counting as gameplay drift.

## Command Used

```sh
CAPTAIN_ETHER_ATLAS_VERIFY_DRIVER_PATH='/tmp/mongo-atlas-setup/node_modules/mongodb' \
CAPTAIN_ETHER_ATLAS_VERIFY_URI='<redacted>' \
CAPTAIN_ETHER_ATLAS_VERIFY_DATABASE='captain_ether' \
CAPTAIN_ETHER_ATLAS_VERIFY_STORAGE_ROOT='/home/alexey/GitHub/Revoyacht/brkovic-ltd/game.brkovic.ltd/storage' \
node content/captain-ether/tools/verify-atlas-runtime-parity.mjs
```

## Output Summary

- `progress`: `json_users=6`, `mongo_users=6`, `parity=true`
- `weak_points`: `json_users=2`, `mongo_users=2`, `parity=true`
- `watch_sessions`: `json_sessions=19`, `mongo_sessions=19`, `parity=true`
- `answer_logs`: `json_present=false`, `mongo_entries=0`, `parity=N/A`

## Decision

Director decision:

- production soak/parity task is accepted for the three live JSON-shadowed
  runtime stores;
- full migration closure is not yet accepted for `answer_logs` shadow parity,
  because the live JSON shadow file does not exist at the current runtime
  storage path.

## Readiness Assessment

Ready now:

- Atlas parity verification for `progress`
- Atlas parity verification for `weak_points`
- Atlas parity verification for `watch_sessions`
- reproducible verifier tool for reruns

Not yet fully proven:

- live `answer_logs` JSON-shadow parity
- final JSON fallback freeze across all runtime stores

## Director Conclusion

The database program is operationally close to closure, but not honestly at
final closure yet.

Remaining closure condition:

1. decide and execute the final `answer_logs` shadow/freeze position, then
   publish the final migration dossier.

## Next Expected Gate

Verification review under:

```text
TASK-CE-0039
```
