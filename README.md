# Sticker UI

A React + Tailwind CSS component library with warm paper surfaces, chunky ink
outlines, hard offset shadows, and tactile interactions.

**[Explore the live preview and component docs](https://sticker-ui-preview.cixiangtao-ky.chatgpt.site)**

Sticker UI is package-ready and source-first. Install it from npm for managed
updates, or copy individual components through the shadcn-compatible registry
when your project needs full control of the source.

## Highlights

- A cohesive handbook sticker visual language built with shared Tailwind tokens.
- Accessible React primitives powered by Radix where richer behavior is needed.
- Compound APIs such as `Card.Header`, `Dialog.Content`, and `Select.Item`.
- Source files that stay readable and practical after a registry install.
- Tailwind CSS v4 tokens that can be overridden without editing component code.
- Interactive previews, usage examples, source views, and generated API docs.

## Requirements

- React 18 or 19
- React DOM 18 or 19
- Tailwind CSS 4
- A bundler that supports CSS imports from npm packages, such as Vite or Next.js

## Choose an installation mode

|              | npm package           | Source registry             |
| ------------ | --------------------- | --------------------------- |
| Best for     | Managed upgrades      | Local customization         |
| Install with | `pnpm add sticker-ui` | `npx shadcn@latest add ...` |
| Import from  | `sticker-ui`          | Your local component path   |
| Ownership    | Package-managed       | Application-owned source    |

## Package installation

Install Sticker UI:

```bash
pnpm add sticker-ui
```

Add Tailwind and the Sticker UI tokens to your application stylesheet:

```css
@import "tailwindcss";
@import "sticker-ui/tokens.css";
@source "../node_modules/sticker-ui";
```

Sticker UI ships React components and Tailwind tokens rather than a precompiled
component stylesheet. The `@source` directive lets Tailwind generate the
utilities used by the installed components.

Import components from the package root:

```tsx
import { Button, Card } from "sticker-ui"

function ReleaseCard() {
  return (
    <Card>
      <Card.Header decoration>
        <Card.Title>Ready to ship</Card.Title>
        <Card.Description>
          The preview and registry builds are passing.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Button>Publish release</Button>
      </Card.Content>
    </Card>
  )
}
```

Compound components are exposed through their main namespace. Prefer
`Dialog.Content`, `Select.Item`, or `Checkbox.Group` over importing internal
subcomponents from the package.

## Source registry installation

Copy a component into your project when you want to own and modify its source:

```bash
npx shadcn@latest add https://sticker-ui-preview.cixiangtao-ky.chatgpt.site/r/button.json --dry-run
npx shadcn@latest add https://sticker-ui-preview.cixiangtao-ky.chatgpt.site/r/button.json
```

Browse the [component preview](https://sticker-ui-preview.cixiangtao-ky.chatgpt.site)
to find component names, then replace `button` in the URL with the component you
need. The complete registry index is available at
[`/r/registry.json`](https://sticker-ui-preview.cixiangtao-ky.chatgpt.site/r/registry.json).

Run the final command without `--overwrite` so shadcn asks before replacing
files. Use `--diff` when you want to inspect a conflict first.

## Motion setup

Floating components such as Dialog, Popover, Select, and Tooltip use
`tailwindcss-animate` for enter and exit motion. Add it when your application
uses one of those components:

```bash
pnpm add tailwindcss-animate
```

Register the plugin in the same Tailwind entry stylesheet:

```css
@plugin "tailwindcss-animate";
```

## Theme customization

Sticker UI exposes its visual system through `su` theme variables. Override the
existing tokens after importing `sticker-ui/tokens.css`:

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

Keep the existing token names to retune the shipped components and utilities:

- `--color-su-*` controls paper, ink, accent, and semantic colors.
- `--radius-su-*` controls the shared corner-radius scale.
- `--shadow-su-*` controls the hard offset elevation scale.

Add new `su` tokens only when your application needs additional utilities.

## Local development

This repository uses the pnpm version pinned in `package.json`.

```bash
pnpm install
pnpm dev
```

The local preview runs at [http://localhost:7777](http://localhost:7777).

| Command               | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| `pnpm dev`            | Start the local preview on port 7777            |
| `pnpm lint:fix`       | Format, lint, and type-check the project        |
| `pnpm build:registry` | Generate the shadcn-compatible registry output  |
| `pnpm build:preview`  | Generate API docs and build the preview site    |
| `pnpm release:check`  | Validate the package surface without publishing |
| `pnpm release:dry`    | Preview the version, tag, and npm release flow  |

## Repository structure

```text
src/
  components/ui/        # Canonical component source
  pages/components/     # Preview demos
  generated/            # Generated preview API docs
  tokens.css            # Public Tailwind theme tokens
public/r/                # Generated registry JSON
registry.json            # Registry definitions
```

Component source lives in `src/components/ui`. Files under `public/r` are
generated delivery artifacts and should not be edited by hand.

## Project conventions

- Prefer named exports throughout project source.
- Keep compound subcomponent exports in their canonical source file, while the
  package entry exposes the main namespace component.
- Document public component APIs with TSDoc comments.
- Declare focused runtime dependencies on the registry item that needs them.
- Preserve accessible semantics alongside the handbook sticker visual style.
