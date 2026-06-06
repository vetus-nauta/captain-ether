# Local Bootstrap From GitHub

Date: 2026-06-06
Scope: Captain Ether local development only

## Goal

Recreate a local Captain Ether development copy on a different PC using GitHub as the only source.

## Clone

```sh
git clone git@github.com:vetus-nauta/captain-ether.git
cd captain-ether
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

Expected:

```text
## main...origin/main
0 0
```

## Local Config

```sh
cp private/config.example.php private/config.php
```

`private/config.php` is local-only and ignored by Git. Do not commit it.

## Storage

```sh
mkdir -p storage
[ -f storage/.gitkeep ] || touch storage/.gitkeep
```

Runtime JSON files in `storage/` are local data and are ignored by Git.

## Run

```sh
php -S 127.0.0.1:18110 -t public
```

Open:

```text
http://127.0.0.1:18110/
http://127.0.0.1:18110/games/captain-ether
```

## QA

```sh
php -l private/bootstrap.php
find public/api/captain-ether -name '*.php' -print | sort | xargs -n1 php -l
find content/captain-ether/tools -name '*.php' -print | sort | xargs -n1 php -l
node --check public/assets/app.js
php content/captain-ether/tools/validate-captain-ether.php --runs=30
CAPTAIN_ETHER_PHP=$(command -v php) php content/captain-ether/tools/smoke-start-watch-api.php
```

Expected current RC baseline:

```text
validator PASS
API smoke PASS captain-ether-api-smoke checks=347
```

## Sync Back To WebStorm Machine

On return to the original machine:

```sh
cd /home/alexey/WebstormProjects/captain-ether
git fetch origin
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

If behind only and clean:

```sh
git pull --ff-only origin main
```

Do not use `git reset --hard` for sync unless explicitly approved.
