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
    id: "foundation",
    labelKey: "preview.components.foundation",
  },
  {
    id: "components",
    sections: COMPONENT_NAV_SECTIONS,
    labelKey: "preview.components.components",
  },
  {
    id: "registry",
    labelKey: "preview.components.registry",
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
        name: "--color-ink",
        value: "#2e3038",
        labelKey: "preview.components.ink",
      },
      {
        name: "--color-paper",
        value: "#fffdf7",
        labelKey: "preview.components.paper",
      },
      {
        name: "--color-canvas",
        value: "#fff7df",
        labelKey: "preview.components.canvas",
      },
      {
        name: "--color-surface",
        value: "#ffffff",
        labelKey: "preview.components.surface",
      },
      {
        name: "--color-surface-muted",
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
        name: "--color-background",
        value: "var(--color-canvas)",
        labelKey: "preview.components.background",
      },
      {
        name: "--color-foreground",
        value: "var(--color-ink)",
        labelKey: "preview.components.foreground",
      },
      {
        name: "--color-primary",
        value: "var(--color-fill-default)",
        labelKey: "preview.components.primary",
      },
      {
        name: "--color-primary-foreground",
        value: "var(--color-ink)",
        labelKey: "preview.components.primaryForeground",
      },
      {
        name: "--color-border",
        value: "var(--color-ink)",
        labelKey: "preview.components.border",
      },
      {
        name: "--color-ring",
        value: "var(--color-primary)",
        labelKey: "preview.components.ring",
      },
    ],
    descriptionKey:
      "preview.components.themeAliasesConsumedByTailwindAndAppLevelSurfaces",
    labelKey: "preview.components.aliases",
  },
  {
    tokens: [
      {
        name: "--color-accent-info",
        value: "#4ea8de",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-accent-secondary",
        value: "#9b5de5",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-accent-success",
        value: "#00b894",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-accent-warning",
        value: "#f6a609",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-accent-danger",
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
        name: "--color-fill-default",
        value: "#ffe08a",
        labelKey: "preview.components.default",
      },
      {
        name: "--color-fill-default-soft",
        value: "#fff3bf",
        labelKey: "preview.components.defaultSoft",
      },
      {
        name: "--color-fill-secondary",
        value: "#f6efff",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-fill-secondary-strong",
        value: "#eadbff",
        labelKey: "preview.components.secondaryStrong",
      },
      {
        name: "--color-fill-danger",
        value: "#ff9bb2",
        labelKey: "preview.components.danger",
      },
      {
        name: "--color-fill-info",
        value: "#eaf7ff",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-fill-info-strong",
        value: "#cdeeff",
        labelKey: "preview.components.infoStrong",
      },
      {
        name: "--color-fill-success",
        value: "#eafbf5",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-fill-success-strong",
        value: "#cff8e6",
        labelKey: "preview.components.successStrong",
      },
      {
        name: "--color-fill-warning",
        value: "#fff6dc",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-fill-warning-strong",
        value: "#ffe9a8",
        labelKey: "preview.components.warningStrong",
      },
      {
        name: "--color-fill-danger-soft",
        value: "#fff0f4",
        labelKey: "preview.components.dangerSoft",
      },
    ],
    descriptionKey:
      "preview.components.paperFillsForCardsTagsButtonsAndDemoBackgrounds",
    labelKey: "preview.components.fill",
  },
  {
    tokens: [
      {
        name: "--color-text-muted",
        value: "#5b5e6a",
        labelKey: "preview.components.muted",
      },
      {
        name: "--color-text-subtle",
        value: "#696b76",
        labelKey: "preview.components.subtle",
      },
      {
        name: "--color-text-placeholder",
        value: "#858894",
        labelKey: "preview.components.placeholder",
      },
      {
        name: "--color-text-info",
        value: "#126b9a",
        labelKey: "preview.components.info",
      },
      {
        name: "--color-text-secondary",
        value: "#6930a8",
        labelKey: "preview.components.secondary",
      },
      {
        name: "--color-text-success",
        value: "#007b63",
        labelKey: "preview.components.success",
      },
      {
        name: "--color-text-success-muted",
        value: "#3d5f52",
        labelKey: "preview.components.successMuted",
      },
      {
        name: "--color-text-warning",
        value: "#9a6500",
        labelKey: "preview.components.warning",
      },
      {
        name: "--color-text-warning-muted",
        value: "#8b6f24",
        labelKey: "preview.components.warningMuted",
      },
      {
        name: "--color-text-danger",
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
        name: "--color-overlay",
        preview:
          "linear-gradient(135deg, var(--color-overlay), var(--color-overlay)), var(--color-fill-default-soft)",
        value: "rgb(46 48 56 / 0.35)",
        labelKey: "preview.components.overlay",
      },
    ],
    descriptionKey:
      "preview.components.utilityColorForScrimsAndLayeredPreviewOverlays",
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
