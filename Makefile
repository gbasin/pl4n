.PHONY: lint format typecheck test build

BUN ?= bun

lint:
	$(BUN) run lint

format:
	$(BUN) run format

typecheck:
	$(BUN) run typecheck

test:
	$(BUN) run test

build:
	$(BUN) run build
