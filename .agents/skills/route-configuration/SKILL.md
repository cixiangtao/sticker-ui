---
name: route-configuration
description: Work with sticker-ui's TanStack Router configuration layer. Use when adding preview pages, changing src/router/routes.ts, route meta, nav grouping, menu behavior, current-route data, redirects, route params, or when the user mentions routing, router, RouteConfig, buildRouteTree, defineRoutes, useCurrentRoute, or page registration.
---

# Route Configuration

## Use When

Use this skill for routing and preview navigation work in `sticker-ui`:

- Add, remove, rename, hide, or regroup a preview route.
- Register a new page under `src/pages`.
- Change route `meta`, menu order, title, description, emoji, icon, or `navSection`.
- Change preview navigation, route-derived page state, breadcrumbs, or params.
- Add a redirect or a custom `beforeLoad` guard.
- Decide whether a component preview page should appear in the sidebar or overview data.

For new registry UI components, also use `registry-preview-workflow`.

## Current Architecture

Core files:

- `src/router/routes.ts`: declares the preview route config with `defineRoutes`.
- `src/router/index.tsx`: creates the root route, hash history router, and route tree.
- `src/router/helper.ts`: defines `RouteConfig`, `RouteMeta`, `buildRouteTree`, `defineRoutes`, and `generateMenuItems`.
- `src/router/hooks.ts`: exposes `useCurrentRoute`, `useMatchedRoutes`, and `useRouteParams`.
- `src/preview-data.ts`: derives preview navigation groups, component file data, and overview data from the route config and filesystem data.

The project keeps route declarations config-driven and named-export based:

```ts
{
  component: () =>
    import("@/pages/components/button").then((module) => module.ButtonPage),
  meta: {
    description: "Tactile command surface for primary actions.",
    emoji: "B",
    navSection: "actions",
    order: 30,
    title: "Button",
    titleKey: "preview.components.button",
    descriptionKey:
      "preview.components.tactileCommandSurfaceForPrimaryActions",
  },
  path: "/components/button",
}
```

`buildRouteTree(rootRoute, routes)` converts `RouteConfig[]` into TanStack routes. The helper wraps each lazy named page export into the `default` shape TanStack expects internally, so page modules themselves should still use named exports.

## RouteConfig Contract

Use `RouteConfig` for normal preview pages:

- `path`: preview URL path. Root-level routes use absolute paths such as `"/components/button"`.
- `component`: lazy import that resolves to the named page component, for example `module.ButtonPage`.
- `meta`: static page data used by the sidebar, overview page, preview layout, and route hooks.
- `beforeLoad`: optional simple page guard.
- `children`: nested route configs when a future page family genuinely needs nesting.

Use hand-written TanStack routes only when the config model cannot express the behavior.

## Meta Rules

`RouteMeta` supports:

- `title`: English fallback label.
- `titleKey`: preview i18n key for the visible page title or menu label.
- `description`: English fallback description.
- `descriptionKey`: preview i18n key for visible descriptions.
- `emoji` or `icon`: compact visual affordance for navigation surfaces.
- `order`: menu and overview sort weight. Smaller values appear first.
- `navSection`: sidebar group key for component routes, such as `actions`, `surfaces-data`, `feedback-status`, `form-controls`, or `overlays`.
- `hideInMenu`: excludes a route from generated menus and overview lists.
- `permission`: currently part of the shared type, but do not add permission behavior unless the preview app actually implements it.

Keep route metadata as the source of truth for preview navigation. Avoid adding parallel menu-only data when a path segment, `navSection`, or route meta field can express the same thing.

## Adding A Page Route

Follow this workflow:

1. Create the page at `src/pages/<area>/<name>/index.tsx`.
2. Export the page as a named binding, such as `export { ButtonPage }`.
3. Add an entry to `routes` in `src/router/routes.ts`.
4. Resolve the named page export in `component`, for example `import(...).then((module) => module.ButtonPage)`.
5. Provide `meta.title`, `meta.titleKey`, `meta.description`, and `meta.descriptionKey`.
6. Add `meta.order`; add `meta.navSection` for component pages that should appear in a component sidebar group.
7. Add `hideInMenu: true` only for hidden utility pages or routes that should not appear in generated preview navigation.
8. Update preview i18n dictionaries for new `titleKey` and `descriptionKey` values.
9. Run the narrowest relevant check. For route changes, `pnpm lint:fix` is usually enough; for preview chain changes, run `pnpm build:preview`.

## Component Preview Routes

Component preview pages should normally use `createComponentPreviewPage` from `@/layouts/preview`:

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

Keep demo module loading and raw source loading pointed at the same `./demos/*.tsx` glob.

## Menus And Route Hooks

Use existing route helpers and preview data instead of duplicating route state:

- `generateMenuItems(routes)` for pure route-to-menu conversion.
- `useCurrentRoute()` for current page metadata in preview layout components.
- `useMatchedRoutes()` for breadcrumb-like route state.
- `useRouteParams<T>()` for params when strict TanStack path literal inference is not available.
- `src/preview-data.ts` for derived navigation groups and component overview data.

When changing menu behavior, prefer updating route metadata, `helper.ts`, or `preview-data.ts` rather than rebuilding route lists inside visual components.

## Redirects And Guards

Keep routing behavior simple:

- Import `redirect` from `@tanstack/react-router` when a route guard needs to redirect.
- TanStack redirects are thrown.
- Use `replace: true` when preventing stale history entries matters.
- Avoid redirect loops by explicitly skipping the target route.
- Add app-wide behavior in `src/router/index.tsx` only when the whole preview app needs it.
- Keep page-specific checks inside `RouteConfig.beforeLoad` when no TanStack callback arguments are needed.

## Compatibility Constraints

- Use project aliases such as `@/pages/...`.
- Do not introduce another router library or a second route declaration system.
- Keep preview pages, demos, route helpers, and registry entry points on named exports.
- Do not add new `export default` declarations for pages or demos.
- Keep route components lazy-loaded through `component: () => import(...).then(...)`.
- Respect the preview router base path: `createRouter` uses `import.meta.env.BASE_URL`.
- Preserve hash history unless the preview deployment strategy changes.

## Review Checklist

Before finishing routing work:

- The route is registered in exactly one place unless an alias is intentional.
- The page path and lazy import path match the actual file.
- The lazy import resolves a named page export.
- Visible routes have useful `meta.title`, `meta.titleKey`, `descriptionKey`, and sensible `order`.
- Component routes have the right `navSection`.
- Hidden/detail routes use `hideInMenu: true`.
- User-visible route labels and descriptions have preview i18n entries.
- Menu or overview behavior is derived from routes rather than a parallel hard-coded list.
- Redirects cannot loop.
- The relevant check has been run before handoff.
