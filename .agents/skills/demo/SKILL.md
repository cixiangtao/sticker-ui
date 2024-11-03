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
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.variants",
  descriptionKey: "preview.components.exampleDescriptionKey",
})

function Demo() {
  return <div>Example label</div>
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
- For the component's own public props, identify fixed value sets such as union types, enums, CVA variants, and documented options, then show examples for every practical value in the demo suite.
- Prioritize complete coverage for props such as `size`, `tone`, `color`, `variant`, `placement`, `align`, `side`, and boolean state props. Inherited native HTML/Radix props can be demonstrated selectively when they clarify real usage; they do not need exhaustive examples.
- Keep each demo focused on one concept. Add another demo instead of making a single example do too many jobs.
- Prefer the UI library's own components from `src/components/ui` for demo controls, surfaces, labels, form fields, tables, tags, buttons, and supporting composition whenever a matching primitive exists.
- Do not recreate an existing UI component's appearance with raw HTML and Tailwind inside demos. Use raw elements only for minimal semantic wrappers, native behavior that has no matching UI primitive, or layout glue around the component being demonstrated.
- Prefer shared Tailwind tokens exposed through `src/tokens.css` and `src/globals.css` for colors, surfaces, borders, shadows, spacing, and radius before raw values, one-off hex colors, or arbitrary Tailwind classes.
- Prefer local preview helpers before adding new dependencies.
- Keep examples copyable through shadcn: do not rely on app-specific stores, routes, network calls, or hidden preview-only state unless the demo is explicitly about that integration.
- Keep rendered demo example content in English literals so source previews stay copyable and do not depend on preview-only i18n helpers.
- Preserve the handbook sticker visual language with warm paper surfaces, ink outlines, hard shadows, tactile states, and clear semantic structure.
- Use semantic HTML and accessible names for interactive examples. Demonstrate keyboard and ARIA behavior when that is part of the component contract.

## I18n Rules

- Always provide i18n-backed `meta.titleKey` and `meta.descriptionKey`; preview page chrome, docs, API tables, and prop descriptions should keep using preview i18n.
- Do not import `usePreviewI18n()` only to render demo example labels, button text, captions, helper text, statuses, placeholder copy, or table rows. Write that example content directly in English.
- Keep code identifiers, prop names, path fragments, literal API values, and demo example content in English.
- Add preview i18n keys in the same change only when changing metadata, page chrome, generated API docs, prop descriptions, or a demo whose purpose is explicitly to demonstrate localization.

## Component Preview Pages

For component pages, prefer `createComponentPreviewPage` from `@/layouts/preview`. It keeps rendered demos, raw source previews, source paths, and API table wiring consistent:

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

Use hand-written `PreviewDemoPage` / `getPreviewDemoExamples` only when a preview page genuinely needs custom layout or trailing content that `createComponentPreviewPage` cannot express.

## Review Checklist

Before finishing demo work:

- Every demo exports `Demo` and `meta` as named exports.
- `meta.titleKey` and `meta.descriptionKey` exist in preview i18n resources.
- Rendered demo example strings are English literals unless the demo is explicitly about localization.
- Demo order is deliberate and stable.
- Raw source previews still match rendered demo modules.
- New examples show meaningful component behavior, not duplicate decorative states.
- Run the narrowest relevant verification. For normal edits, use `pnpm lint:fix`.
- Run `pnpm build:preview` when changing preview loading, page templates, or demo source rendering behavior.
