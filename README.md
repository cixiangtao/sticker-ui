# sticker-ui

A source-first React + Tailwind component library with a handbook sticker visual language.

## Direction

- Components are distributed as source code through a shadcn-compatible registry.
- React, Tailwind, and Radix primitives form the baseline UI stack.
- Component icons should prefer `lucide-react` before custom CSS/SVG shapes.
- Visual style is intentionally independent from shadcn/ui.
- Registry components keep extra runtime dependencies minimal and declare non-baseline dependencies only when they provide clear component-level value.

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

If you use floating components such as Dialog, Popover, Select, or Tooltip,
install `tailwindcss-animate` and add the plugin to the same CSS entry:

```bash
npm install tailwindcss-animate
```

```css
@plugin "tailwindcss-animate";
```

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

## Export Style

- Prefer named exports throughout source files. Components, preview pages,
  demo metadata, helpers, and public package entry points should export their
  APIs with `export { Name }` and `export type { NameProps }`.
- Do not add new `export default` declarations in project source. Default
  exports are only allowed where an external tool or asset module requires
  that shape, such as Vite/Tsup/Oxlint config files or generated declarations
  for JSON modules.
