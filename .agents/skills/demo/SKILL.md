---
name: demo
description: Build and maintain sticker-ui preview demos. Use this skill whenever adding, changing, renaming, removing, or reviewing files under src/pages/components/*/demos, demo metadata, demo ordering, source-code previews, demo i18n copy, or component preview page demo loading.
---

# Demo Workflow

## Use When

Use this skill for work centered on preview examples:

- Add, change, rename, or remove a demo file under `src/pages/components/<name>/demos`.
- Adjust `defineMeta` fields, demo sort order, demo titles, or descriptions.
- Change how demo source code is loaded or displayed in component preview pages.
- Update demo copy, labels, statuses, helper text, or Chinese preview translations.
- Review whether a component has enough examples to show real usage states.

For full registry component additions, also use `registry-preview-workflow`. For new routes or route metadata, also use `route-configuration`.

## Current Demo Contract

Demo modules are loaded by component preview pages through `import.meta.glob<PreviewDemoModule>("./demos/*.tsx", { eager: true })`.

Each demo file must:

- Import `defineMeta` from `@/layouts/preview`.
- Declare `const meta = defineMeta({ ... })`.
- Export a named `Demo` React component.
- Export named bindings with `export { Demo, meta }`.
- Avoid default exports.

The module shape is:

```tsx
import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.variants",
  descriptionKey: "preview.components.exampleDescriptionKey",
})

function Demo() {
  const { tm } = usePreviewI18n()

  return <div>{tm("preview.components.exampleLabel")}</div>
}

export { Demo, meta }
```

## Metadata Rules

- Always provide `titleKey` and `descriptionKey` so the preview UI renders through i18n.
- Use `order` to make the demo sequence intentional. Prefer gaps of 10 so future demos can fit between existing examples.
- Use `className` only for the outer preview example surface when a demo needs a specific paper tone.
- Keep demo filenames kebab-case and descriptive, such as `basic-field.tsx`, `sizes-and-tones.tsx`, or `close-controls.tsx`.

## Demo Content Rules

- Show realistic component usage, not only visual variants.
- Cover common states expected by users: default, disabled, controlled/uncontrolled behavior, validation, sizes, tones, composition, and accessibility behavior when relevant.
- When a component prop has a small fixed value set, show all meaningful values in the demo suite. This is especially important for props such as `tone`, `color`, `size`, `variant`, `placement`, `align`, `side`, and boolean state props.
- Keep each demo focused on one concept. Add another demo instead of making a single example do too many jobs.
- Prefer existing registry components and local preview helpers before adding new dependencies.
- Keep examples copyable through shadcn: do not rely on app-specific stores, routes, network calls, or hidden preview-only state unless the demo is explicitly about that integration.
- Preserve the handbook sticker visual language with warm paper surfaces, ink outlines, hard shadows, tactile states, and clear semantic structure.
- Use semantic HTML and accessible names for interactive examples. Demonstrate keyboard and ARIA behavior when that is part of the component contract.

## I18n Rules

- Import and call `usePreviewI18n()` inside `Demo` when rendering user-visible strings.
- Use `tm(...)` for typed preview message keys.
- Add new keys to the preview i18n dictionaries in the same change.
- Translate demo titles, descriptions, labels, button text, captions, helper text, statuses, and table copy.
- Keep code identifiers, prop names, path fragments, and literal API values in English.

## Component Preview Pages

For component pages, prefer `createComponentPreviewPage` from `@/layouts/preview`:

```tsx
import {
  createComponentPreviewPage,
  type PreviewDemoModule,
} from "@/layouts/preview"

const demoModules = import.meta.glob<PreviewDemoModule>("./demos/*.tsx", {
  eager: true,
})
const demoSources = import.meta.glob<string>("./demos/*.tsx", {
  eager: true,
  import: "default",
  query: "?raw",
})

const ExamplePage = createComponentPreviewPage({
  demoModules,
  demoSources,
  name: "example",
})

export { ExamplePage }
```

Keep demo module loading and raw source loading pointed at the same `./demos/*.tsx` glob so every rendered demo has matching source code.

## Review Checklist

Before finishing demo work:

- Every demo exports `Demo` and `meta` as named exports.
- `meta.titleKey` and `meta.descriptionKey` exist in preview i18n resources.
- User-visible demo strings go through `usePreviewI18n`.
- Demo order is deliberate and stable.
- Raw source previews still match rendered demo modules.
- New examples show meaningful component behavior, not duplicate decorative states.
- Run the narrowest relevant verification. For normal edits, use `pnpm lint:fix`.
