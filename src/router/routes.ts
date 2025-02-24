import { defineRoutes } from "@/router/helper"

const routes = defineRoutes([
  {
    component: () =>
      import("@/pages/overview").then((module) => module.OverviewPage),
    meta: {
      emoji: "S",
      order: 0,
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
      emoji: "C",
      order: 10,
      titleKey: "preview.components.colorTokens",
      descriptionKey: "preview.components.paperInkAccentAndSemanticColorUsage",
    },
    path: "/foundation/colors",
  },
  {
    component: () =>
      import("@/pages/foundation/shadows").then((module) => module.ShadowsPage),
    meta: {
      emoji: "B",
      order: 20,
      titleKey: "preview.components.bordersAndShadows",
      descriptionKey:
        "preview.components.hardOffsetsThickOutlinesAndPressedStates",
    },
    path: "/foundation/shadows",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.ButtonPage),
    meta: {
      emoji: "B",
      navSection: "actions",
      order: 30,
      title: "Button",
      descriptionKey:
        "preview.components.tactileCommandSurfaceForPrimaryActions",
    },
    path: "/components/button",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.CardPage),
    meta: {
      emoji: "C",
      navSection: "surfaces-data",
      order: 40,
      title: "Card",
      descriptionKey:
        "preview.components.composableStickerSurfacesForCardsPanelsAndGroupedContent",
    },
    path: "/components/card",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.LayoutPage),
    meta: {
      emoji: "L",
      navSection: "surfaces-data",
      order: 45,
      title: "Flex / Grid",
      descriptionKey:
        "preview.components.tailwindSafeFlexAndGridPrimitivesForComposition",
    },
    path: "/components/layout",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.DividerPage),
    meta: {
      emoji: "D",
      navSection: "surfaces-data",
      order: 47,
      descriptionKey:
        "preview.components.semanticSeparatorsForSectionsAndSplitSurfaces",
      title: "Divider",
    },
    path: "/components/divider",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.JsxJoinPage),
    meta: {
      emoji: "J",
      navSection: "surfaces-data",
      order: 48,
      title: "JsxJoin",
      descriptionKey:
        "preview.components.insertSeparatorsBetweenJsxChildrenWithoutNoisyMarkup",
    },
    path: "/components/jsx-join",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.TablePage),
    meta: {
      emoji: "T",
      navSection: "surfaces-data",
      order: 50,
      title: "Table",
      descriptionKey:
        "preview.components.scrollablePaperTablesForApiAndStructuredData",
    },
    path: "/components/table",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.TagPage),
    meta: {
      emoji: "T",
      navSection: "feedback-status",
      order: 60,
      title: "Tag",
      descriptionKey:
        "preview.components.compactStickerLabelsForStatusAndMetadata",
    },
    path: "/components/tag",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.AlertPage),
    meta: {
      emoji: "A",
      navSection: "feedback-status",
      order: 65,
      title: "Alert",
      descriptionKey:
        "preview.components.readableStickerNotesForFeedbackAndStatusMessages",
    },
    path: "/components/alert",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.BadgePage),
    meta: {
      emoji: "B",
      navSection: "feedback-status",
      order: 66,
      title: "Badge",
      descriptionKey: "preview.components.cornerBadgesForCountsAndStatusDots",
    },
    path: "/components/badge",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.ProgressPage),
    meta: {
      emoji: "P",
      navSection: "feedback-status",
      order: 67,
      title: "Progress",
      descriptionKey:
        "preview.components.accessibleStickerProgressBarsForCompletionAndLoadingStates",
    },
    path: "/components/progress",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.SkeletonPage),
    meta: {
      emoji: "S",
      navSection: "feedback-status",
      order: 68,
      title: "Skeleton",
      descriptionKey:
        "preview.components.warmPaperPlaceholdersForLoadingCardsRowsAndText",
    },
    path: "/components/skeleton",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.SpinnerPage),
    meta: {
      emoji: "S",
      navSection: "feedback-status",
      order: 69,
      title: "Spinner",
      descriptionKey:
        "preview.components.compactAccessibleSpinnersForPendingAsyncRegions",
    },
    path: "/components/spinner",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.FormPage),
    meta: {
      emoji: "F",
      navSection: "form-controls",
      order: 90,
      title: "Form",
      descriptionKey:
        "preview.components.antdStyleFieldStateAndValidationForStickerForms",
    },
    path: "/components/form",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.InputPage),
    meta: {
      emoji: "I",
      navSection: "form-controls",
      order: 70,
      title: "Input",
      descriptionKey:
        "preview.components.nativeInputControlsWithChunkyStickerFrames",
    },
    path: "/components/input",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.InputPasswordPage),
    meta: {
      emoji: "P",
      navSection: "form-controls",
      order: 75,
      descriptionKey:
        "preview.components.passwordFieldsWithShowHideStickerToggles",
      title: "InputPassword",
    },
    path: "/components/input-password",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.TextareaPage),
    meta: {
      emoji: "T",
      navSection: "form-controls",
      order: 80,
      title: "Textarea",
      descriptionKey:
        "preview.components.nativeMultilineControlsWithChunkyStickerFrames",
    },
    path: "/components/textarea",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.SelectPage),
    meta: {
      emoji: "S",
      navSection: "form-controls",
      order: 85,
      title: "Select",
      descriptionKey:
        "preview.components.radixOptionControlsWithChunkyStickerFrames",
    },
    path: "/components/select",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.TooltipPage),
    meta: {
      emoji: "T",
      navSection: "overlays",
      order: 89,
      title: "Tooltip",
      descriptionKey:
        "preview.components.radixHelpBubblesWithCompactStickerPaperStyling",
    },
    path: "/components/tooltip",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.PopoverPage),
    meta: {
      emoji: "P",
      navSection: "overlays",
      order: 90,
      title: "Popover",
      descriptionKey:
        "preview.components.interactiveFloatingPanelsForFiltersAndQuickActions",
    },
    path: "/components/popover",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.DialogPage),
    meta: {
      emoji: "D",
      navSection: "overlays",
      order: 91,
      title: "Dialog",
      descriptionKey:
        "preview.components.modalStickerPanelsForFocusedDecisionsAndForms",
    },
    path: "/components/dialog",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.CheckboxPage),
    meta: {
      emoji: "C",
      navSection: "form-controls",
      order: 86,
      title: "Checkbox",
      descriptionKey:
        "preview.components.radixCheckboxControlsWithStickerCheckedStates",
    },
    path: "/components/checkbox",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.RadioPage),
    meta: {
      emoji: "R",
      navSection: "form-controls",
      order: 87,
      title: "RadioGroup",
      descriptionKey:
        "preview.components.radixRadioGroupsWithTactileStickerItems",
    },
    path: "/components/radio",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.SwitchPage),
    meta: {
      emoji: "S",
      navSection: "form-controls",
      order: 88,
      title: "Switch",
      descriptionKey:
        "preview.components.radixSwitchControlsWithTactileStickerTracks",
    },
    path: "/components/switch",
  },
  {
    component: () =>
      import("@/pages/components").then((module) => module.LabelPage),
    meta: {
      emoji: "L",
      navSection: "form-controls",
      order: 100,
      title: "Label",
      descriptionKey:
        "preview.components.accessibleFormCaptionsWithSmallStickerMarkers",
    },
    path: "/components/label",
  },
  {
    component: () =>
      import("@/pages/registry/usage").then((module) => module.RegistryPage),
    meta: {
      emoji: "R",
      order: 110,
      titleKey: "preview.components.shadcnInstall",
      descriptionKey:
        "preview.components.generatedRegistryJsonAndInstallCommands",
    },
    path: "/registry/usage",
  },
])

export { routes }
