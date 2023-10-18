import {
  createHashHistory,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router"

import { App } from "@/preview-app"
import { buildRouteTree } from "@/router/helper"
import { routes } from "@/router/routes"

const rootRoute = createRootRoute({
  component: App,
})

const routeTree = buildRouteTree(rootRoute, routes)

const router = createRouter({
  basepath: import.meta.env.BASE_URL,
  history: createHashHistory(),
  routeTree,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export { router, routes }
