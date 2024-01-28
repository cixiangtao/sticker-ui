# AGENTS.md

## Project

`sticker-ui` is a source-first React + Tailwind component registry with a handbook sticker visual language.

## Commands

- `pnpm dev` starts the Vite preview on port `7777`.
- `pnpm build:registry` generates the shadcn-compatible registry output.
- `pnpm build:preview` runs TypeScript checks and builds the Vite preview.
- `pnpm check` runs TypeScript without emitting files.
- `pnpm format` writes oxfmt formatting, including import and Tailwind class sorting.
- `pnpm lint` runs TypeScript, oxfmt, and oxlint checks.
- `pnpm lint:fix` formats with oxfmt and auto-fixes lintable style issues with oxlint.

## Conventions

- Keep registry components source-only and easy to copy through shadcn.
- React and Tailwind should remain the only runtime peers.
- Avoid adding runtime helpers such as Radix Slot, CVA, clsx, or tailwind-merge to registry components.
- Preserve the handbook sticker style: warm paper surfaces, chunky outlines, hard offset shadows, and tactile interaction states.
- Use shared Tailwind CSS variables from `src/globals.css` for common sticker colors, radius, border widths, shadows, focus rings, and preview grid details before reaching for raw hex values or arbitrary shadows.
- Keep oxfmt sorting focused on project-wide consistency before tuning individual ordering preferences.
- Prefer focused changes that match the existing file structure.
- When adding a registry UI component, update the full preview delivery chain together: `registry/default/<name>/<name>.tsx`, `registry.json`, `src/pages/components/<name>`, `src/router/routes.ts`, generated API docs, and preview i18n dictionaries.
- Document registry component APIs with TSDoc-style `/** ... */` comments that TypeScript can expose through JSDoc AST APIs.
- Let TypeScript carry prop types; do not duplicate types with JSDoc `{type}` annotations.
- For public props, prefer a short description plus `@default`, `@remarks`, `@deprecated`, or `@example` only when they add useful generated API content.
- When adding or changing preview demos, update the preview i18n dictionaries for all user-visible demo and generated API doc text.
- Keep demo pages on the standard `PreviewDemoPage` template with `import.meta.glob`, explicit `DEMO_PATHS`, `PreviewApiTable`, `sourceRoot`, and demo modules that export `meta satisfies PreviewDemoMeta` plus a named `Demo`.

## Verification

Every feature change must format and lint the code before handoff.

Before handing off code changes, run the narrowest relevant fix or check. For general edits that may need formatting, prefer `pnpm lint:fix`; otherwise use `pnpm lint` for a read-only verification.

```bash
pnpm lint:fix
```
