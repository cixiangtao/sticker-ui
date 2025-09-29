# @anys/tanstack-route-kit

Config-first helpers for TanStack React Router route trees, metadata, and route-derived navigation.

## Use Case

Use this package when an app wants routes to be declared as data and reused for navigation, page metadata, breadcrumbs, and lightweight route params.

It keeps project-specific concerns outside the package. Layouts, i18n, permission checks, menu grouping, and route metadata shape should stay in the consuming app.

## Example

```tsx
import {
  createHashHistory,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router"
import { buildRouteTree, defineRoutes } from "@anys/tanstack-route-kit"

interface AppRouteMeta {
  descriptionKey: string
  order?: number
  title: string
}

export const { routes, useCurrentRoute, useMatchedRoutes, useRouteParams } =
  defineRoutes<AppRouteMeta>()([
    {
      component: () => import("./pages/home").then((module) => module.HomePage),
      meta: {
        descriptionKey: "routes.home.description",
        order: 0,
        title: "Home",
      },
      path: "/",
    },
  ])

const rootRoute = createRootRoute({
  component: App,
})

const router = createRouter({
  history: createHashHistory(),
  routeTree: buildRouteTree(rootRoute, routes),
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
```

## Exports

- `defineRoutes<TMeta>()(routes)`: returns a route module with the literal `routes` tuple and route-bound hooks, while checking each route against a project metadata shape.
- `defineRoutes(routes)`: returns a route module with the literal `routes` tuple and route-bound hooks inferred from the route data.
- `buildRouteTree(rootRoute, routes)`: converts config routes into a TanStack route tree.
- `generateMenuItems(routes)`: derives flat ordered menu items from common metadata fields.
