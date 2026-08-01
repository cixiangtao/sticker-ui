---
name: dependency-update-lockfile
description: Workflow command scaffold for dependency-update-lockfile in sticker-ui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /dependency-update-lockfile

Use this workflow when working on **dependency-update-lockfile** in `sticker-ui`.

## Goal

Keeps project dependencies up to date by updating the lockfile and workspace manifest when dependencies are upgraded.

## Common Files

- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update dependency versions in package manager files (often automated).
- Regenerate the lockfile to reflect new dependency versions.
- Update workspace manifest if necessary.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.