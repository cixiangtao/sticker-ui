import { defineConfig } from "tsdown"

export default defineConfig({
  clean: true,
  deps: {
    neverBundle: [
      "@tanstack/history",
      "@tanstack/react-router",
      "@tanstack/router-core",
      "react",
      "react-dom",
      "react/jsx-runtime",
    ],
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
