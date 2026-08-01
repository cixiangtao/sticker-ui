```markdown
# sticker-ui Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `sticker-ui` repository, a TypeScript React project. You'll learn how to structure files, write and organize code, follow commit conventions, and implement and run tests as practiced in this codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `stickerPanel.tsx`, `userAvatar.ts`

### Import Style
- Use **relative imports** for modules within the project.
  - Example:
    ```typescript
    import { StickerPanel } from './stickerPanel';
    import { getUser } from '../utils/userUtils';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // stickerPanel.tsx
    export const StickerPanel = () => { /* ... */ };
    ```

### Commit Messages
- Follow **Conventional Commits**.
- Use prefixes like `build`.
- Example:
  ```
  build: update dependencies to latest versions
  ```

## Workflows

### Creating a New Component
**Trigger:** When you need to add a new UI component.
**Command:** `/create-component`

1. Create a new file in camelCase (e.g., `myComponent.tsx`).
2. Use named exports for your component.
    ```typescript
    export const MyComponent = () => { /* ... */ };
    ```
3. Use relative imports for any dependencies.
4. Add a corresponding test file named `myComponent.test.tsx`.

### Making a Commit
**Trigger:** When committing code changes.
**Command:** `/commit`

1. Stage your changes.
2. Write a commit message using the conventional commit format.
    - Example: `build: add sticker panel component`

### Writing and Running Tests
**Trigger:** When adding or updating features.
**Command:** `/test`

1. Create a test file with the pattern `*.test.*` (e.g., `stickerPanel.test.tsx`).
2. Write tests using the project's preferred testing framework (framework unknown; follow existing patterns).
3. Run tests using the project's test runner (see project scripts or documentation).

## Testing Patterns

- Test files are named with the `*.test.*` pattern, placed alongside or near the files they test.
  - Example: `stickerPanel.test.tsx`
- The specific testing framework is not specified; follow the structure of existing test files.
- Example test file structure:
    ```typescript
    import { StickerPanel } from './stickerPanel';

    describe('StickerPanel', () => {
      it('renders without crashing', () => {
        // test implementation
      });
    });
    ```

## Commands
| Command             | Purpose                                 |
|---------------------|-----------------------------------------|
| /create-component   | Scaffold a new React component          |
| /commit             | Make a conventional commit              |
| /test               | Run the test suite                      |
```
