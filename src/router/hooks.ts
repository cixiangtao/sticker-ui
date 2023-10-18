import {
  type RegisteredRouter,
  useMatches,
  useParams,
} from "@tanstack/react-router"

import type { RouteMeta } from "./helper"

interface RouteStaticData {
  meta?: RouteMeta
}

function useCurrentRoute() {
  const matches = useMatchedRoutes()

  return matches.at(-1)
}

function useMatchedRoutes() {
  return useMatches({
    select: (matches) =>
      matches.map((match) => ({
        id: match.id,
        meta: (match.staticData as RouteStaticData).meta,
        pathname: match.pathname,
      })),
  })
}

function useRouteParams<TParams extends Record<string, string>>() {
  return useParams<RegisteredRouter, undefined, false, false, unknown, false>({
    shouldThrow: false,
    strict: false,
    structuralSharing: false,
  }) as TParams
}

export { useCurrentRoute, useMatchedRoutes, useRouteParams }
