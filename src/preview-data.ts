import { routes } from "@/router/routes"

interface NavGroup {
  id: string
  items: NavItem[]
  labelKey: string
  sections: NavSection[]
}

interface NavItem {
  descriptionKey: string
  label?: string
  labelKey?: string
  path: string
}

interface PreviewLabelSource {
  label?: string
  labelKey?: string
}

interface NavSection {
  descriptionKey?: string
  id: string
  items: NavItem[]
  labelKey?: string
}

interface NavGroupConfig {
  id: string
  labelKey: string
  sections?: NavSectionConfig[]
}

interface NavSectionConfig {
  descriptionKey: string
  id: string
  labelKey: string
}

interface ColorToken {
  labelKey: string
  name: `--color-${string}`
  preview?: string
  value: string
}

interface ColorTokenGroup {
  descriptionKey: string
  labelKey: string
  tokens: ColorToken[]
}

type PreviewRoute = (typeof routes)[number]

const COMPONENT_NAV_SECTIONS: NavSectionConfig[] = [
  {
    id: "actions",
    descriptionKey: "preview.components.buttonsAndDirectCommandSurfaces",
    labelKey: "preview.components.actions",
  },
  {
    id: "surfaces-data",
    descriptionKey: "preview.components.layoutStructuredDataAndCompactMetadata",
    labelKey: "preview.components.surfacesAndData",
  },
  {
    id: "navigation",
    descriptionKey:
      "preview.components.desktopNavigationPatternsForAppShellsAndPageHierarchy",
    labelKey: "preview.components.navigation",
  },
  {
    id: "feedback-status",
    descriptionKey: "preview.components.readableNotesLabelsAndStatusSignals",
    labelKey: "preview.components.feedbackAndStatus",
  },
  {
    id: "form-controls",
    descriptionKey:
      "preview.components.inputsChoicesTogglesAndFieldScaffolding",
    labelKey: "preview.components.formControls",
  },
  {
    id: "overlays",
    descriptionKey:
      "preview.components.floatingHelpCompactPanelsAndModalSurfaces",
    labelKey: "preview.components.overlays",
  },
]

const NAV_GROUP_CONFIGS: NavGroupConfig[] = [
  {
    id: "start",
    labelKey: "preview.components.start",
  },
  {
    id: "registry",
    labelKey: "preview.components.registry",
  },
  {
    id: "foundation",
    labelKey: "preview.components.foundation",
  },
  {
    id: "components",
    sections: COMPONENT_NAV_SECTIONS,
    labelKey: "preview.components.components",
  },
]

const NAV_GROUPS: NavGroup[] = NAV_GROUP_CONFIGS.map((group) => {
  const groupRoutes = routes
    .filter(
      (route) =>
        !("hideInMenu" in route.meta && route.meta.hideInMenu) &&
        getRouteGroupId(route.path) === group.id,
    )
    .sort((first, second) => (first.meta.order ?? 0) - (second.meta.order ?? 0))
  const items = groupRoutes.map((route) => createNavItem(route))

  return {
    id: group.id,
    items,
    labelKey: group.labelKey,
    sections: createNavSections(groupRoutes, group.sections),
  }
})

const COLOR_TOKEN_GROUPS = [
  {
    tokens: [
      {
        name: "--color-su-ink",
        value: "#2e3038",
        labelKey: "preview.components.ink",
      },
      {
        name: "--color-su-paper",
        value: "#fffdf7",
        labelKey: "preview.components.paper",
      },
      {
        name: "--color-su-canvas",
        value: "#fff7df",
        labelKey: "preview.components.canvas",
      },
      {
        name: "--color-su-surface",
        value: "#ffffff",
        labelKey: "preview.components.surface",
      },
      {
        name: "--color-su-surface-muted",
        value: "#f1efe6",
        labelKey: "preview.components.surfaceMuted",
      },
    ],
    descriptionKey:
      "preview.components.coreCanvasSurfaceAndInkColorsForStickerLayouts",
    labelKey: "preview.components.base",
  },
  {
    tokens: [
      {
        name: "--color-su-accent-secondary",
        value: "#9b5de5",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-su-accent-info",
        value: "#4ea8de",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-su-accent-success",
        value: "#00b894",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-su-accent-warning",
        value: "#f6a609",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-su-accent-danger",
        value: "#ef476f",
        labelKey: "preview.components.danger",
      },
    ],
    descriptionKey:
      "preview.components.saturatedPinsUsedForDotsAccentsAndSmallBadges",
    labelKey: "preview.components.accent",
  },
  {
    tokens: [
      {
        name: "--color-su-fill-default",
        value: "#ffe08a",
        labelKey: "preview.components.default",
      },
      {
        name: "--color-su-fill-default-soft",
        value: "#fff3bf",
        labelKey: "preview.components.defaultSoft",
      },
      {
        name: "--color-su-fill-secondary",
        value: "#f6efff",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-su-fill-secondary-strong",
        value: "#eadbff",
        labelKey: "preview.components.secondaryStrong",
      },
      {
        name: "--color-su-fill-info",
        value: "#eaf7ff",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-su-fill-info-strong",
        value: "#cdeeff",
        labelKey: "preview.components.infoStrong",
      },
      {
        name: "--color-su-fill-success",
        value: "#eafbf5",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-su-fill-success-strong",
        value: "#cff8e6",
        labelKey: "preview.components.successStrong",
      },
      {
        name: "--color-su-fill-warning",
        value: "#fff6dc",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-su-fill-warning-strong",
        value: "#ffe9a8",
        labelKey: "preview.components.warningStrong",
      },
      {
        name: "--color-su-fill-danger",
        value: "#fff0f4",
        labelKey: "preview.components.danger",
      },
      {
        name: "--color-su-fill-danger-strong",
        value: "#ff9bb2",
        labelKey: "preview.components.dangerStrong",
      },
    ],
    descriptionKey:
      "preview.components.paperFillsForCardsTagsButtonsAndDemoBackgrounds",
    labelKey: "preview.components.fill",
  },
  {
    tokens: [
      {
        name: "--color-su-fg-muted",
        value: "#5b5e6a",
        labelKey: "preview.components.muted",
      },
      {
        name: "--color-su-fg-subtle",
        value: "#696b76",
        labelKey: "preview.components.subtle",
      },
      {
        name: "--color-su-fg-placeholder",
        value: "#858894",
        labelKey: "preview.components.placeholder",
      },
      {
        name: "--color-su-fg-secondary",
        value: "#6930a8",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-su-fg-info",
        value: "#126b9a",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-su-fg-success",
        value: "#007b63",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-su-fg-warning",
        value: "#9a6500",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-su-fg-danger",
        value: "#a61e42",
        labelKey: "preview.components.danger",
      },
    ],
    descriptionKey:
      "preview.components.readableTextColorsForStatusesHelperCopyAndLabels",
    labelKey: "preview.components.text",
  },
  {
    tokens: [
      {
        name: "--color-su-ring",
        value: "var(--color-su-fill-default)",
        labelKey: "preview.components.ring",
      },
      {
        name: "--color-su-overlay",
        preview:
          "linear-gradient(135deg, var(--color-su-overlay), var(--color-su-overlay)), var(--color-su-fill-default-soft)",
        value: "rgb(46 48 56 / 0.35)",
        labelKey: "preview.components.overlay",
      },
    ],
    descriptionKey:
      "preview.components.utilityColorsForFocusRingsScrimsAndLayeredOverlays",
    labelKey: "preview.components.utility",
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

function getRouteGroupId(path: string) {
  if (path === "/") {
    return "start"
  }

  return path.split("/").find(Boolean) ?? "start"
}

function createNavItem(route: PreviewRoute): NavItem {
  return {
    descriptionKey: route.meta.descriptionKey,
    label: "title" in route.meta ? route.meta.title : undefined,
    labelKey: "titleKey" in route.meta ? route.meta.titleKey : undefined,
    path: route.path,
  }
}

function createNavSections(
  groupRoutes: PreviewRoute[],
  sectionConfigs?: NavSectionConfig[],
): NavSection[] {
  if (!sectionConfigs?.length) {
    return [
      {
        id: "default",
        items: groupRoutes.map((route) => createNavItem(route)),
      },
    ]
  }

  const configuredSections = sectionConfigs
    .map((section) => ({
      descriptionKey: section.descriptionKey,
      id: section.id,
      items: groupRoutes
        .filter((route) => getRouteNavSection(route) === section.id)
        .map((route) => createNavItem(route)),
      labelKey: section.labelKey,
    }))
    .filter((section) => section.items.length > 0)

  const uncategorizedItems = groupRoutes
    .filter((route) => !getRouteNavSection(route))
    .map((route) => createNavItem(route))

  if (!uncategorizedItems.length) {
    return configuredSections
  }

  return [
    ...configuredSections,
    {
      id: "more",
      items: uncategorizedItems,
      labelKey: "preview.components.more",
    },
  ]
}

function getRouteNavSection(route: PreviewRoute) {
  return "navSection" in route.meta ? route.meta.navSection : undefined
}

function resolvePreviewLabel(
  item: PreviewLabelSource,
  translate: (key: string | undefined) => string,
) {
  return item.label ?? translate(item.labelKey)
}

function getRegistrySourcePath(componentName: string) {
  return `src/components/ui/${componentName}.tsx`
}

function getRouteComponentName(path: string) {
  return /^\/components\/(?<componentName>[^/]+)$/.exec(path)?.groups
    ?.componentName
}

export { COLOR_TOKEN_GROUPS, COMPONENT_FILES, NAV_GROUPS, resolvePreviewLabel }
export type { NavGroup, NavItem, NavSection, PreviewLabelSource }
