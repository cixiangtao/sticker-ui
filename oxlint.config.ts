import { defineConfig } from "oxlint"

export default defineConfig({
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
  plugins: ["eslint", "import", "typescript", "react"],
  rules: {
    "import/no-unassigned-import": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "19.0",
    },
  },
})
