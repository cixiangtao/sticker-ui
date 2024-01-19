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

interface ColorToken {
  label: string
  name: `--color-${string}`
  preview?: string
  value: string
}

interface ColorTokenGroup {
  description: string
  label: string
  tokens: ColorToken[]
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

const COLOR_TOKEN_GROUPS = [
  {
    description: "Core canvas, surface, and ink colors for sticker layouts.",
    label: "Base",
    tokens: [
      { label: "Ink", name: "--color-ink", value: "#2e3038" },
      { label: "Paper", name: "--color-paper", value: "#fffdf7" },
      { label: "Canvas", name: "--color-canvas", value: "#fff7df" },
      { label: "Surface", name: "--color-surface", value: "#ffffff" },
      {
        label: "Surface Muted",
        name: "--color-surface-muted",
        value: "#f1efe6",
      },
    ],
  },
  {
    description: "Theme aliases consumed by Tailwind and app-level surfaces.",
    label: "Aliases",
    tokens: [
      {
        label: "Background",
        name: "--color-background",
        value: "var(--color-canvas)",
      },
      {
        label: "Foreground",
        name: "--color-foreground",
        value: "var(--color-ink)",
      },
      {
        label: "Primary",
        name: "--color-primary",
        value: "var(--color-fill-default)",
      },
      {
        label: "Primary Foreground",
        name: "--color-primary-foreground",
        value: "var(--color-ink)",
      },
      { label: "Border", name: "--color-border", value: "var(--color-ink)" },
      { label: "Ring", name: "--color-ring", value: "#9b5de5" },
    ],
  },
  {
    description: "Saturated pins used for dots, accents, and small badges.",
    label: "Accent",
    tokens: [
      { label: "Info", name: "--color-accent-info", value: "#4ea8de" },
      {
        label: "Secondary",
        name: "--color-accent-secondary",
        value: "#9b5de5",
      },
      { label: "Success", name: "--color-accent-success", value: "#00b894" },
      { label: "Warning", name: "--color-accent-warning", value: "#f6a609" },
      { label: "Danger", name: "--color-accent-danger", value: "#ef476f" },
    ],
  },
  {
    description: "Paper fills for cards, tags, buttons, and demo backgrounds.",
    label: "Fill",
    tokens: [
      { label: "Default", name: "--color-fill-default", value: "#ffe08a" },
      {
        label: "Default Soft",
        name: "--color-fill-default-soft",
        value: "#fff3bf",
      },
      {
        label: "Secondary",
        name: "--color-fill-secondary",
        value: "#f6efff",
      },
      {
        label: "Secondary Strong",
        name: "--color-fill-secondary-strong",
        value: "#eadbff",
      },
      { label: "Danger", name: "--color-fill-danger", value: "#ff9bb2" },
      { label: "Info", name: "--color-fill-info", value: "#eaf7ff" },
      {
        label: "Info Strong",
        name: "--color-fill-info-strong",
        value: "#cdeeff",
      },
      { label: "Success", name: "--color-fill-success", value: "#eafbf5" },
      {
        label: "Success Strong",
        name: "--color-fill-success-strong",
        value: "#cff8e6",
      },
      { label: "Warning", name: "--color-fill-warning", value: "#fff6dc" },
      {
        label: "Warning Strong",
        name: "--color-fill-warning-strong",
        value: "#ffe9a8",
      },
      {
        label: "Danger Soft",
        name: "--color-fill-danger-soft",
        value: "#fff0f4",
      },
    ],
  },
  {
    description: "Readable text colors for statuses, helper copy, and labels.",
    label: "Text",
    tokens: [
      { label: "Muted", name: "--color-text-muted", value: "#5b5e6a" },
      { label: "Subtle", name: "--color-text-subtle", value: "#696b76" },
      {
        label: "Placeholder",
        name: "--color-text-placeholder",
        value: "#858894",
      },
      { label: "Info", name: "--color-text-info", value: "#126b9a" },
      {
        label: "Secondary",
        name: "--color-text-secondary",
        value: "#6930a8",
      },
      { label: "Success", name: "--color-text-success", value: "#007b63" },
      {
        label: "Success Muted",
        name: "--color-text-success-muted",
        value: "#3d5f52",
      },
      { label: "Warning", name: "--color-text-warning", value: "#9a6500" },
      {
        label: "Warning Muted",
        name: "--color-text-warning-muted",
        value: "#8b6f24",
      },
      { label: "Danger", name: "--color-text-danger", value: "#a61e42" },
    ],
  },
  {
    description: "Utility color for scrims and layered preview overlays.",
    label: "Utility",
    tokens: [
      {
        label: "Overlay",
        name: "--color-overlay",
        preview:
          "linear-gradient(135deg, var(--color-overlay), var(--color-overlay)), var(--color-fill-default-soft)",
        value: "rgb(46 48 56 / 0.35)",
      },
    ],
  },
] satisfies ColorTokenGroup[]

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
  return `src/components/ui/${componentName}.tsx`
}

function getRouteComponentName(path: string) {
  return /^\/components\/(?<componentName>[^/]+)$/.exec(path)?.groups
    ?.componentName
}

export { COLOR_TOKEN_GROUPS, COMPONENT_FILES, findNavItemByPath, NAV_GROUPS }
export type { NavGroup, NavItem, RouteId }
