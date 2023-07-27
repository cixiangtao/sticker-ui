# sticker-ui

A source-first React + Tailwind component library with a handbook sticker visual language.

## Direction

- Components are distributed as source code through a shadcn-compatible registry.
- React and Tailwind are the only required runtime peers.
- Visual style is intentionally independent from shadcn/ui.
- Registry components avoid runtime helpers such as Radix Slot, CVA, clsx, or tailwind-merge.

## Install Shape

Recommended source-first registry install:

```bash
npx shadcn@latest add https://your-domain.com/r/button.json
```

Or with a namespace registry:

```bash
npx shadcn@latest add @handdrawn/button
```

Local registry builds are generated with:

```bash
npm run build:registry
```

Package install is available for React + Tailwind projects that prefer imports:

```tsx
import { Button } from "sticker-ui"
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

Run the local Vite preview with:

```bash
npm run dev
```

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
