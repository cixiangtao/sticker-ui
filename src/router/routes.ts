import { defineRoutes } from "@/router/helper"

const routes = defineRoutes([
  {
    component: () =>
      import("@/pages/overview").then((module) => module.OverviewPage),
    meta: {
      description: "Library direction, constraints, and preview map.",
      emoji: "S",
      order: 0,
      title: "Overview",
      titleKey: "preview.components.overview",
      descriptionKey:
        "preview.components.libraryDirectionConstraintsAndPreviewMap",
    },
    path: "/",
  },
  {
    component: () =>
      import("@/pages/foundation/colors").then((module) => module.ColorsPage),
    meta: {
      description: "Paper, ink, accent, and semantic color usage.",
      emoji: "C",
      order: 10,
      title: "Color Tokens",
      titleKey: "preview.components.colorTokens",
      descriptionKey: "preview.components.paperInkAccentAndSemanticColorUsage",
    },
    path: "/foundation/colors",
  },
  {
    component: () =>
      import("@/pages/foundation/shadows").then((module) => module.ShadowsPage),
    meta: {
      description: "Hard offsets, thick outlines, and pressed states.",
      emoji: "B",
      order: 20,
      title: "Borders & Shadows",
      titleKey: "preview.components.bordersAndShadows",
      descriptionKey:
        "preview.components.hardOffsetsThickOutlinesAndPressedStates",
    },
    path: "/foundation/shadows",
  },
  {
    component: () =>
      import("@/pages/components/button").then((module) => module.ButtonPage),
    meta: {
      description: "Tactile command surface for primary actions.",
      emoji: "B",
      navSection: "actions",
      order: 30,
      title: "Button",
      titleKey: "preview.components.button",
      descriptionKey:
        "preview.components.tactileCommandSurfaceForPrimaryActions",
    },
    path: "/components/button",
  },
  {
    component: () =>
      import("@/pages/components/card").then((module) => module.CardPage),
    meta: {
      description:
        "Composable sticker surfaces for cards, panels, and grouped content.",
      emoji: "C",
      navSection: "surfaces-data",
      order: 40,
      title: "Card",
      titleKey: "preview.components.card",
      descriptionKey:
        "preview.components.composableStickerSurfacesForCardsPanelsAndGroupedContent",
    },
    path: "/components/card",
  },
  {
    component: () =>
      import("@/pages/components/layout").then((module) => module.LayoutPage),
    meta: {
      description: "Tailwind-safe Flex and Grid primitives for composition.",
      emoji: "L",
      navSection: "surfaces-data",
      order: 45,
      title: "Layout",
      titleKey: "preview.components.layout",
      descriptionKey:
        "preview.components.tailwindSafeFlexAndGridPrimitivesForComposition",
    },
    path: "/components/layout",
  },
  {
    component: () =>
      import("@/pages/components/divider").then((module) => module.DividerPage),
    meta: {
      description: "Semantic separators for sections and split surfaces.",
      emoji: "D",
      navSection: "surfaces-data",
      order: 47,
      title: "Divider",
      descriptionKey:
        "preview.components.semanticSeparatorsForSectionsAndSplitSurfaces",
      titleKey: "preview.components.divider",
    },
    path: "/components/divider",
  },
  {
    component: () =>
      import("@/pages/components/jsx-join").then(
        (module) => module.JsxJoinPage,
      ),
    meta: {
      description:
        "Insert separators between JSX children without noisy markup.",
      emoji: "J",
      navSection: "surfaces-data",
      order: 48,
      title: "JsxJoin",
      titleKey: "preview.components.jsxjoin",
      descriptionKey:
        "preview.components.insertSeparatorsBetweenJsxChildrenWithoutNoisyMarkup",
    },
    path: "/components/jsx-join",
  },
  {
    component: () =>
      import("@/pages/components/table").then((module) => module.TablePage),
    meta: {
      description: "Scrollable paper tables for API and structured data.",
      emoji: "T",
      navSection: "surfaces-data",
      order: 50,
      title: "Table",
      titleKey: "preview.components.table",
      descriptionKey:
        "preview.components.scrollablePaperTablesForApiAndStructuredData",
    },
    path: "/components/table",
  },
  {
    component: () =>
      import("@/pages/components/tag").then((module) => module.TagPage),
    meta: {
      description: "Compact sticker labels for status and metadata.",
      emoji: "T",
      navSection: "feedback-status",
      order: 60,
      title: "Tag",
      titleKey: "preview.components.tag",
      descriptionKey:
        "preview.components.compactStickerLabelsForStatusAndMetadata",
    },
    path: "/components/tag",
  },
  {
    component: () =>
      import("@/pages/components/alert").then((module) => module.AlertPage),
    meta: {
      description: "Readable sticker notes for feedback and status messages.",
      emoji: "A",
      navSection: "feedback-status",
      order: 65,
      title: "Alert",
      titleKey: "preview.components.alert",
      descriptionKey:
        "preview.components.readableStickerNotesForFeedbackAndStatusMessages",
    },
    path: "/components/alert",
  },
  {
    component: () =>
      import("@/pages/components/form").then((module) => module.FormPage),
    meta: {
      description: "Antd-style field state and validation for sticker forms.",
      emoji: "F",
      navSection: "form-controls",
      order: 90,
      title: "Form",
      titleKey: "preview.components.form",
      descriptionKey:
        "preview.components.antdStyleFieldStateAndValidationForStickerForms",
    },
    path: "/components/form",
  },
  {
    component: () =>
      import("@/pages/components/input").then((module) => module.InputPage),
    meta: {
      description: "Native input controls with chunky sticker frames.",
      emoji: "I",
      navSection: "form-controls",
      order: 70,
      title: "Input",
      titleKey: "preview.components.input",
      descriptionKey:
        "preview.components.nativeInputControlsWithChunkyStickerFrames",
    },
    path: "/components/input",
  },
  {
    component: () =>
      import("@/pages/components/input-password").then(
        (module) => module.InputPasswordPage,
      ),
    meta: {
      description: "Password fields with show-hide sticker toggles.",
      emoji: "P",
      navSection: "form-controls",
      order: 75,
      title: "Input Password",
      descriptionKey:
        "preview.components.passwordFieldsWithShowHideStickerToggles",
      titleKey: "preview.components.inputPassword",
    },
    path: "/components/input-password",
  },
  {
    component: () =>
      import("@/pages/components/textarea").then(
        (module) => module.TextareaPage,
      ),
    meta: {
      description: "Native multiline controls with chunky sticker frames.",
      emoji: "T",
      navSection: "form-controls",
      order: 80,
      title: "Textarea",
      titleKey: "preview.components.textarea",
      descriptionKey:
        "preview.components.nativeMultilineControlsWithChunkyStickerFrames",
    },
    path: "/components/textarea",
  },
  {
    component: () =>
      import("@/pages/components/select").then((module) => module.SelectPage),
    meta: {
      description: "Radix option controls with chunky sticker frames.",
      emoji: "S",
      navSection: "form-controls",
      order: 85,
      title: "Select",
      titleKey: "preview.components.select",
      descriptionKey:
        "preview.components.radixOptionControlsWithChunkyStickerFrames",
    },
    path: "/components/select",
  },
  {
    component: () =>
      import("@/pages/components/tooltip").then((module) => module.TooltipPage),
    meta: {
      description: "Radix help bubbles with compact sticker paper styling.",
      emoji: "T",
      navSection: "overlays",
      order: 89,
      title: "Tooltip",
      titleKey: "preview.components.tooltip",
      descriptionKey:
        "preview.components.radixHelpBubblesWithCompactStickerPaperStyling",
    },
    path: "/components/tooltip",
  },
  {
    component: () =>
      import("@/pages/components/popover").then((module) => module.PopoverPage),
    meta: {
      description: "Interactive floating panels for filters and quick actions.",
      emoji: "P",
      navSection: "overlays",
      order: 90,
      title: "Popover",
      titleKey: "preview.components.popover",
      descriptionKey:
        "preview.components.interactiveFloatingPanelsForFiltersAndQuickActions",
    },
    path: "/components/popover",
  },
  {
    component: () =>
      import("@/pages/components/dialog").then((module) => module.DialogPage),
    meta: {
      description: "Modal sticker panels for focused decisions and forms.",
      emoji: "D",
      navSection: "overlays",
      order: 91,
      title: "Dialog",
      titleKey: "preview.components.dialog",
      descriptionKey:
        "preview.components.modalStickerPanelsForFocusedDecisionsAndForms",
    },
    path: "/components/dialog",
  },
  {
    component: () =>
      import("@/pages/components/checkbox").then(
        (module) => module.CheckboxPage,
      ),
    meta: {
      description: "Radix checkbox controls with sticker checked states.",
      emoji: "C",
      navSection: "form-controls",
      order: 86,
      title: "Checkbox",
      titleKey: "preview.components.checkbox",
      descriptionKey:
        "preview.components.radixCheckboxControlsWithStickerCheckedStates",
    },
    path: "/components/checkbox",
  },
  {
    component: () =>
      import("@/pages/components/radio").then((module) => module.RadioPage),
    meta: {
      description: "Radix radio groups with tactile sticker items.",
      emoji: "R",
      navSection: "form-controls",
      order: 87,
      title: "Radio",
      titleKey: "preview.components.radio",
      descriptionKey:
        "preview.components.radixRadioGroupsWithTactileStickerItems",
    },
    path: "/components/radio",
  },
  {
    component: () =>
      import("@/pages/components/switch").then((module) => module.SwitchPage),
    meta: {
      description: "Radix switch controls with tactile sticker tracks.",
      emoji: "S",
      navSection: "form-controls",
      order: 88,
      title: "Switch",
      titleKey: "preview.components.switch",
      descriptionKey:
        "preview.components.radixSwitchControlsWithTactileStickerTracks",
    },
    path: "/components/switch",
  },
  {
    component: () =>
      import("@/pages/components/label").then((module) => module.LabelPage),
    meta: {
      description: "Accessible form captions with small sticker markers.",
      emoji: "L",
      navSection: "form-controls",
      order: 100,
      title: "Label",
      titleKey: "preview.components.label",
      descriptionKey:
        "preview.components.accessibleFormCaptionsWithSmallStickerMarkers",
    },
    path: "/components/label",
  },
  {
    component: () =>
      import("@/pages/registry/usage").then((module) => module.RegistryPage),
    meta: {
      description: "Generated registry JSON and install commands.",
      emoji: "R",
      order: 110,
      title: "shadcn Install",
      titleKey: "preview.components.shadcnInstall",
      descriptionKey:
        "preview.components.generatedRegistryJsonAndInstallCommands",
    },
    path: "/registry/usage",
  },
])

export { routes }
