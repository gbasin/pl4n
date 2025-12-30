#!/usr/bin/env bash
# Runs linting, typing, unit tests, and a build in a single command.

set -euo pipefail

ROOT=$(git rev-parse --show-toplevel 2>/dev/null || {
  echo "[quality-checks] Not inside a git repository." >&2
  exit 1
})

cd "$ROOT"

if ! command -v bun >/dev/null 2>&1; then
  echo "[quality-checks] bun not found; install it first." >&2
  exit 1
fi

make lint
make typecheck
make test
make build
