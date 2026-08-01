---
name: sync-lockfile-and-generated-api-docs
description: Workflow command scaffold for sync-lockfile-and-generated-api-docs in sticker-ui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /sync-lockfile-and-generated-api-docs

Use this workflow when working on **sync-lockfile-and-generated-api-docs** in `sticker-ui`.

## Goal

Ensures that the lockfile and generated API documentation are in sync, typically after dependency changes or API updates.

## Common Files

- `pnpm-lock.yaml`
- `src/generated/preview-api-docs.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update the lockfile to match installed dependencies.
- Regenerate API documentation from source or codegen.
- Commit both lockfile and generated docs together.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.