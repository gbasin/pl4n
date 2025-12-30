# Thunk Claude Code Plugin (Bun)

Claude Code plugin for the thunk multi-agent ensemble planning CLI.

## Installation

```bash
# Add the thunk marketplace
/plugin marketplace add gbasin/thunk

# Install the plugin
/plugin install thunk@thunk
```

Or install directly:
```bash
/plugin install github:gbasin/thunk-ts
```

## Commands

| Command | Description |
|---------|-------------|
| `/thunk:plan <feature>` | Start a planning session |
| `/thunk:continue <session_id>` | Continue after editing |
| `/thunk:approve <session_id>` | Lock plan as final |
| `/thunk:status <session_id>` | Check session status |
| `/thunk:list` | List all sessions |

## Example

```
> /thunk:plan Add rate limiting to API endpoints

Started planning session `swift-river` for "Add rate limiting to API endpoints"
Agents are working...

Done! Plan ready at: .thunk/sessions/swift-river/turns/001.md

> [edit the file]

> /thunk:continue swift-river

Turn 2 complete. Plan at: .thunk/sessions/swift-river/turns/002.md

> /thunk:approve swift-river

Plan approved! Final plan: .thunk/sessions/swift-river/PLAN.md
```

## Skill

The plugin includes a skill that teaches Claude about thunk syntax and workflow. It activates automatically when discussing planning sessions.

## Prerequisites

Requires the thunk CLI to be available:

```bash
bun install
bun run src/index.ts --help
```
