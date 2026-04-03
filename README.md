# sticker-ui

A source-first React + Tailwind component library with a handbook sticker visual language.

## Direction

- Components are installed as a package by default, with source available through
  a shadcn-compatible registry when projects need to customize internals.
- React, Tailwind, and Radix primitives form the baseline UI stack.
- Component icons should prefer `lucide-react` before custom CSS/SVG shapes.
- Visual style is intentionally independent from shadcn/ui.
- Registry components keep extra runtime dependencies minimal and declare non-baseline dependencies only when they provide clear component-level value.

## Install Shape

### Environment requirements

Use `sticker-ui` in a React app that can run Tailwind CSS v4 and import CSS from
installed npm packages:

- `react` `^18.0.0 || ^19.0.0`
- `react-dom` `^18.0.0 || ^19.0.0`
- `tailwindcss` `^4.0.0`
- A modern bundler setup such as Vite, Next.js, or an equivalent toolchain that
  supports package CSS imports from `node_modules`.

For local development in this repository, use the pinned package manager from
`package.json`: `pnpm@10.17.1`.

### Package install

Install the package when you want components managed by npm and imported from
the package root:

```bash
pnpm add sticker-ui
```

Import components from the package root:

```tsx
import { Button, Card, Dialog } from "sticker-ui"
```

Compound components use the main namespace from the same import:

```tsx
import { Card, Dialog, Select } from "sticker-ui"

function Example() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Release checklist</Card.Title>
        </Card.Header>
      </Card>

      <Dialog>
        <Dialog.Content />
      </Dialog>

      <Select>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="preview">Preview</Select.Item>
        </Select.Content>
      </Select>
    </>
  )
}
```

Add Sticker UI tokens to your Tailwind entry CSS:

```css
@import "tailwindcss";
@import "sticker-ui/tokens.css";
@source "../node_modules/sticker-ui";
```

The package does not ship precompiled component CSS. It only exposes React
components and Tailwind tokens, so consuming projects stay in control of their
own generated CSS.

To modify the built-in Sticker UI tokens, declare the same `su` theme variables
after `sticker-ui/tokens.css` in your app CSS. Do not edit the package file in
`node_modules`; let your app own the override layer:

```css
@import "tailwindcss";
@import "sticker-ui/tokens.css";
@source "../node_modules/sticker-ui";

@theme inline {
  --color-su-ink: #202331;
  --color-su-paper: #fffaf0;
  --color-su-fill-default: #ffd166;
  --radius-su-lg: 18px;
  --shadow-su-md: 4px 4px 0 var(--color-su-ink);
}
```

Keep the existing token names when you want Sticker UI utilities and components
to inherit the change:

- `--color-su-*` drives utilities such as `bg-su-fill-default`,
  `text-su-ink`, and `border-su-ink`.
- `--radius-su-*` drives utilities such as `rounded-su-lg`.
- `--shadow-su-*` drives utilities such as `shadow-su-md`.

Add new `su` tokens only when your own app needs additional utilities. To
retune the shipped components, prefer overriding the existing token names.

### Motion setup

Floating components such as Dialog, Popover, Select, and Tooltip use
`tailwindcss-animate` for enter and exit motion. Add it only when your project
uses those components:

```bash
pnpm add tailwindcss-animate
```

Then add the plugin to the same Tailwind entry CSS:

```css
@plugin "tailwindcss-animate";
```

### Source customization

Use the shadcn-compatible registry only when a project needs to copy and edit
component source:

```bash
npx shadcn@latest add https://your-domain.com/r/button.json --dry-run
npx shadcn@latest add https://your-domain.com/r/button.json
```

Run the final `add` command without `--overwrite` so shadcn asks before
replacing any local files with the same names. Use `--diff` for a closer look
at a conflict before choosing whether to overwrite it.

### Maintainer workflow

Run the local Vite preview with:

```bash
pnpm run dev
```

Local registry files are generated with:

```bash
pnpm run build:registry
```

Preview API docs, route type-checking, and the production preview build run with:

```bash
pnpm run build:preview
```

Check the package release surface without publishing:

```bash
pnpm run release:check
```

Preview the version bump, git tag, and npm publish flow:

```bash
pnpm run release:dry
```

Publish a new npm release:

```bash
pnpm run release
```

The release flow uses `release-it` to run the package checks, bump
`package.json`, create a `v${version}` tag, push the release commit and tag, and
publish the package to npm with public access.

## Structure

```txt
registry/
  default/
    button/
      button.tsx
    card/
      card.tsx
docs/
src/
registry.json
components.json
vite.config.ts
```

## Export Style

- Prefer named exports throughout source files. Components, preview pages,
  demo metadata, helpers, and source component files should export their APIs
  with `export { Name }` and `export type { NameProps }`.
- Compound component source files should keep named exports for each
  subcomponent so TSDoc, API docs, and shadcn-copied source stay clear. The
  package entry should expose the main namespace component only, so package
  usage reads as `Dialog.Content`, `Card.Header`, or `Select.Item`.
- Do not add new `export default` declarations in project source. Default
  exports are only allowed where an external tool or asset module requires
  that shape, such as Vite/Tsup/Oxlint config files or generated declarations
  for JSON modules.
