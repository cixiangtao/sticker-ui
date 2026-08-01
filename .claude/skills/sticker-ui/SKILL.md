```markdown
# sticker-ui Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches the core development patterns and workflows used in the `sticker-ui` TypeScript codebase. It covers file and code conventions, commit message style, dependency and documentation update workflows, and testing patterns. By following these guidelines, contributors can ensure consistency and reliability across the project.

## Coding Conventions

### File Naming

- Use **kebab-case** for all file names.
  - Example:  
    ```
    sticker-component.ts
    preview-api-docs.json
    ```

### Import Style

- Use **relative imports** for modules within the project.
  - Example:
    ```typescript
    import { Sticker } from './sticker';
    import { getPreview } from '../utils/preview';
    ```

### Export Style

- Use **named exports** rather than default exports.
  - Example:
    ```typescript
    // sticker.ts
    export function createSticker() { ... }
    export const STICKER_SIZE = 48;
    ```

### Commit Messages

- Follow **conventional commit** format.
- Common prefixes: `build`, `fix`
- Example:
  ```
  fix: correct sticker rendering on high-DPI screens
  build: update pnpm-lock.yaml for dependency upgrade
  ```

## Workflows

### Dependency Update Lockfile

**Trigger:** When dependencies are updated or upgraded (e.g., via Dependabot or manually).  
**Command:** `/update-dependencies`

1. Update dependency versions in `package.json` or relevant manifest files.
2. Regenerate `pnpm-lock.yaml` to reflect new dependency versions.
   - Example:
     ```
     pnpm install
     ```
3. If using a workspace, update `pnpm-workspace.yaml` if necessary.
4. Commit the updated lockfile and manifest files.
   - Example commit message:
     ```
     build: update dependencies and regenerate pnpm-lock.yaml
     ```

### Sync Lockfile and Generated API Docs

**Trigger:** When dependencies are updated or API documentation is regenerated.  
**Command:** `/sync-lockfile-and-api-docs`

1. Ensure `pnpm-lock.yaml` matches the installed dependencies.
2. Regenerate API documentation (e.g., from source or via codegen).
   - Example:
     ```
     pnpm run generate:docs
     ```
3. Update `src/generated/preview-api-docs.json` with the latest API docs.
4. Commit both the lockfile and generated docs together.
   - Example commit message:
     ```
     build: sync lockfile and preview-api-docs.json after API update
     ```

## Testing Patterns

- Test files follow the `*.test.*` pattern (e.g., `sticker.test.ts`).
- The testing framework is not explicitly detected; check project scripts or dependencies for specifics.
- Example test file:
  ```typescript
  // sticker.test.ts
  import { createSticker } from './sticker';

  test('creates a sticker with default size', () => {
    expect(createSticker().size).toBe(48);
  });
  ```

## Commands

| Command                        | Purpose                                                         |
|---------------------------------|-----------------------------------------------------------------|
| /update-dependencies           | Update dependencies and regenerate the lockfile                  |
| /sync-lockfile-and-api-docs    | Sync lockfile and generated API documentation after any changes  |
```
