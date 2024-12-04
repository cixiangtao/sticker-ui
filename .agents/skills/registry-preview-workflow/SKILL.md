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
3. Preview page export in `src/pages/components/index.tsx`.
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

Component preview pages should normally be exported from `src/pages/components/index.tsx`.
That central module uses `createComponentPreviewPage` from `@/layouts/preview`
and lazy static `./*/demos/*.tsx` globs so each component folder only needs its
demo files while each page loads only its own demo modules and raw sources:

```tsx
const demoModuleLoaders =
  import.meta.glob<PreviewDemoModule>("./*/demos/*.tsx")
const demoSourceLoaders = import.meta.glob<string>("./*/demos/*.tsx", {
  import: "default",
  query: "?raw",
})

const ExamplePage = createRegistryComponentPage("example")

export { ExamplePage }
```

The local `createRegistryComponentPage` helper wires demos, source previews, `sourceRoot`, and `PreviewApiTable` together. Reach for hand-written `PreviewDemoPage`, `getPreviewDemoExamples`, or custom trailing content only when a preview page genuinely needs a layout the helper cannot express.

Demo files should:

- Define metadata with `defineMeta({ ... })`.
- Export a named `Demo` component.
- Export named bindings with `export { Demo, meta }`.
- Avoid default exports.

## Preview I18n

Any component development work must update preview i18n in the same change.

- Make every user-visible demo string translatable through the preview i18n layer.
- Add missing English-to-Chinese preview strings in `src/i18n/preview/index.tsx` for demo titles, descriptions, labels, button text, table captions, statuses, and helper copy.
- When new registry component TSDoc appears in `src/generated/preview-api-docs.json`, add matching Chinese API doc entries in `src/i18n/preview/api-docs.zh.ts`.
- Keep identifiers, prop names, paths, and literal type examples in English.

## Registry Output

- After changing `registry.json` or component source, run `pnpm build:registry` so `public/r/*.json` stays aligned with the preview.
- After changing preview page, demo, route, or API doc generation behavior, run `pnpm build:preview` when the change could affect the full preview delivery chain.
- Keep registry components source-only and easy to copy through shadcn.
- React, Tailwind, and Radix primitives are the baseline UI stack for registry components.
- Keep extra runtime dependencies minimal. Add non-baseline dependencies only when they provide clear component-level value, and declare them on the specific registry item that needs them.

## Final Check

Before handoff:

- The component source, registry metadata, preview route, demos, API docs, and i18n dictionaries are aligned.
- User-visible English preview copy has a Chinese translation.
- Generated files have been refreshed when their sources changed.
- Run the narrowest relevant verification; for normal code changes, prefer `pnpm lint:fix`.
- Run `pnpm build:registry` for component source or `registry.json` changes, and `pnpm build:preview` for preview chain changes.
