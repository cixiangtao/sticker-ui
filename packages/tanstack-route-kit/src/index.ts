import {
  type AnyRoute,
  createRoute,
  lazyRouteComponent,
  type RegisteredRouter,
  type RouteComponent,
  useMatches,
  useParams,
} from "@tanstack/react-router"

interface RouteMenuMeta {
  description?: string
  descriptionKey?: string
  emoji?: string
  hideInMenu?: boolean
  icon?: string
  navSection?: string
  order?: number
  title?: string
  titleKey?: string
}

interface RouteConfig<TMeta = unknown> {
  beforeLoad?: () => Promise<void> | void
  children?: RouteConfig<TMeta>[]
  component: () => Promise<RouteComponent>
  meta: TMeta
  path: string
}

interface MenuItem<TMeta extends RouteMenuMeta = RouteMenuMeta> {
  description?: string
  descriptionKey?: string
  emoji?: string
  icon?: string
  meta: TMeta
  navSection?: string
  order: number
  path: string
  title?: string
  titleKey?: string
}

interface MatchedRoute<TMeta = unknown> {
  id: string
  meta?: TMeta
  pathname: string
}

type DefinedRoutes<
  TRoutes extends readonly RouteConfig<unknown>[],
  TMeta,
> = TRoutes & {
  readonly __routeKitMeta: TMeta
}

interface DefinedRouteModule<
  TRoutes extends readonly RouteConfig<unknown>[],
  TMeta,
> {
  routes: DefinedRoutes<TRoutes, TMeta>
  useCurrentRoute: () => MatchedRoute<TMeta> | undefined
  useMatchedRoutes: () => MatchedRoute<TMeta>[]
  useRouteParams: typeof useRouteParams
}

type RouteMetaFromRoutes<TRoutes extends readonly RouteConfig<unknown>[]> =
  TRoutes extends {
    readonly __routeKitMeta: infer TMeta
  }
    ? TMeta
    : RouteMetaFromRoute<TRoutes[number]>

type RouteMetaFromRoute<TRoute> = TRoute extends {
  children?: infer TChildren
  meta: infer TMeta
}
  ?
      | TMeta
      | (TChildren extends readonly RouteConfig<unknown>[]
          ? RouteMetaFromRoutes<TChildren>
          : never)
  : never

type CheckedRoutes<TRoutes extends readonly RouteConfig<unknown>[], TMeta> = {
  readonly [TIndex in keyof TRoutes]: TRoutes[TIndex] extends RouteConfig<
    infer TRouteMeta
  >
    ? TRouteMeta extends TMeta
      ? TRoutes[TIndex] extends {
          children: infer TChildren
        }
        ? Omit<TRoutes[TIndex], "children"> & {
            readonly children: TChildren extends readonly RouteConfig<unknown>[]
              ? CheckedRoutes<TChildren, TMeta>
              : never
          }
        : TRoutes[TIndex]
      : never
    : never
}

interface RouteStaticData<TMeta = unknown> {
  meta?: TMeta
}

function buildRouteTree<const TRoutes extends readonly RouteConfig<unknown>[]>(
  rootRoute: AnyRoute,
  routeConfigs: TRoutes,
) {
  return rootRoute.addChildren(
    routeConfigs.map((routeConfig) =>
      createRouteFromConfig(rootRoute, routeConfig),
    ),
  )
}

function defineRoutes<TMeta>(): <
  const TRoutes extends readonly RouteConfig<unknown>[],
>(
  routes: TRoutes & CheckedRoutes<TRoutes, TMeta>,
) => DefinedRouteModule<TRoutes, TMeta>
function defineRoutes<const TRoutes extends readonly RouteConfig<unknown>[]>(
  routes: TRoutes,
): DefinedRouteModule<TRoutes, RouteMetaFromRoutes<TRoutes>>
function defineRoutes(routeConfigs?: unknown): unknown {
  if (routeConfigs) {
    return createRouteModule<readonly RouteConfig<unknown>[], unknown>(
      routeConfigs as readonly RouteConfig<unknown>[],
    )
  }

  return <const TRoutes extends readonly RouteConfig<unknown>[]>(
    routes: TRoutes,
  ) => createRouteModule(routes)
}

function generateMenuItems<TMeta extends RouteMenuMeta>(
  routeConfigs: readonly RouteConfig<TMeta>[],
): MenuItem<TMeta>[] {
  return routeConfigs
    .filter((routeConfig) => !routeConfig.meta.hideInMenu)
    .map((routeConfig) => ({
      description: routeConfig.meta.description,
      descriptionKey: routeConfig.meta.descriptionKey,
      emoji: routeConfig.meta.emoji,
      icon: routeConfig.meta.icon,
      meta: routeConfig.meta,
      navSection: routeConfig.meta.navSection,
      order: routeConfig.meta.order ?? 0,
      path: routeConfig.path,
      title: routeConfig.meta.title,
      titleKey: routeConfig.meta.titleKey,
    }))
    .sort((first, second) => first.order - second.order)
}

function createRouteModule<
  const TRoutes extends readonly RouteConfig<unknown>[],
  TMeta = RouteMetaFromRoutes<TRoutes>,
>(routeConfigs: TRoutes): DefinedRouteModule<TRoutes, TMeta> {
  const routes = routeConfigs as DefinedRoutes<TRoutes, TMeta>

  function useCurrentRouteFromRoutes() {
    return useCurrentRoute<TMeta>()
  }

  function useMatchedRoutesFromRoutes() {
    return useMatchedRoutes<TMeta>()
  }

  return {
    routes,
    useCurrentRoute: useCurrentRouteFromRoutes,
    useMatchedRoutes: useMatchedRoutesFromRoutes,
    useRouteParams,
  }
}

function useCurrentRoute<TMeta = unknown>() {
  const matches = useMatchedRoutes<TMeta>()

  return matches.at(-1)
}

function useMatchedRoutes<TMeta = unknown>(): MatchedRoute<TMeta>[] {
  const matches = useMatches({
    structuralSharing: false,
  })

  return matches.map((match) => ({
    id: match.id,
    meta: (match.staticData as RouteStaticData<TMeta>).meta,
    pathname: match.pathname,
  }))
}

function useRouteParams<TParams extends Record<string, string>>() {
  return useParams<RegisteredRouter, undefined, false, false, unknown, false>({
    shouldThrow: false,
    strict: false,
    structuralSharing: false,
  }) as TParams
}

function createRouteFromConfig<TMeta>(
  parentRoute: AnyRoute,
  config: RouteConfig<TMeta>,
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

function normalizePathForRoute(path: string) {
  if (path === "/") {
    return "/"
  }

  return path.replace(/^\/+/, "")
}

export { buildRouteTree, defineRoutes, generateMenuItems }
export type {
  MatchedRoute,
  MenuItem,
  RouteConfig,
  RouteMenuMeta,
  RouteMetaFromRoutes,
}
