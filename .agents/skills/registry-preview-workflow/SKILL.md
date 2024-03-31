---
name: registry-preview-workflow
description: Maintain sticker-ui registry components, preview demo pages, generated API docs, and preview i18n together. Use when adding, changing, renaming, or removing registry UI components, component demos, preview pages, registry.json entries, generated API docs, or preview translation dictionaries.
---

# Registry Preview Workflow

## Use When

Use this skill for any work that changes registry components or how they appear in the preview site:

- Add, change, rename, or remove a component under `src/components/ui/<name>.tsx`.
- Add or edit component demos under `src/pages/components/<name>`.
- Register component pages, demo routes, API docs, or registry output.
- Update preview strings, Chinese translations, or generated API docs.

## Delivery Chain

New registry UI components must land as a synchronized set:

1. Component source at `src/components/ui/<name>.tsx`.
2. A `registry:ui` item in `registry.json`.
3. Preview page at `src/pages/components/<name>/index.tsx`.
4. Demo files under `src/pages/components/<name>/demos`.
5. Route registration in `src/router/routes.ts`.
6. Generated API docs in `src/generated/preview-api-docs.json`.
7. Preview i18n entries in `src/i18n/preview/index.tsx` and, when needed, `src/i18n/preview/api-docs.zh.ts`.

Do not add new component source files under `registry/default`. Registry items in `registry.json` must point at `src/components/ui/*`, and `public/r/*.json` is generated from that canonical source.

For route details, also use the `route-configuration` skill.

## Component API Docs

- Document public registry component APIs with TSDoc-style `/** ... */` comments that TypeScript can expose through JSDoc AST APIs.
- Let TypeScript carry prop types; do not duplicate types with JSDoc `{type}` annotations.
- Prefer a short prop description plus `@default`, `@remarks`, `@deprecated`, or `@example` only when they add useful generated API content.
- Keep code identifiers, prop names, paths, and literal type examples untranslated.
- After updating registry component docs, run `pnpm run build:api` before checking translations so new API doc keys are visible.

## Preview Page Shape

Component preview pages should use the standard `PreviewDemoPage` template:

- `import.meta.glob` for demo modules and raw sources.
- Explicit `DEMO_PATHS`.
- `getPreviewDemoExamples`.
- `sourceRoot`.
- `trailing={<PreviewApiTable api={apiDocs.<name>} />}`.

Demo files should:

- Define metadata with `defineMeta({ ... })`.
- Export that `meta` as the default export.
- Export a named `Demo` component.

## Preview I18n

Any component development work must update preview i18n in the same change.

- Make every user-visible demo string translatable through the preview i18n layer.
- Add missing English-to-Chinese preview strings in `src/i18n/preview/index.tsx` for demo titles, descriptions, labels, button text, table captions, statuses, and helper copy.
- When new registry component TSDoc appears in `src/generated/preview-api-docs.json`, add matching Chinese API doc entries in `src/i18n/preview/api-docs.zh.ts`.
- Keep identifiers, prop names, paths, and literal type examples in English.

## Registry Output

- After changing `registry.json` or component source, run `pnpm run build:registry` so `public/r/*.json` stays aligned with the preview.
- Keep registry components source-only and easy to copy through shadcn.
- React, Tailwind, and Radix primitives are the baseline UI stack for registry components.
- Keep extra runtime dependencies minimal. Add non-baseline dependencies only when they provide clear component-level value, and declare them on the specific registry item that needs them.

## Final Check

Before handoff:

- The component source, registry metadata, preview route, demos, API docs, and i18n dictionaries are aligned.
- User-visible English preview copy has a Chinese translation.
- Generated files have been refreshed when their sources changed.
- Run the narrowest relevant verification; for normal code changes, prefer `pnpm lint:fix`.
