# Captain Ether Repository Sync Rule

Date: 2026-05-27

## Decision

`git@github.com:vetus-nauta/captain-ether.git` is the canonical GitHub
repository for Captain Ether material and the Captain Ether PWA/site shell.

The repository must be synchronized in parallel with ongoing Captain Ether work,
but only through a filtered export.

## Include

- Captain Ether content, batches, starter data, answer policy, QA fixtures, and
  tools.
- Captain Ether role office, tasks, reports, handoffs, and working rules.
- Public PWA/site shell required for Captain Ether.
- Captain Ether API endpoints and shared local platform glue needed to run the
  app.
- Documentation that directly governs Captain Ether.
- `private/config.example.php`.
- `storage/.gitkeep`.

## Exclude

- `private/config.php`.
- `storage/*.json`, `storage/*.lock`, logs, sessions, users, login codes,
  progress, answer logs, runtime state, and player data.
- `.env`, keys, certificates, database dumps, cookies, CSRF values, player
  email, player identity, SMTP credentials, FTP credentials, and API tokens.
- Watch Officer docs, prototypes, Godot files, exports, public build artifacts,
  tasks, reports, route files, and game registry entries.
- Unrelated `brkovic-ltd` website/Nav Desk/service files.

## Push Gate

Before every push:

1. Export only the allowed Captain Ether subset.
2. Confirm forbidden files are not tracked:

```sh
git ls-files | grep -E '(^private/config\\.php$|^storage/.*\\.(json|lock)$|\\.env|\\.pem$|\\.key$|\\.sqlite$|\\.db$|\\.log$|watch-officer|watch_officer)' || true
```

3. Run the available static checks:

```sh
node --check public/assets/app.js
node --check public/service-worker.js
node --check content/captain-ether/tools/check-pwa-i18n.mjs
node content/captain-ether/tools/check-pwa-i18n.mjs
node -e "JSON.parse(require('fs').readFileSync('public/manifest.webmanifest','utf8'))"
```

4. Commit and push to `main`.

GitHub sync is not production deploy.
