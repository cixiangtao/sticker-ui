---
name: handbook-sticker-ui
description: Create playful handbook-style sticker components and panel interfaces with warm paper backgrounds, chunky dark outlines, semantic HTML, accessibility support, semantic slots/classNames, component identifiers, offset hard shadows, emoji badges, directory cards, Radix-powered complex interactions when useful, and tactile UI details. Use this skill whenever designing or restyling React/Tailwind components, pages, dashboards, navigation hubs, demo indexes, learning apps, kid-friendly tools, pet/mascot products, component registries, or when the user asks for a vivid hand-drawn notebook, sticker, scrapbook, toy-like, cute, playful, or eye-catching UI style.
---

# Handbook Sticker UI

## Use This Style When

Apply this skill when components or pages should feel friendly, memorable, tactile, and less like a generic SaaS dashboard.

Good fits:

- Navigation hubs, demo indexes, dashboards, settings pages, onboarding menus.
- Reusable React/Tailwind components that need a strong visual personality.
- Learning products, pet/mascot apps, kids or family products, creator tools.
- Pages that need personality while keeping a clear information hierarchy.

Avoid this style for dense enterprise admin tables, finance/legal workflows, medical workflows, or anything where playful visuals would reduce trust.

## Visual Direction

Build a "handbook directory with sticker cards" interface:

- Warm paper canvas: use project tokens such as `bg-su-canvas`, `bg-su-paper`, `bg-su-surface`, and `bg-su-fill-default`.
- Chunky ink outlines: use `border-su-ink` and `text-su-ink` before raw hex values.
- Hard offset shadows: use `shadow-su-*` tokens before arbitrary shadow values.
- Sticker cards: rounded rectangles, thick left borders, emoji or icon badges, slight rotations.
- Tactile controls: buttons and links should move like pressed paper tabs.
- Decorative geometry: circles, labels, tape strips, dots, and grid-paper backgrounds.
- Clear hierarchy: reserve the heaviest borders, shadows, and `font-black` text for outer panels, page titles, primary actions, and one or two focal stickers.

The result should look intentionally illustrated, not randomly colorful.

## Hierarchy Calibration

The style fails when every element has the same visual weight. Keep the sticker personality, but distribute emphasis deliberately:

- Outer panels can use `border-[3px]` and `shadow-su-2xl`.
- Standard cards should usually use `border-2` and a smaller shadow such as `shadow-su-lg`.
- Nested content blocks should prefer a thin border, left accent border, or soft fill instead of another hard shadow.
- Use `font-black` for page titles, card titles, icon badges, and primary actions. Use `font-extrabold`, `font-bold`, or `font-medium` for navigation labels, metadata, descriptions, and code chips.
- Status pills should be quieter than the item title: smaller text, thinner border, muted color, and no hard shadow unless the status itself is the key content.
- Grid paper, dashed dividers, and decorative marks should be lighter than content borders, usually around `rgba(46,48,56,0.04)` to `rgba(46,48,56,0.06)`.

Before finishing, squint at the screen: the page title and current task should pop first, then section titles, then body text, then decoration.

## Component Recipe

When styling an individual component, keep the structure compact and tactile:

1. Give the outer container a thick ink border, warm fill, and hard offset shadow.
2. Add one clear badge, icon, number pill, or label as the visual hook.
3. Use high-contrast headings and concise supporting text.
4. Make actions feel physical with hover lift and active press states.
5. Reduce nested blocks to lighter borders, small shadows, or accent edges so the text stays dominant.
6. Keep decorative elements `pointer-events-none` and out of the reading order.

For lists of repeated items, vary only the accent color, badge, and small rotation. Keep spacing and hierarchy consistent so the UI remains scannable.

## Component Architecture

Default to simple React and Tailwind for presentational components. Reach for Radix primitives when the component has complex behavior, accessibility requirements, focus management, keyboard navigation, portals, positioning, or controlled/uncontrolled state that would be risky to hand-roll.

Good Radix-backed candidates:

- Dialog, Alert Dialog, Drawer-style overlays, and popovers.
- Tooltip, Hover Card, Dropdown Menu, Context Menu, and Menubar.
- Select, Radio Group, Checkbox, Switch, Slider, Tabs, Accordion, and Toast.

Good pure React/Tailwind candidates:

- Button, Card, Badge, Tag, Alert, Separator, Skeleton, Input, Textarea, Label, Callout, Empty State, Code Block, and Stat Card.

When using Radix:

- Keep the sticker visual language in wrapper components, not in application call sites.
- Export composable subcomponents such as `DialogContent`, `DialogHeader`, `DialogTitle`, and `DialogFooter`.
- Preserve Radix accessibility props and behavior; do not remove ARIA attributes, focus trapping, portal behavior, or keyboard interactions.
- Add dependencies only to the component or registry item that needs them instead of making every component depend on Radix.
- Use `asChild` only when it improves composition and the project already accepts that pattern.

## Semantic Slots And Accessibility

Components must be semantic first:

- Use native semantic elements before generic `div`/`span`: `button`, `a`, `section`, `article`, `header`, `footer`, `nav`, `ul`, `ol`, `li`, `table`, `thead`, `tbody`, `tr`, `th`, `td`, `label`, `input`, and heading levels that match the page outline.
- Add an accessibility mode or accessibility affordances when the component has motion, dense decoration, icon-only controls, drag/gesture behavior, color-coded state, keyboard interaction, or custom interactive surfaces.
- Keep keyboard access, focus order, focus-visible rings, accessible names, text alternatives, contrast, and reduced-motion states intact.
- Prefer `aria-label`, `aria-labelledby`, `aria-describedby`, `role`, and `aria-*` only when they express real accessibility semantics. Do not use ARIA as a styling or testing hook.
- Add stable component and slot identifiers with `data-name`, `data-slot`, or similar `data-*` attributes. Use ARIA names only when the value should be exposed to assistive technology.
- Treat `className` as the public styling API for the component root. Conceptually, `className` is `classNames.root`; do not expose both for the same component because it makes customization rules harder to learn.
- Keep slot names semantic and product-readable: use names such as `root`, `header`, `title`, `description`, `badge`, `icon`, `content`, `actions`, `item`, `trigger`, `viewport`, `indicator`, and `emptyState`, not visual-only names such as `blueBox`, `leftThing`, or `bigText`.
- Decorative sticker details must be `aria-hidden="true"` and `pointer-events-none` unless they convey content.

Prefer compositional components over aggregate styling props. If users need to style several visible parts, export those parts as components and give each root its own `className`:

```tsx
<Card className="...">
  <CardHeader className="..." />
  <CardContent className="..." />
  <CardFooter className="..." />
</Card>
```

Use `data-slot` on meaningful internal elements as stable low-level CSS hooks, but do not turn every internal element into a public `classNames` prop. Reach for `classNames` / `styles` only for genuinely aggregate components where users cannot or should not compose the internal parts directly, such as a DatePicker, complex Select, or a single high-level component that owns trigger, popover, list, and item rendering.

For those aggregate exceptions, expose semantic slot styling through `classNames` and `styles`, and avoid duplicating `className` with `classNames.root`. Prefer this pattern:

```tsx
import type { CSSProperties } from "react";

type CSSVariables = Record<`--${string}`, number | string | undefined>;

/**
 * 组件插槽样式 props 工具类型。
 *
 * 从一份「slot 定义表」派生成对的 `classNames` / `styles` 对象：
 * - 定义表的 key 即插槽名
 * - 定义表的 value 仅作占位，无运行时意义，统一写 `unknown` 即可
 * - **在 key 上书写的 JSDoc 会被 IDE 透传到 `classNames` / `styles` 的同名字段**
 *
 * 由于使用了同态（homomorphic）mapped type `[K in keyof T]`，TS 会保留源 key 的注释与修饰符，
 * 从而在保证"插槽名只写一次"的前提下，兼顾单 slot 级别的 JSDoc 提示。
 *
 * @example
 * type QuestCardSlots = {
 *   // 卡片根容器
 *   root: unknown;
 *   // 右上角"新"消息角标
 *   badge: unknown;
 *   // 卡片主图
 *   image: unknown;
 * };
 *
 * export function QuestCard(
 *   props: SlotProps<QuestCardSlots> & { onClick?: () => void }
 * ) { ... }
 */
export interface SlotProps<T> {
  /** 各插槽的自定义 className */
  classNames?: { [K in keyof T]?: string };
  /** 各插槽的自定义 style */
  styles?: { [K in keyof T]?: CSSProperties & CSSVariables };
}
```

## Page Layout Recipe

Default composition:

1. Use a two-panel layout for desktop:
   - Left panel: cover, introduction, count, or data source.
   - Right panel: directory list, route cards, or action cards.
2. Give both panels thick borders and hard shadows.
3. Use a subtle paper grid background:
   - `bg-[linear-gradient(90deg,rgba(46,48,56,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(46,48,56,0.04)_1px,transparent_1px)]`
   - `bg-[length:28px_28px]`
4. Keep cards compact and scannable:
   - emoji badge
   - number pill
   - title
   - one-line or two-line description
   - path/status/action affordance

For smaller surfaces, collapse to a single column while keeping the cover block first.

## Tailwind Patterns

### Shadcn-Style Component Styling

When authoring registry components, follow the shadcn-style split between semantic theme utilities, native Tailwind structure utilities, and small component-local CSS variables:

- Use semantic Tailwind theme utilities for fixed project tokens, such as `border-su-ink`, `bg-su-surface`, `text-su-ink`, `bg-su-fill-default`, `rounded-su-lg`, `shadow-su-md`, and `text-su-fg-muted`. These are generated from `@theme inline` variables in `src/tokens.css`, which is imported by `src/globals.css`, and keep component code readable.
- Use native Tailwind border width utilities for border thickness: `border`, `border-2`, `border-[3px]`, and `border-l-[8px]`. Avoid project-specific border-width token classes inside components that pass through `cn()` / `tailwind-merge`; they can be misclassified as border-color utilities and removed when combined with `border-su-ink`.
- Keep fixed ink outlines explicit and semantic: prefer `border-2 border-su-ink` for standard interactive controls and `border-[3px] border-su-ink` for heavyweight panels.
- Use component-local CSS variables only when a variant axis needs to change the same slot across many variants. For example, a button color variant can define `[--button-fill:var(--color-su-fill-default)]` and variants can consume it with `bg-[var(--button-fill)]`.
- Do not introduce local variables for values that are fixed across the component. If all tactile buttons should use the ink outline, write `border-su-ink` directly instead of defining `--button-border`.
- Keep `className={cn(...)}` as the public escape hatch, but remember that `tailwind-merge` understands built-in Tailwind classes better than project-specific utilities. When adding a new custom utility that overlaps Tailwind groups, quickly test representative combinations such as `border-2 border-su-ink`.
- Match shadcn's structure: use `cva()` for variant maps, semantic utilities in variant strings, native sizing/spacing classes, and `cn(buttonVariants({ ... }), className)` for consumer overrides.

Useful token families:

- Color: `bg-su-canvas`, `bg-su-paper`, `bg-su-surface`, `bg-su-fill-default`, `bg-su-fill-info`, `bg-su-fill-success`, `bg-su-fill-warning`, `bg-su-fill-danger`, `text-su-ink`, `text-su-fg-muted`, `text-su-fg-info`, `text-su-fg-success`, `text-su-fg-warning`, `text-su-fg-danger`.
- Radius: `rounded-su-xs` through `rounded-su-panel`.
- Shadow: `shadow-su-xs` through `shadow-su-2xl`.

Use raw hex values only when introducing a genuinely new accent that is not already represented in `src/tokens.css`.

Panel:

```tsx
className =
  "rounded-su-panel border-[3px] border-su-ink bg-su-surface p-[22px] shadow-su-2xl"
```

Cover panel:

```tsx
className =
  "rounded-su-panel border-[3px] border-su-ink bg-su-fill-default p-[28px] shadow-su-2xl"
```

Sticker card:

```tsx
className =
  "rounded-su-3xl border-2 border-l-[8px] border-su-ink bg-su-fill-info px-[20px] py-[16px] shadow-su-lg transition hover:translate-y-[-3px] hover:shadow-su-xl active:translate-y-[2px] active:shadow-su-sm"
```

Nested note:

```tsx
className =
  "rounded-su-lg border border-su-ink bg-white px-4 py-3 text-sm font-medium leading-6"
```

Emoji badge:

```tsx
className =
  "flex h-[58px] w-[58px] -rotate-3 items-center justify-center rounded-su-xl border-2 border-su-ink bg-su-surface text-[29px] shadow-su-md transition-transform group-hover:rotate-3"
```

Accent palette:

```tsx
const CARD_ACCENTS = [
  "border-l-su-accent-info bg-su-fill-info text-su-fg-info",
  "border-l-su-accent-secondary bg-su-fill-secondary text-su-fg-secondary",
  "border-l-su-accent-success bg-su-fill-success text-su-fg-success",
  "border-l-su-accent-warning bg-su-fill-warning text-su-fg-warning",
  "border-l-su-accent-danger bg-su-fill-danger text-su-fg-danger",
]
```

## Interaction Details

- Hover: lift by `-translate-y-[3px]` and increase the hard shadow.
- Active: translate down and reduce the hard shadow.
- Badge: rotate slightly on hover.
- Arrow/action chip: move right by `translate-x`.
- Keep transitions short: `duration-300` is enough.

## Typography

- Use a rounded or friendly display font for titles when available.
- Use a practical sans font for descriptions.
- Titles can be large and confident; component headings should be smaller and tighter.
- Do not use `font-black` as the default weight. If everything is black-weight, nothing reads as important.
- Use uppercase tracking only for small labels, not body copy.

## Implementation Checklist

- Keep the data model clean; do not hard-code page lists in visual components if route/menu metadata exists.
- Preserve semantic HTML and accessibility: links must remain real links, buttons must remain real buttons, text contrast must be strong, hover is not the only signal, and reduced-motion users must not lose meaning.
- Add stable component identifiers such as `data-name` and semantic slot identifiers such as `data-slot` for component roots and meaningful parts.
- Expose multi-part component styling through semantic `classNames` / `styles` slot props when consumers need per-slot customization.
- Audit visual hierarchy: page title first, active route or key card second, descriptions third, decoration last.
- Keep decorative elements `pointer-events-none`.
- Avoid modern CSS that may break older Chromium targets unless the project supports it.
- Prefer Tailwind utility classes and existing project helpers such as `cn()`.
- Run the project lint/build checks after editing.

## Example Use

When asked to "make this navigation page more interesting", produce a page with:

- paper-grid background
- left illustrated cover panel
- right directory panel
- thick ink outlines
- hard offset shadows
- colorful sticker cards generated from route/menu data
- emoji badges and numbered pills
