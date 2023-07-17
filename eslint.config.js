import js from "@eslint/js"
import perfectionist from "eslint-plugin-perfectionist"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [".agents", "dist", "node_modules"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-exports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-imports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-object-types": [
        "error",
        { order: "asc", type: "natural" },
      ],
      "perfectionist/sort-union-types": [
        "error",
        { order: "asc", type: "natural" },
      ],
    },
  },
)
