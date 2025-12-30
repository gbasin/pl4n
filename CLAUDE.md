# AGENTS.md — How to work in this repo

## Environment

- Bun 1.x
- TypeScript 5.x

## Quick Start

bun install
bun run src/index.ts --help

## Repo Commands

bun run lint       # oxlint
bun run format     # Biome format
bun run typecheck  # tsc --noEmit
bun run test       # bun test
bun run build      # bun build

## Coding Standards

- TypeScript, strict type checking
- Biome for formatting, oxlint for linting
- 100% test coverage

## Git Rules

- Check `git status`/`git diff` before commits
- Atomic commits; push only when asked
- Never destructive ops (`reset --hard`, `force push`) without explicit consent
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`

## Critical Thinking

- Read more code when stuck
- Document unexpected behavior
- Call out conflicts between instructions

## Engineering

- Small files (<500 LOC), descriptive paths
- Fix root causes, not symptoms
- Simplicity > cleverness

## Architecture

src/
├── cli.ts          # CLI commands (sade)
├── models.ts       # Data models (SessionState, Phase, etc.)
├── session.ts      # Session management
├── orchestrator.ts # Turn orchestration (draft → peer review → synthesis)
├── prompts.ts      # Agent prompt templates
├── names.ts        # Human-friendly name generator
└── adapters/
    ├── base.ts     # AgentAdapter interface
    ├── claude.ts   # Claude Code adapter (subprocess, --resume)
    └── codex.ts    # Codex CLI adapter (subprocess, resume)
