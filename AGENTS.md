# AGENTS.md

## Project

`sticker-ui` is a source-first React + Tailwind component registry with a handbook sticker visual language.

## Commands

- `pnpm dev`: start the Vite preview on port `7777`.
- `pnpm lint:fix`: format, auto-fix lint, and type-check.
- `pnpm build:registry`: generate the shadcn-compatible registry output.
- `pnpm build:preview`: generate API docs, type-check, and build the preview.

## Rules

- Keep registry components source-only and easy to copy through shadcn.
- Use `src/components/ui/<name>.tsx` as the canonical component source. Do not add component source under `registry/default`.
- Prefer named exports throughout project source. Add default exports only when external tooling or generated modules require them.
- Keep extra runtime dependencies minimal. Add non-baseline dependencies only when they provide clear component-level value, and declare them on the registry item that needs them.
- Preserve the handbook sticker style: warm paper surfaces, chunky outlines, hard offset shadows, tactile states, and accessible semantics.
- Prefer shared Tailwind tokens from `src/tokens.css` via `src/globals.css` before raw values or arbitrary shadows.
- `tailwindcss-animate` is the approved Tailwind motion helper for floating registry components; declare it only on registry items that use it, wire it in preview through `src/globals.css`, and document package-user setup instead of adding it to `src/tokens.css`.
- Document public registry component APIs with TSDoc-style `/** ... */` comments.
- Keep demo example content in English literals; reserve preview i18n for metadata, page chrome, API docs, and prop descriptions.
- Keep registry component display names as exported component-name literals in route metadata, not translated preview i18n keys.
- Keep changes focused and aligned with the existing file structure.

## Skills

- Use `.agents/skills/registry-preview-workflow/SKILL.md` for registry components and preview delivery chain changes.
- Use `.agents/skills/demo/SKILL.md` for component demos, demo metadata, ordering, source previews, and demo i18n boundaries.
- Use `.agents/skills/route-configuration/SKILL.md` for route, menu, and route meta changes.
- Use `.agents/skills/handbook-sticker-ui/SKILL.md` for handbook sticker visual, accessibility, semantic slot, and Tailwind component guidance.

## Verification

Run the narrowest relevant check before handoff:

- General edits: `pnpm lint:fix`.
- Component source or `registry.json` changes: also run `pnpm build:registry`.
- Preview route, demo, export, or API-doc chain changes: also run `pnpm build:preview`.
