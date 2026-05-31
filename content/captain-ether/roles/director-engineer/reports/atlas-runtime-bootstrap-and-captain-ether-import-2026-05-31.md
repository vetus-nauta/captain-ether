# Atlas Runtime Bootstrap And Captain Ether Import

Date: 2026-05-31

## Scope

Prepare MongoDB Atlas runtime storage for Captain Ether and import the current
Captain Ether runtime baseline from the live JSON storage.

This report covers only:

- shared game identity storage needed by Captain Ether;
- Captain Ether runtime collections and imported live data;
- verification of imported document counts.

This report does not change:

- Captain Ether PHP runtime code;
- Watch Officer data or runtime;
- Nav Desk, router, registry, or deploy config;
- production secrets.

## Source Storage Used

Imported from the current runtime JSON storage at:

```text
/home/alexey/GitHub/Revoyacht/brkovic-ltd/game.brkovic.ltd/storage
```

Source files inspected:

- `users.json`
- `sessions.json`
- `login_codes.json`
- `progress.json`
- `watch_sessions.json`
- `weak_points.json`
- `captain_answer_logs.json` (not present)

## Atlas Baseline Created

Relevant Atlas databases and collections prepared:

### `game_identity`

- `users`
- `sessions`
- `login_codes`

### `captain_ether`

- `profiles`
- `progress`
- `watch_sessions`
- `weak_points`
- `answer_logs`

## Imported Captain Ether Baseline

Imported document counts:

- `game_identity.users`: `7`
- `game_identity.sessions`: `8`
- `game_identity.login_codes`: `0`
- `captain_ether.progress`: `6`
- `captain_ether.watch_sessions`: `19`
- `captain_ether.weak_points`: `22`
- `captain_ether.answer_logs`: `0`

Import rules used:

- users imported one document per user;
- sessions imported only active sessions;
- login codes imported only live unused codes;
- progress imported one document per user;
- watch sessions imported one document per watch session;
- weak points flattened from per-user JSON maps into one document per
  `user_id + item_id`;
- answer logs not imported because the source JSON file was absent.

## Verification

Verification after import confirmed:

- Atlas connection successful;
- imported counts match the intended Captain Ether baseline;
- no broken user references found in progress, watch sessions, or weak points;
- `login_codes.json` contained no live unused codes at import time.

## Important Boundary

Atlas is now prepared and populated with the Captain Ether runtime baseline,
but the live Captain Ether PHP runtime still reads and writes JSON storage.

This means:

- MongoDB Atlas is ready as the next runtime target;
- no live gameplay behavior changed yet;
- a separate task is still required to switch the Captain Ether storage adapter
  from JSON to MongoDB.

## Next Gate

Next required task:

1. define the Captain Ether Mongo document contract for:
   - users
   - sessions
   - progress
   - watch sessions
   - weak points
   - answer logs
2. add a Captain Ether storage layer that can read/write MongoDB Atlas;
3. run a controlled switchover with rollback preserved.
