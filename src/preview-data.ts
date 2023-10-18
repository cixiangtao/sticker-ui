import { routes } from "@/router/routes"

interface NavGroup {
  items: NavItem[]
  label: string
}

interface NavItem {
  description: string
  id: string
  label: string
  path: string
  status: "draft" | "ready"
}

interface NavGroupConfig {
  label: string
  matches: (path: string) => boolean
}

type RouteId = NavItem["id"]

const NAV_GROUP_CONFIGS: NavGroupConfig[] = [
  {
    label: "Start",
    matches: (path) => path === "/",
  },
  {
    label: "Foundation",
    matches: (path) => path.startsWith("/foundation/"),
  },
  {
    label: "Components",
    matches: (path) => path.startsWith("/components/"),
  },
  {
    label: "Registry",
    matches: (path) => path.startsWith("/registry/"),
  },
]

const NAV_GROUPS: NavGroup[] = NAV_GROUP_CONFIGS.map((group) => ({
  items: routes
    .filter(
      (route) =>
        !("hideInMenu" in route.meta && route.meta.hideInMenu) &&
        group.matches(route.path),
    )
    .map((route) => ({
      description: route.meta.description ?? "",
      id: getRouteId(route.path),
      label: route.meta.title,
      path: route.path,
      status: "ready" as const,
    }))
    .sort(
      (first, second) => getRouteOrder(first.path) - getRouteOrder(second.path),
    ),
  label: group.label,
}))

const COLOR_SWATCHES = [
  { className: "bg-[#FFF7DF]", name: "Paper", value: "#FFF7DF" },
  { className: "bg-[#2E3038]", name: "Ink", value: "#2E3038" },
  { className: "bg-[#FFE08A]", name: "Sun Tab", value: "#FFE08A" },
  { className: "bg-[#B7F7D3]", name: "Mint Note", value: "#B7F7D3" },
  { className: "bg-[#EAF7FF]", name: "Sky Wash", value: "#EAF7FF" },
  { className: "bg-[#FF9BB2]", name: "Berry Pin", value: "#FF9BB2" },
  { className: "bg-[#F6EFFF]", name: "Lilac", value: "#F6EFFF" },
  { className: "bg-[#FFF6DC]", name: "Cream", value: "#FFF6DC" },
]

const COMPONENT_FILES = routes.flatMap((route) => {
  const componentName = getRouteComponentName(route.path)

  if (!componentName) {
    return []
  }

  return [
    {
      name: componentName,
      registry: `/r/${componentName}.json`,
      source: getRegistrySourcePath(componentName),
    },
  ]
})

function findNavItemByPath(pathname: string) {
  for (const group of NAV_GROUPS) {
    const item = group.items.find((navItem) => navItem.path === pathname)
    if (item) {
      return item
    }
  }

  return NAV_GROUPS[0].items[0]
}

function getRouteId(path: string) {
  if (path === "/") {
    return "overview"
  }

  return path.replace(/^\/+/, "").replaceAll("/", "-")
}

function getRouteOrder(path: string) {
  return routes.find((route) => route.path === path)?.meta.order ?? 0
}

function getRegistrySourcePath(componentName: string) {
  return `registry/default/${componentName}/${componentName}.tsx`
}

function getRouteComponentName(path: string) {
  return /^\/components\/(?<componentName>[^/]+)$/.exec(path)?.groups
    ?.componentName
}

export { COLOR_SWATCHES, COMPONENT_FILES, findNavItemByPath, NAV_GROUPS }
export type { NavGroup, NavItem, RouteId }
