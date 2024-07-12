import {
  type AnyRoute,
  createRoute,
  lazyRouteComponent,
  type RouteComponent,
} from "@tanstack/react-router"

interface MenuItem {
  description?: string
  descriptionKey?: string
  emoji?: string
  icon?: string
  navSection?: string
  order: number
  path: string
  title: string
  titleKey?: string
}

interface RouteConfig {
  beforeLoad?: () => Promise<void> | void
  children?: RouteConfig[]
  component: () => Promise<RouteComponent>
  meta: RouteMeta
  path: string
}

interface RouteMeta {
  description?: string
  descriptionKey?: string
  emoji?: string
  hideInMenu?: boolean
  icon?: string
  navSection?: string
  order?: number
  permission?: string
  title: string
  titleKey?: string
}

function buildRouteTree(
  rootRoute: AnyRoute,
  routeConfigs: readonly RouteConfig[],
) {
  return rootRoute.addChildren(
    routeConfigs.map((routeConfig) =>
      createRouteFromConfig(rootRoute, routeConfig),
    ),
  )
}

function defineRoutes<const T extends readonly RouteConfig[]>(routes: T): T {
  return routes
}

function createRouteFromConfig(
  parentRoute: AnyRoute,
  config: RouteConfig,
): AnyRoute {
  const route = createRoute({
    beforeLoad: config.beforeLoad,
    component: lazyRouteComponent(async () => ({
      default: await config.component(),
    })),
    getParentRoute: () => parentRoute,
    path: normalizePathForRoute(config.path),
    staticData: {
      meta: config.meta,
    },
  })

  if (!config.children?.length) {
    return route
  }

  return route.addChildren(
    config.children.map((child) => createRouteFromConfig(route, child)),
  )
}

function generateMenuItems(routeConfigs: readonly RouteConfig[]): MenuItem[] {
  return routeConfigs
    .filter((routeConfig) => !routeConfig.meta.hideInMenu)
    .map((routeConfig) => ({
      description: routeConfig.meta.description,
      descriptionKey: routeConfig.meta.descriptionKey,
      emoji: routeConfig.meta.emoji,
      icon: routeConfig.meta.icon,
      navSection: routeConfig.meta.navSection,
      order: routeConfig.meta.order ?? 0,
      path: routeConfig.path,
      title: routeConfig.meta.title,
      titleKey: routeConfig.meta.titleKey,
    }))
    .sort((first, second) => first.order - second.order)
}

function normalizePathForRoute(path: string) {
  if (path === "/") {
    return "/"
  }

  return path.replace(/^\/+/, "")
}

export { buildRouteTree, defineRoutes, generateMenuItems }
export type { MenuItem, RouteConfig, RouteMeta }
