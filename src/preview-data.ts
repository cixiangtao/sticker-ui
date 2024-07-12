import { routes } from "@/router/routes"

interface NavGroup {
  items: NavItem[]
  label: string
  labelKey?: string
  sections: NavSection[]
}

interface NavItem {
  description: string
  descriptionKey?: string
  label: string
  labelKey?: string
  path: string
}

interface NavSection {
  description?: string
  descriptionKey?: string
  items: NavItem[]
  label: string
  labelKey?: string
}

interface NavGroupConfig {
  id: string
  label: string
  labelKey?: string
  sections?: NavSectionConfig[]
}

interface NavSectionConfig {
  description?: string
  descriptionKey?: string
  id: string
  label: string
  labelKey?: string
}

interface ColorToken {
  label: string
  labelKey?: string
  name: `--color-${string}`
  preview?: string
  value: string
}

interface ColorTokenGroup {
  description: string
  descriptionKey?: string
  label: string
  labelKey?: string
  tokens: ColorToken[]
}

type PreviewRoute = (typeof routes)[number]

const COMPONENT_NAV_SECTIONS: NavSectionConfig[] = [
  {
    description: "Buttons and direct command surfaces.",
    id: "actions",
    label: "Actions",
    descriptionKey: "preview.components.buttonsAndDirectCommandSurfaces",
    labelKey: "preview.components.actions",
  },
  {
    description: "Layout, structured data, and compact metadata.",
    id: "surfaces-data",
    label: "Surfaces & Data",
    descriptionKey: "preview.components.layoutStructuredDataAndCompactMetadata",
    labelKey: "preview.components.surfacesAndData",
  },
  {
    description: "Readable notes, labels, and status signals.",
    id: "feedback-status",
    label: "Feedback & Status",
    descriptionKey: "preview.components.readableNotesLabelsAndStatusSignals",
    labelKey: "preview.components.feedbackAndStatus",
  },
  {
    description: "Inputs, choices, toggles, and field scaffolding.",
    id: "form-controls",
    label: "Form Controls",
    descriptionKey:
      "preview.components.inputsChoicesTogglesAndFieldScaffolding",
    labelKey: "preview.components.formControls",
  },
  {
    description: "Floating help, compact panels, and modal surfaces.",
    id: "overlays",
    label: "Overlays",
    descriptionKey:
      "preview.components.floatingHelpCompactPanelsAndModalSurfaces",
    labelKey: "preview.components.overlays",
  },
]

const NAV_GROUP_CONFIGS: NavGroupConfig[] = [
  {
    id: "start",
    label: "Start",
    labelKey: "preview.components.start",
  },
  {
    id: "foundation",
    label: "Foundation",
    labelKey: "preview.components.foundation",
  },
  {
    id: "components",
    label: "Components",
    sections: COMPONENT_NAV_SECTIONS,
    labelKey: "preview.components.components",
  },
  {
    id: "registry",
    label: "Registry",
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
    items,
    label: group.label,
    labelKey: group.labelKey,
    sections: createNavSections(groupRoutes, group.sections),
  }
})

const COLOR_TOKEN_GROUPS = [
  {
    description: "Core canvas, surface, and ink colors for sticker layouts.",
    label: "Base",
    tokens: [
      {
        label: "Ink",
        name: "--color-ink",
        value: "#2e3038",
        labelKey: "preview.components.ink",
      },
      {
        label: "Paper",
        name: "--color-paper",
        value: "#fffdf7",
        labelKey: "preview.components.paper",
      },
      {
        label: "Canvas",
        name: "--color-canvas",
        value: "#fff7df",
        labelKey: "preview.components.canvas",
      },
      {
        label: "Surface",
        name: "--color-surface",
        value: "#ffffff",
        labelKey: "preview.components.surface",
      },
      {
        label: "Surface Muted",
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
    description: "Theme aliases consumed by Tailwind and app-level surfaces.",
    label: "Aliases",
    tokens: [
      {
        label: "Background",
        name: "--color-background",
        value: "var(--color-canvas)",
        labelKey: "preview.components.background",
      },
      {
        label: "Foreground",
        name: "--color-foreground",
        value: "var(--color-ink)",
        labelKey: "preview.components.foreground",
      },
      {
        label: "Primary",
        name: "--color-primary",
        value: "var(--color-fill-default)",
        labelKey: "preview.components.primary",
      },
      {
        label: "Primary Foreground",
        name: "--color-primary-foreground",
        value: "var(--color-ink)",
        labelKey: "preview.components.primaryForeground",
      },
      {
        label: "Border",
        name: "--color-border",
        value: "var(--color-ink)",
        labelKey: "preview.components.border",
      },
      {
        label: "Ring",
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
    description: "Saturated pins used for dots, accents, and small badges.",
    label: "Accent",
    tokens: [
      {
        label: "Info",
        name: "--color-accent-info",
        value: "#4ea8de",
        labelKey: "preview.components.info",
      },
      {
        label: "Secondary",
        name: "--color-accent-secondary",
        value: "#9b5de5",
        labelKey: "preview.components.secondary",
      },
      {
        label: "Success",
        name: "--color-accent-success",
        value: "#00b894",
        labelKey: "preview.components.success",
      },
      {
        label: "Warning",
        name: "--color-accent-warning",
        value: "#f6a609",
        labelKey: "preview.components.warning",
      },
      {
        label: "Danger",
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
    description: "Paper fills for cards, tags, buttons, and demo backgrounds.",
    label: "Fill",
    tokens: [
      {
        label: "Default",
        name: "--color-fill-default",
        value: "#ffe08a",
        labelKey: "preview.components.default",
      },
      {
        label: "Default Soft",
        name: "--color-fill-default-soft",
        value: "#fff3bf",
        labelKey: "preview.components.defaultSoft",
      },
      {
        label: "Secondary",
        name: "--color-fill-secondary",
        value: "#f6efff",
        labelKey: "preview.components.secondary",
      },
      {
        label: "Secondary Strong",
        name: "--color-fill-secondary-strong",
        value: "#eadbff",
        labelKey: "preview.components.secondaryStrong",
      },
      {
        label: "Danger",
        name: "--color-fill-danger",
        value: "#ff9bb2",
        labelKey: "preview.components.danger",
      },
      {
        label: "Info",
        name: "--color-fill-info",
        value: "#eaf7ff",
        labelKey: "preview.components.info",
      },
      {
        label: "Info Strong",
        name: "--color-fill-info-strong",
        value: "#cdeeff",
        labelKey: "preview.components.infoStrong",
      },
      {
        label: "Success",
        name: "--color-fill-success",
        value: "#eafbf5",
        labelKey: "preview.components.success",
      },
      {
        label: "Success Strong",
        name: "--color-fill-success-strong",
        value: "#cff8e6",
        labelKey: "preview.components.successStrong",
      },
      {
        label: "Warning",
        name: "--color-fill-warning",
        value: "#fff6dc",
        labelKey: "preview.components.warning",
      },
      {
        label: "Warning Strong",
        name: "--color-fill-warning-strong",
        value: "#ffe9a8",
        labelKey: "preview.components.warningStrong",
      },
      {
        label: "Danger Soft",
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
    description: "Readable text colors for statuses, helper copy, and labels.",
    label: "Text",
    tokens: [
      {
        label: "Muted",
        name: "--color-text-muted",
        value: "#5b5e6a",
        labelKey: "preview.components.muted",
      },
      {
        label: "Subtle",
        name: "--color-text-subtle",
        value: "#696b76",
        labelKey: "preview.components.subtle",
      },
      {
        label: "Placeholder",
        name: "--color-text-placeholder",
        value: "#858894",
        labelKey: "preview.components.placeholder",
      },
      {
        label: "Info",
        name: "--color-text-info",
        value: "#126b9a",
        labelKey: "preview.components.info",
      },
      {
        label: "Secondary",
        name: "--color-text-secondary",
        value: "#6930a8",
        labelKey: "preview.components.secondary",
      },
      {
        label: "Success",
        name: "--color-text-success",
        value: "#007b63",
        labelKey: "preview.components.success",
      },
      {
        label: "Success Muted",
        name: "--color-text-success-muted",
        value: "#3d5f52",
        labelKey: "preview.components.successMuted",
      },
      {
        label: "Warning",
        name: "--color-text-warning",
        value: "#9a6500",
        labelKey: "preview.components.warning",
      },
      {
        label: "Warning Muted",
        name: "--color-text-warning-muted",
        value: "#8b6f24",
        labelKey: "preview.components.warningMuted",
      },
      {
        label: "Danger",
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
    description: "Utility color for scrims and layered preview overlays.",
    label: "Utility",
    tokens: [
      {
        label: "Overlay",
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
    description: route.meta.description ?? "",
    descriptionKey: route.meta.descriptionKey,
    label: route.meta.title,
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
        items: groupRoutes.map((route) => createNavItem(route)),
        label: "",
      },
    ]
  }

  const configuredSections = sectionConfigs
    .map((section) => ({
      description: section.description,
      descriptionKey: section.descriptionKey,
      items: groupRoutes
        .filter((route) => getRouteNavSection(route) === section.id)
        .map((route) => createNavItem(route)),
      label: section.label,
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
      items: uncategorizedItems,
      label: "More",
      labelKey: "preview.components.more",
    },
  ]
}

function getRouteNavSection(route: PreviewRoute) {
  return "navSection" in route.meta ? route.meta.navSection : undefined
}

function getRegistrySourcePath(componentName: string) {
  return `src/components/ui/${componentName}.tsx`
}

function getRouteComponentName(path: string) {
  return /^\/components\/(?<componentName>[^/]+)$/.exec(path)?.groups
    ?.componentName
}

export { COLOR_TOKEN_GROUPS, COMPONENT_FILES, NAV_GROUPS }
export type { NavGroup, NavItem, NavSection }
