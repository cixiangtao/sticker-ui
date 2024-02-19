import type { RouteConfig } from "@/router/helper"

const routes = [
  {
    component: () => import("@/pages/overview"),
    meta: {
      description: "Library direction, constraints, and preview map.",
      emoji: "S",
      order: 0,
      title: "Overview",
    },
    path: "/",
  },
  {
    component: () => import("@/pages/foundation/colors"),
    meta: {
      description: "Paper, ink, accent, and semantic color usage.",
      emoji: "C",
      order: 10,
      title: "Color Tokens",
    },
    path: "/foundation/colors",
  },
  {
    component: () => import("@/pages/foundation/shadows"),
    meta: {
      description: "Hard offsets, thick outlines, and pressed states.",
      emoji: "B",
      order: 20,
      title: "Borders & Shadows",
    },
    path: "/foundation/shadows",
  },
  {
    component: () => import("@/pages/components/button"),
    meta: {
      description: "Tactile command surface for primary actions.",
      emoji: "B",
      order: 30,
      title: "Button",
    },
    path: "/components/button",
  },
  {
    component: () => import("@/pages/components/card"),
    meta: {
      description:
        "Composable sticker surfaces for cards, panels, and grouped content.",
      emoji: "C",
      order: 40,
      title: "Card",
    },
    path: "/components/card",
  },
  {
    component: () => import("@/pages/components/table"),
    meta: {
      description: "Scrollable paper tables for API and structured data.",
      emoji: "T",
      order: 50,
      title: "Table",
    },
    path: "/components/table",
  },
  {
    component: () => import("@/pages/components/tag"),
    meta: {
      description: "Compact sticker labels for status and metadata.",
      emoji: "T",
      order: 60,
      title: "Tag",
    },
    path: "/components/tag",
  },
  {
    component: () => import("@/pages/components/form"),
    meta: {
      description: "Antd-style field state and validation for sticker forms.",
      emoji: "F",
      order: 90,
      title: "Form",
    },
    path: "/components/form",
  },
  {
    component: () => import("@/pages/components/input"),
    meta: {
      description: "Native input controls with chunky sticker frames.",
      emoji: "I",
      order: 70,
      title: "Input",
    },
    path: "/components/input",
  },
  {
    component: () => import("@/pages/components/input-password"),
    meta: {
      description: "Password fields with show-hide sticker toggles.",
      emoji: "P",
      order: 75,
      title: "Input Password",
    },
    path: "/components/input-password",
  },
  {
    component: () => import("@/pages/components/textarea"),
    meta: {
      description: "Native multiline controls with chunky sticker frames.",
      emoji: "T",
      order: 80,
      title: "Textarea",
    },
    path: "/components/textarea",
  },
  {
    component: () => import("@/pages/components/label"),
    meta: {
      description: "Accessible form captions with small sticker markers.",
      emoji: "L",
      order: 100,
      title: "Label",
    },
    path: "/components/label",
  },
  {
    component: () => import("@/pages/registry/usage"),
    meta: {
      description: "Generated registry JSON and install commands.",
      emoji: "R",
      order: 110,
      title: "shadcn Install",
    },
    path: "/registry/usage",
  },
] as const satisfies readonly RouteConfig[]

export { routes }
