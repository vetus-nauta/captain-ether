# Director-Engineer Report: TASK-CE-0021 Public Stream Selector API/UI Contract

Date: 2026-05-28
Role: Director-Engineer / Director Ether
Mode: report-only API/UI implementation contract

## Status

PASS

The future public `Practice stream` selector implementation contract is ready
for QA review.

No runtime/API/UI/tool code, content JSON, matcher, router, registry,
auth/platform, Watch Officer, Nav Desk, production config, deploy state,
private config, player data, sessions, cookies, CSRF, email, or secrets were
changed.

## Implementation Boundary

This contract authorizes a future local implementation sprint only. It does not
authorize production release, deployment, router/registry changes, or public
English-native availability by itself.

Current facts:

- existing visible UI starts a watch with `{ level }`;
- current API already defaults omitted `learner_stream` to `ru_source`;
- hidden `english_native` is admin-only;
- submit and finish derive stream from the stored watch session;
- answer-log admin can view `all`;
- learner UI must never use `all`.

## Proposed Implementation File List

Future implementation should be limited to:

```text
public/assets/app.js
public/assets/app.css
public/service-worker.js
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/start-watch.php
public/api/captain-ether/progress.php
public/api/captain-ether/lost-oars.php
public/api/captain-ether/skip-cleanup.php
public/api/captain-ether/resolve-lost-oar.php
public/api/captain-ether/stream-preference.php
content/captain-ether/tools/smoke-start-watch-api.php
```

`stream-preference.php` is a proposed new endpoint. If Director chooses to avoid
a new endpoint, the implementation task must record the alternate persistence
contract before coding starts.

Forbidden for the implementation sprint:

- `starter.json` merge;
- Batch 006 status/content edits;
- router or registry edits;
- auth/platform edits;
- production deploy;
- private config or secret handling.

## Stream Availability Contract

Backend remains authoritative.

Required server model:

```text
canonical streams: ru_source, english_native
learner-visible streams: backend-returned available_streams
admin-only aggregate: all
```

Rules:

- `ru_source` is always available for authenticated Captain Ether users;
- `english_native` remains unavailable to public users until a Director release
  flag/decision explicitly allows it;
- invalid stream returns `400 invalid_learner_stream`;
- unavailable stream returns `403 learner_stream_unavailable`;
- UI must hide or disable unavailable streams based on backend response;
- UI must not infer availability from locale or copied labels.

## Preference Storage Contract

Recommended persistence:

```text
storage bucket: captain_ether_stream_preferences
key: authenticated user id
shape:
  {
    "learner_stream": "ru_source",
    "updated_at": "ISO-8601 timestamp"
  }
```

Default and migration:

- absent preference -> `ru_source`;
- existing users with legacy progress -> `ru_source`;
- existing `progress` and `weak_points` stores remain authoritative for
  `ru_source`;
- `captain_ether_stream_progress` and `captain_ether_stream_weak_points` remain
  stream-scoped for non-legacy streams;
- stream switching never deletes, rewrites, or merges progress;
- logout/login must hydrate preference for the authenticated user, not for the
  browser profile alone.

Client local state:

- `state.learnerStream` may cache the selected stream during a session;
- localStorage may be used only as a visual pre-hydration hint if it is replaced
  by authenticated server preference before starting a watch;
- localStorage must not be the source of truth for an authenticated player.

## API Contract

### `GET /api/captain-ether/stream-preference.php`

Response:

```json
{
  "ok": true,
  "selected_learner_stream": "ru_source",
  "available_streams": [
    {
      "id": "ru_source",
      "available": true
    },
    {
      "id": "english_native",
      "available": false,
      "reason": "learner_stream_unavailable"
    }
  ]
}
```

Rules:

- requires authenticated user;
- does not expose admin-only `all`;
- does not expose player email, session id, CSRF value, or identity fields;
- selected stream falls back to `ru_source` if stored stream is no longer
  available.

### `POST /api/captain-ether/stream-preference.php`

Request:

```json
{
  "learner_stream": "ru_source"
}
```

Response:

```json
{
  "ok": true,
  "selected_learner_stream": "ru_source"
}
```

Rules:

- validates canonical stream;
- rejects unavailable stream with `403 learner_stream_unavailable`;
- updates preference only after access is confirmed;
- does not mutate progress or weak points.

### Existing Stream-Aware Calls

`POST /api/captain-ether/start-watch.php`

```json
{
  "level": "beginner",
  "learner_stream": "ru_source"
}
```

Rules:

- omitted stream remains `ru_source`;
- stores `learner_stream` in watch session;
- response includes `watch.learner_stream`;
- may update preference only after watch start succeeds.

`POST /api/captain-ether/submit-answer.php`

- client must not send stream;
- endpoint uses watch session stream.

`POST /api/captain-ether/finish-watch.php`

- client must not send stream;
- endpoint uses watch session stream;
- summary includes `learner_stream`.

`GET /api/captain-ether/progress.php?learner_stream=ru_source`

- UI calls with selected stream;
- response includes `progress.learner_stream`.

`GET /api/captain-ether/lost-oars.php?learner_stream=ru_source`

- UI calls with selected stream;
- response includes `learner_stream`;
- items include `learner_stream`.

`POST /api/captain-ether/skip-cleanup.php`

```json
{
  "learner_stream": "ru_source"
}
```

`POST /api/captain-ether/resolve-lost-oar.php`

```json
{
  "learner_stream": "ru_source",
  "item_id": "CE-B001-CORE-001",
  "answer": "Mayday"
}
```

`GET /api/captain-ether/answer-log.php?learner_stream=all`

- admin only;
- learner UI does not call answer-log;
- admin default may remain `all`;
- public selector does not expose `all`.

## UI Contract

Frontend state:

```text
state.learnerStream = selected authenticated preference or ru_source
state.availableLearnerStreams = backend availability list
```

Render order:

1. load authenticated user;
2. load stream preference/availability;
3. render level select with selector;
4. disable level start while preference is loading;
5. start watch with selected stream;
6. render stream context in watch side panel, summary, and Lost Oars.

`renderLevelSelect()` changes:

- add selector between intro copy and level cards;
- use i18n keys from TASK-CE-0020;
- do not render a modal gate;
- do not create a UI-language selector;
- do not expose internal ids.

`startWatch(level)` changes:

- POST `{ level, learner_stream: state.learnerStream }`;
- keep returned `watch.learner_stream` as authoritative.

`finishWatch()`, `renderLostOars()`, and skip cleanup:

- include selected/current stream where endpoint contract requires it;
- use watch/session stream for current watch summary where available.

Admin answer log:

- may add a stream filter in a later admin-specific task;
- not required for learner selector implementation.

## I18n And Cache Impact

Required i18n work:

- add all keys from TASK-CE-0020 to `I18N.en`;
- add matching keys to `ru`, `de`, `it`, `es`, `sr`, and `zh`;
- keep English fallback;
- update no training prompts through i18n.

Cache/PWA:

- if `public/assets/app.js` or `public/assets/app.css` changes, bump the service
  worker cache name;
- verify stale clients receive the new selector copy and CSS;
- do not alter manifest language policy in this sprint unless a separate
  localization task authorizes it.

## Future Test Matrix

Local command gates:

```text
php -l public/api/captain-ether/stream-preference.php
php -l public/api/captain-ether/_learner-streams.php
php -l public/api/captain-ether/start-watch.php
php -l public/api/captain-ether/progress.php
php -l public/api/captain-ether/lost-oars.php
php -l public/api/captain-ether/skip-cleanup.php
php -l public/api/captain-ether/resolve-lost-oar.php
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
node --check public/assets/app.js
node content/captain-ether/tools/check-pwa-i18n.mjs
git diff --check
```

Required smoke cases:

- omitted stream still starts `ru_source`;
- existing RU-source progress is unchanged;
- non-admin user cannot start hidden `english_native` before release;
- invalid stream returns 400 and mutates no storage;
- unavailable stream returns 403 and mutates no storage;
- preference GET returns `ru_source` for legacy users;
- preference POST does not mutate progress;
- start watch stores stream in watch session;
- submit/finish ignore client-supplied stream and use watch stream;
- progress/Lost Oars/skip/resolve use selected stream;
- locale `en-US` does not select English-native;
- unsupported `fr-FR` falls back to English UI and `ru_source`;
- seven-locale selector copy passes i18n key coverage;
- mobile selector has no horizontal overflow.

## Risks And Rollback Boundaries

Primary risks:

- public UI accidentally exposes hidden English-native before release;
- client-side preference becomes authoritative and leaks across shared devices;
- locale fallback enrolls users into the wrong learner stream;
- Lost Oars or summary mixes streams;
- service worker serves stale UI after API contract changes.

Rollback boundary:

- remove selector rendering and call `start-watch.php` with `{ level }`;
- backend omitted-stream default keeps legacy `ru_source`;
- stream-scoped storage can remain untouched;
- no content or progress migration rollback should be needed.

## Handoff For QA

QA should review this as an implementation contract, not as a released feature.
PASS means the future implementation sprint has testable boundaries. It does
not approve public English-native release or production deploy.

## Result

PASS: Director-Engineer approves the future API/UI selector contract with
server-side authenticated stream preference, backend-authoritative stream
availability, `ru_source` default, no locale-to-stream inference, and explicit
non-release boundary for `english_native`.

Changed files in this role task:

- `content/captain-ether/roles/director-engineer/reports/task-ce-0021-public-stream-selector-api-ui-contract-2026-05-28.md`
