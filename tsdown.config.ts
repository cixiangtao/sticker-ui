import { defineConfig } from "tsdown"

const neverBundleDependencies = [
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
]

export default defineConfig({
  clean: true,
  deps: {
    alwaysBundle: [/^@colordx\/core(?:\/|$)/],
    neverBundle: neverBundleDependencies,
  },
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outExtensions({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    }
  },
  sourcemap: true,
  target: "es2022",
  treeshake: true,
})
