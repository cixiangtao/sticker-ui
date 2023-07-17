import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: [
    "@radix-ui/react-checkbox",
    "@radix-ui/react-dialog",
    "@radix-ui/react-popover",
    "@radix-ui/react-switch",
    "@radix-ui/react-tooltip",
    "class-variance-authority",
    "clsx",
    "react",
    "react-dom",
    "react/jsx-runtime",
    "tailwind-merge",
    "tailwindcss",
  ],
  format: ["esm", "cjs"],
  sourcemap: true,
  splitting: false,
  target: "es2022",
  treeshake: true,
})
