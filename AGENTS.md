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
- React, Tailwind, and Radix primitives are the baseline UI stack.
- Prefer `lucide-react` for component icons before drawing custom CSS/SVG icons.
- Keep extra runtime dependencies minimal. Add non-baseline dependencies only when they provide clear component-level value, and declare them on the specific registry item that needs them.
- Preserve the handbook sticker style: warm paper surfaces, chunky outlines, hard offset shadows, and tactile interaction states.
- Use shared Tailwind CSS variables from `src/globals.css` for common sticker colors, radius, border widths, shadows, focus rings, and preview grid details before reaching for raw hex values or arbitrary shadows.
- Keep oxfmt sorting focused on project-wide consistency before tuning individual ordering preferences.
- Prefer focused changes that match the existing file structure.
- Prefer named exports throughout project source. Do not add new `export default` declarations for components, pages, demos, helpers, or registry entry points. Default exports are only allowed where an external tool or generated asset module requires that shape, such as Vite/Tsup/Oxlint config files or generated JSON module declarations.
- `src/components/ui/<name>.tsx` is the canonical source for UI components. Do not add or edit component source under `registry/default` for new work.
- When adding a registry UI component, update the full preview delivery chain together: `src/components/ui/<name>.tsx`, `registry.json`, `src/pages/components/<name>`, `src/router/routes.ts`, generated API docs, and preview i18n dictionaries.
- Document registry component APIs with TSDoc-style `/** ... */` comments that TypeScript can expose through JSDoc AST APIs.

## Skills

- Use `.agents/skills/handbook-sticker-ui/SKILL.md` for detailed handbook sticker visual, accessibility, semantic slot, and Tailwind component guidance.
- Use `.agents/skills/demo/SKILL.md` when adding, changing, renaming, removing, or reviewing component preview demos, demo metadata, demo ordering, source-code previews, or demo i18n copy.
- Use `.agents/skills/registry-preview-workflow/SKILL.md` when adding, changing, renaming, or removing registry UI components, component demos, preview pages, generated API docs, or preview i18n dictionaries.
- Use `.agents/skills/route-configuration/SKILL.md` when registering pages, changing route metadata, or touching route/menu behavior.

## Verification

Every feature change must format and lint the code before handoff.

Before handing off code changes, run the narrowest relevant fix or check. For general edits that may need formatting, prefer `pnpm lint:fix`; otherwise use `pnpm lint` for a read-only verification.

```bash
pnpm lint:fix
```
