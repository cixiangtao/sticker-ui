# Sticker UI Component Roadmap

> **For agentic workers:** REQUIRED SUB-SKILL: Use `handbook-sticker-ui` when implementing visual components. Use Radix primitives for complex interaction components when they improve accessibility, focus management, keyboard navigation, portal behavior, or positioning.

**Goal:** Expand `sticker-ui` from the current `Button`, `Card`, and `Tag` set into a source-first React + Tailwind component registry with a consistent handbook sticker visual language.

**Architecture:** Keep presentational components dependency-light with React and Tailwind. Use Radix for complex interactive primitives, but declare those dependencies per registry item instead of making the whole library depend on Radix. Every component should ship as source through the shadcn-compatible registry and include a preview page.

**Tech Stack:** React, TypeScript, Tailwind CSS, Vite preview app, shadcn-compatible registry, Radix UI where appropriate.

---

## Component Strategy

### Pure React + Tailwind Components

Use pure React and Tailwind when the component is mostly presentational or has simple native behavior.

- `Button`
- `Card`
- `Tag`
- `Badge`
- `Alert`
- `Separator`
- `Skeleton`
- `Spinner`
- `Input`
- `Textarea`
- `Label`
- `Field`
- `Callout`
- `Empty State`
- `Code Block`
- `Stat Card`

### Radix-Backed Components

Use Radix when the component needs robust accessibility behavior, keyboard interactions, focus handling, portals, positioning, or controlled/uncontrolled state.

- `Dialog`
- `Alert Dialog`
- `Tooltip`
- `Hover Card`
- `Popover`
- `Dropdown Menu`
- `Context Menu`
- `Select`
- `Radio Group`
- `Checkbox`
- `Switch`
- `Slider`
- `Tabs`
- `Accordion`
- `Toast`

## Registry Rules

- Each component lives in `src/components/ui/<component>.tsx`.
- Each component is listed in `registry.json`.
- Each generated install file lives in `public/r/<component>.json`.
- Do not add component source under `registry/default`; registry output is generated from the `src/components/ui` source referenced by `registry.json`.
- Components with Radix dependencies declare those dependencies in their own registry item.
- Simple components should not import Radix.
- Keep source files self-contained and avoid registry-wide runtime helpers unless the project intentionally introduces a shared utility package.

## Preview Rules

Every component gets a preview page and navigation entry:

- Add the route id to `src/preview-data.ts`.
- Add a nav item under the correct group in `src/preview-data.ts`.
- Add the component to `COMPONENT_FILES` in `src/preview-data.ts`.
- Add a page under `src/pages/components/<component>/index.tsx`.
- Add the page implementation or export in the preview app pattern used by the project.
- Demonstrate variants, sizes, disabled state, focus behavior, and realistic composition.

## Visual Rules

- Use warm paper backgrounds, chunky ink borders, and hard offset shadows.
- Keep nested content quieter than outer cards.
- Use tactile hover and active states on interactive components.
- Preserve strong focus-visible rings.
- Avoid making every element equally heavy; page title and primary action should read first.
- Keep component docs scannable on mobile and desktop.

---

## Phase 1: Foundation Inputs

Build the components needed by most future forms and demos.

### Components

- `Input`
- `Textarea`
- `Label`
- `Field`
- `Checkbox`
- `Radio Group`
- `Switch`

### Notes

- `Input`, `Textarea`, `Label`, and `Field` should be pure React + Tailwind.
- `Checkbox`, `Radio Group`, and `Switch` can use Radix because they benefit from accessible state and keyboard behavior.
- Make `Field` useful for label, description, error, and control layout without becoming a full validation framework.

### Suggested Commits

- `feat: add sticker input primitives`
- `feat: add sticker choice controls`
- `docs: add form component previews`

---

## Phase 2: Feedback Components

Build status and response components for forms, previews, and app surfaces.

### Components

- `Alert`
- `Badge`
- `Progress`
- `Skeleton`
- `Spinner`
- `Toast`

### Notes

- `Alert`, `Badge`, `Progress`, `Skeleton`, and `Spinner` can be pure React + Tailwind.
- `Toast` should use Radix Toast for viewport placement, swipe behavior, timing, and accessibility.
- `Badge` should be visually distinct from `Tag`: badges are compact status markers; tags are metadata labels.

### Suggested Commits

- `feat: add sticker feedback components`
- `feat: add radix toast component`
- `docs: add feedback component previews`

---

## Phase 3: Core Overlays And Navigation

Build the complex interactive components that make the library broadly useful.

### Components

- `Dialog`
- `Alert Dialog`
- `Tooltip`
- `Popover`
- `Dropdown Menu`
- `Select`
- `Tabs`
- `Accordion`

### Notes

- These should be Radix-backed.
- Export composable subcomponents, not single monolithic components.
- Keep Radix behavior intact: focus trap, escape handling, keyboard navigation, roles, ARIA, and portal behavior.
- Style the wrapper parts with handbook sticker surfaces, but avoid over-decorating menus and dense lists.

### Suggested Commits

- `feat: add sticker dialog components`
- `feat: add sticker popup primitives`
- `feat: add sticker select and tabs`
- `docs: add interactive component previews`

---

## Phase 4: Data And Documentation Components

Build components that help the preview app and documentation pages feel complete.

### Components

- `Table`
- `Pagination`
- `Breadcrumb`
- `Command`
- `Empty State`
- `Code Block`
- `Callout`
- `Timeline`
- `Stat Card`

### Notes

- `Table`, `Pagination`, `Breadcrumb`, `Empty State`, `Code Block`, `Callout`, `Timeline`, and `Stat Card` can be pure React + Tailwind.
- `Command` may need a focused implementation decision later: simple searchable list first, command palette behavior later.
- Keep data-heavy components less playful than marketing-style cards so they remain readable.

### Suggested Commits

- `feat: add sticker documentation components`
- `feat: add sticker data display components`
- `docs: expand registry usage previews`

---

## Phase 5: Registry And Documentation Polish

Make the component library easier to consume and maintain.

### Work Items

- Update `README.md` to state that complex components may use Radix.
- Document the dependency policy for registry items.
- Add install examples for simple and Radix-backed components.
- Add a component status matrix.
- Add visual QA guidance for desktop and mobile preview checks.
- Run `npm run build:registry` after each component batch.
- Run `npm run build` before marking a phase complete.

### Suggested Commits

- `docs: document radix dependency policy`
- `docs: add component roadmap and status matrix`
- `chore: rebuild registry artifacts`

---

## First Implementation Batch

Start with this smallest useful batch:

1. `Input`
2. `Textarea`
3. `Label`
4. `Field`
5. `Checkbox`
6. `Switch`
7. `Alert`

This batch gives the library enough form and feedback coverage to support realistic demos before adding heavier Radix overlay components.

## Second Implementation Batch

After the first batch lands, build:

1. `Dialog`
2. `Tooltip`
3. `Popover`
4. `Select`
5. `Tabs`

This batch establishes the Radix-backed component pattern that later components can follow.
