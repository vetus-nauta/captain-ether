# game.brkovic.ltd

Standalone Captain Ether maritime learning game platform for
`https://game.brkovic.ltd`.

Current game:

- `captain_ether` — `Капитан — Эфир`, a Sea Speak / maritime radio communication trainer.

The main `brkovic.ltd` / Nav Desk project should only link to this app.

## Repository Sync Rule

This repository is the canonical GitHub mirror for Captain Ether material and
the Captain Ether PWA/site shell.

Sync into this repository:

- Captain Ether content, batches, roles, reports, tools, QA material, and docs;
- Captain Ether public PWA/site files under `public/`;
- shared platform glue required for Captain Ether to run locally;
- examples such as `private/config.example.php`.

Never sync into this repository:

- `private/config.php`;
- runtime storage data, users, sessions, login codes, progress, locks, logs;
- `.env`, keys, certificates, database dumps, cookies, CSRF values, player
  email, or player identity data;
- Watch Officer docs, prototypes, exports, public build artifacts, tasks, or
  game registry entries;
- unrelated `brkovic-ltd` website/Nav Desk/service files.

Every future push to `git@github.com:vetus-nauta/captain-ether.git` must use
this filter. GitHub sync is not production deploy.

## Current Handoff

For a fresh Codex/ChatGPT session, start with:

```text
docs/new-chat-handoff-2026-05-26.md
```

## Local Run

```bash
php -S 127.0.0.1:18110 -t public
```

Open:

- `http://127.0.0.1:18110/`

In local mode the email login endpoint returns the 6-digit code in the JSON response for development.

Do not deploy the app without `private/config.php` in production mode. If the app falls back to `private/config.example.php`, local development codes are returned by the API.

## Ecosystem Login

The future primary account should live on `brkovic.ltd`. The game app already has a disabled SSO endpoint:

```text
/api/auth/ecosystem-login.php
```

When the main site registration is implemented, enable signed ecosystem login with a shared secret outside Git. Details: `docs/ecosystem-auth-plan.md`.

## Production Setup

1. Point the `game.brkovic.ltd` subdomain document root to:

```text
game.brkovic.ltd/public
```

2. Copy:

```text
private/config.example.php -> private/config.php
```

3. Set:

- `app_env` to `production`
- `mail_from`
- `mail_from_name`
- `admin_emails`

4. Make the `storage` directory writable by the web user.

5. Verify DNS before launch:

```bash
curl -I https://game.brkovic.ltd
```

At the time this scaffold was created, `game.brkovic.ltd` did not resolve yet, so the hosting/DNS subdomain step still has to be completed in the hosting panel.

## Architecture

This first MVP uses a small server-side JSON store so the platform can run on ordinary PHP hosting without introducing a framework. The data shape is intentionally separated into platform and Captain Ether files so it can be migrated to MySQL later without rewriting the player UI.

The public root is a game selection hub. Individual games use app routes such as:

- `/games/captain-ether`

Only `captain_ether` is in scope for this repository.

Planned migration targets:

- platform users, sessions, login codes
- game registry
- Captain Ether knowledge items, sessions, answers, weak points
- groups, crews, competitions, results
