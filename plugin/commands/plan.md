---
description: Start a multi-agent planning session for a task. Creates a thunk session and waits for agents to complete the first turn.
---

# Plan Task

Start a planning session for: **$ARGUMENTS**

## Prerequisites

If `thunk` is not found (exit code 127), install it first:
```bash
bun install
```
Then continue with the steps below.

## Steps

1. Run `thunk init "$ARGUMENTS"` to create the session
2. Capture the `session_id` from the JSON output
3. Run `thunk wait --session <session_id>` to wait for agents to complete
4. When complete, tell the user:
   - The path to the plan file (`.thunk/sessions/<id>/turns/001.md`)
   - They should review and edit the file
   - When done editing, use `/thunk:continue` to start the next turn
   - Or `/thunk:approve` if satisfied

## Example Output

```
Started planning session `a1b2c3d4` for "Add user authentication"

Agents are working... (this may take a few minutes)

Done! Plan ready for review:
  .thunk/sessions/a1b2c3d4/turns/001.md

Next steps:
  1. Review and edit the plan file
  2. Run /thunk:continue a1b2c3d4 to refine
  3. Or /thunk:approve a1b2c3d4 when satisfied
```
