import type { UserConfig } from "vite-plus"

export const lintConfig = {
  categories: {
    correctness: "error",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  ignorePatterns: [
    ".agents",
    ".playwright-mcp",
    "dist",
    "dist-preview",
    "node_modules",
    "public/r",
    "src/generated/preview-api-docs.json",
  ],
  jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
  plugins: ["eslint", "import", "typescript", "react"],
  rules: {
    "import/no-unassigned-import": "off",
    "react/react-in-jsx-scope": "off",
    "vite-plus/prefer-vite-plus-imports": "error",
  },
  settings: {
    react: {
      version: "19.0",
    },
  },
} satisfies NonNullable<UserConfig["lint"]>
