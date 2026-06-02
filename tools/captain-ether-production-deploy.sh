#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
PROJECT_ROOT="$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)"
FTP_HOST="162.0.217.114"
BACKUP_STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
BACKUP_ROOT="/game.brkovic.ltd/_deploy-backups/captain-ether/${BACKUP_STAMP}"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "missing required command: $1" >&2
    exit 1
  }
}

backup_remote() {
  local dest="$1"
  local backup_path="${BACKUP_ROOT}${dest}"
  local local_backup="${TMP_DIR}/backup${dest}"

  mkdir -p "$(dirname -- "$local_backup")"
  if curl --silent --show-error --fail --netrc --ftp-pasv \
    "ftp://${FTP_HOST}${dest}" -o "$local_backup" >/dev/null 2>&1; then
    curl --silent --show-error --fail --netrc --ftp-pasv --ftp-create-dirs \
      -T "$local_backup" "ftp://${FTP_HOST}${backup_path}" >/dev/null
    echo "backup ${dest} -> ${backup_path}"
  else
    echo "backup skipped ${dest} (remote file not present)"
  fi
}

upload() {
  local src="$1"
  local dest="$2"
  local verify_path="${TMP_DIR}/verify${dest}"

  backup_remote "$dest"
  curl --silent --show-error --fail --netrc --ftp-pasv --ftp-create-dirs \
    -T "$src" "ftp://${FTP_HOST}${dest}" >/dev/null

  mkdir -p "$(dirname -- "$verify_path")"
  curl --silent --show-error --fail --netrc --ftp-pasv \
    "ftp://${FTP_HOST}${dest}" -o "$verify_path" >/dev/null
  cmp -s "$src" "$verify_path" || {
    echo "upload verification failed: ${dest}" >&2
    exit 1
  }

  echo "uploaded ${dest}"
}

require_cmd curl
require_cmd cmp

upload "${PROJECT_ROOT}/private/bootstrap.php" "/game.brkovic.ltd/private/bootstrap.php"

upload "${PROJECT_ROOT}/public/index.html" "/game.brkovic.ltd/public/index.html"
upload "${PROJECT_ROOT}/public/assets/app.js" "/game.brkovic.ltd/public/assets/app.js"
upload "${PROJECT_ROOT}/public/assets/app.css" "/game.brkovic.ltd/public/assets/app.css"
upload "${PROJECT_ROOT}/public/manifest.webmanifest" "/game.brkovic.ltd/public/manifest.webmanifest"
upload "${PROJECT_ROOT}/public/service-worker.js" "/game.brkovic.ltd/public/service-worker.js"

upload "${PROJECT_ROOT}/content/captain-ether/starter.json" "/game.brkovic.ltd/content/captain-ether/starter.json"
upload "${PROJECT_ROOT}/content/captain-ether/accept-reject-qa-pairs.json" "/game.brkovic.ltd/content/captain-ether/accept-reject-qa-pairs.json"
upload "${PROJECT_ROOT}/content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json" "/game.brkovic.ltd/content/captain-ether/batches/batch-006-english-native-seaspeak-pilot.json"

for api_file in \
  _answer-logging.php \
  _answer-matching.php \
  _learner-streams.php \
  answer-log.php \
  finish-watch.php \
  lost-oars.php \
  progress.php \
  resolve-lost-oar.php \
  skip-cleanup.php \
  start-watch.php \
  submit-answer.php
do
  upload "${PROJECT_ROOT}/public/api/captain-ether/${api_file}" "/game.brkovic.ltd/public/api/captain-ether/${api_file}"
done

cat <<'EOF'
done
- public shell/assets/content/API were verified by FTP round-trip compare
- production registry not touched: /home/brkovic/game.brkovic.ltd/content/game-registry.json
- production config not touched: /home/brkovic/game.brkovic.ltd/private/config.php
- production secret file not touched: /home/brkovic/private/captain-ether-atlas.php
- production Atlas driver not touched: /home/brkovic/game.brkovic.ltd/private/node_modules/mongodb
EOF
