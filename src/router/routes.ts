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
      import("@/pages/components/button").then((module) => module.ButtonPage),
    meta: {
      emoji: "B",
      navSection: "actions",
      order: 30,
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
      emoji: "C",
      navSection: "surfaces-data",
      order: 40,
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
      emoji: "L",
      navSection: "surfaces-data",
      order: 45,
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
      emoji: "D",
      navSection: "surfaces-data",
      order: 47,
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
      emoji: "J",
      navSection: "surfaces-data",
      order: 48,
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
      emoji: "T",
      navSection: "surfaces-data",
      order: 50,
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
      emoji: "T",
      navSection: "feedback-status",
      order: 60,
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
      emoji: "A",
      navSection: "feedback-status",
      order: 65,
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
      emoji: "F",
      navSection: "form-controls",
      order: 90,
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
      emoji: "I",
      navSection: "form-controls",
      order: 70,
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
      emoji: "P",
      navSection: "form-controls",
      order: 75,
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
      emoji: "T",
      navSection: "form-controls",
      order: 80,
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
      emoji: "S",
      navSection: "form-controls",
      order: 85,
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
      emoji: "T",
      navSection: "overlays",
      order: 89,
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
      emoji: "P",
      navSection: "overlays",
      order: 90,
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
      emoji: "D",
      navSection: "overlays",
      order: 91,
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
      emoji: "C",
      navSection: "form-controls",
      order: 86,
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
      emoji: "R",
      navSection: "form-controls",
      order: 87,
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
      emoji: "S",
      navSection: "form-controls",
      order: 88,
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
      emoji: "L",
      navSection: "form-controls",
      order: 100,
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
