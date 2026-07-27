# Sticker UI

A React + Tailwind CSS component library with warm paper surfaces, chunky ink
outlines, hard offset shadows, and tactile interactions.

Sticker UI is package-ready and source-first. Install it from npm for managed
updates, or copy individual components through the shadcn-compatible registry
when your project needs full control of the source.

**[View the full documentation on GitHub →](https://github.com/cixiangtao/sticker-ui)**

## Requirements

- React 18 or 19
- React DOM 18 or 19
- Tailwind CSS 4
- A bundler that supports CSS imports from npm packages, such as Vite or Next.js

## Package installation

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
