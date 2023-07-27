---
name: route-configuration
description: Work with this project's TanStack Router configuration abstraction. Use when adding pages, changing routes, route meta, navigation menus, redirects, permission guards, route params, standalone demo routes, or when the user mentions routing, router, RouteConfig, buildRouteTree, beforeLoad, menu generation, or page registration.
---

# Route Configuration

## Use When

Use this skill for routing work in Ada Study Pet and similar TanStack Router projects that use a Vue Router style config layer.

Typical triggers:

- Add, remove, rename, or hide a route.
- Register a new page under `src/pages`.
- Change route `meta`, menu order, title, description, emoji, icon, or permission.
- Add redirects, aliases, global guards, or page-level guards.
- Work with route params, breadcrumbs, matched routes, or authorized menus.
- Decide whether a dev/demo page should bypass product unlock guards.

## Current Architecture

Core files:

- `src/router/index.ts`: declares `routes`, root route, redirects, aliases, router instance, and global unlock guard.
- `src/router/helper.ts`: defines `RouteConfig`, `RouteMeta`, `buildRouteTree`, permission guard composition, and menu generation.
- `src/router/hooks.ts`: exposes `useCurrentRoute`, `useMatchedRoutes`, `useRouteParams`, and `useAuthorizedMenus`.
- `src/router/standalone-routes.ts`: lists standalone/debug routes that bypass the global unlock guard.

The project intentionally keeps route declarations config-driven:

```ts
{
  path: "/quests",
  meta: {
    title: "任务",
    emoji: "📋",
    description: "查看新手、日常与成就任务",
    order: 20
  },
  component: () => import("@/pages/quests")
}
```

`buildRouteTree(rootRoute, routes, ...extraRoutes)` converts the config array into TanStack Router routes with lazy components, static route data, and composed guards.

## RouteConfig Contract

Use `RouteConfig` for normal product and demo pages:

- `path`: route path. Root-level routes in this project usually use absolute paths like `"/home"`.
- `component`: lazy import returning a page component with a default export.
- `meta`: static route data used by menus, route hooks, and TanStack module augmentation.
- `beforeLoad`: business guard with no arguments. It runs after `meta.permission` passes.
- `children`: nested `RouteConfig[]` when needed.

Use hand-written `createRoute` only for routes that do not fit the config model, such as:

- Root index redirect.
- Legacy aliases such as `"/missions"` redirecting to `"/quests"`.
- Guards that need TanStack callback arguments like `location`.

## Meta Rules

`RouteMeta` supports:

- `title`: display title and menu fallback label.
- `description`: navigation card description.
- `emoji` or `icon`: visual affordance for nav surfaces.
- `order`: menu sort weight. Smaller values appear first.
- `hideInMenu`: excludes route from generated menus.
- `permission`: checked against `useUserStore().permissions` and `hasPermission`.

Permission behavior:

- If `meta.permission` is absent, the route is public within the current app flow.
- If the user owns `"admin"`, permission checks for `"admin:settings"` also pass.
- `meta.permission` is checked before custom `beforeLoad`.

## Adding A Page Route

Follow this workflow:

1. Create the page at `src/pages/<page>/index.tsx`.
2. Use a default export for the page component.
3. Add an entry to `routes` in `src/router/index.ts`.
4. Provide `meta.title`; add `description`, `emoji`, and `order` if it should appear in navigation.
5. Add `hideInMenu: true` for detail pages, callbacks, legacy entries, or hidden flows.
6. Add `meta.permission` only when access must be filtered by the existing user permission model.
7. If the route is dev/test only, place it inside the existing `!IS_PROD` block.
8. If the route is a standalone debug/demo surface that should bypass the global unlock guard, add its path to `STANDALONE_ROUTE_PATHS`.
9. Run `pnpm lint:fix` after editing `.ts`, `.tsx`, or `.css` files.

## Guards And Redirects

Custom config guards are intentionally simple:

```ts
function guardStoryVideo() {
  throw redirect({ replace: true, to: "/home" })
}
```

Rules:

- Import `redirect` from `@tanstack/react-router`.
- TanStack redirects are thrown. Keep the local ESLint suppression used by the project when needed.
- Use `replace: true` when preventing stale history entries matters.
- Put product-wide routing rules on `rootRoute.beforeLoad`.
- Keep page-specific checks in `RouteConfig.beforeLoad` when they do not need callback args.
- Avoid redirect loops by explicitly skipping the target route.

The global unlock guard currently lets `/`, `/story-video`, and standalone routes pass through in specific cases, then redirects locked users to `/home`.

## Menus And Route Hooks

Use the existing helpers instead of manually rebuilding route data:

- `generateMenuItems(routes, permissions)` for pure menu generation.
- `useAuthorizedMenus(routes)` for React components that need permission-aware menus.
- `useCurrentRoute()` for the deepest matched route and its `meta`.
- `useMatchedRoutes()` for breadcrumbs.
- `useRouteParams<T>()` for params, because config-built route trees do not preserve strict TanStack path literal types.

When changing menu behavior, update `helper.ts` rather than duplicating filter or sort logic in UI components.

## Compatibility Constraints

- Keep imports using project aliases such as `@/pages/...`.
- Do not introduce new router libraries or a second route declaration system.
- Do not manually add `useMemo`, `useCallback`, or `React.memo` while editing route consumers; React Compiler is enabled.
- Keep route components lazy-loaded through `component: () => import(...)`.
- Respect the production base path: `createRouter` uses `import.meta.env.BASE_URL`.
- Remember the PC target is Electron 10.1.5, so avoid route-related code that depends on unpolyfillable modern browser APIs.

## Review Checklist

Before finishing routing work:

- The route is registered in exactly one place unless it is an intentional alias.
- The page path and lazy import path match the actual file.
- Visible routes have useful `meta.title` and sensible `order`.
- Hidden/detail routes have `hideInMenu: true`.
- Permission-gated routes use `meta.permission`, not duplicated UI-only filtering.
- Dev/demo routes are gated by `!IS_PROD` when they should not ship in production.
- Standalone routes that bypass unlock flow are listed in `standalone-routes.ts`.
- Redirects cannot loop.
- `pnpm lint:fix` has been run after code edits.
