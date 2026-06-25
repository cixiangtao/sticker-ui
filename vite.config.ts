import { fileURLToPath, URL } from "node:url"

import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig, lazyPlugins } from "vite-plus"
import type { PluginOption } from "vite-plus"
import type { OxfmtConfig } from "vite-plus/fmt"
import type { OxlintConfig } from "vite-plus/lint"

const isGitLabPagesBuild = process.env.GITLAB_PAGES === "true"
const isSitesBuild = process.env.SITES_BUILD === "true"
const previewOutDir = "dist-preview"

const fmtConfig: OxfmtConfig = {
  ignorePatterns: [
    ".agents",
    ".playwright-mcp",
    "dist",
    "dist-preview",
    "node_modules",
    "package-lock.json",
    "pnpm-lock.yaml",
    "public/r",
    "src/generated/preview-api-docs.json",
  ],
  printWidth: 80,
  semi: false,
  sortImports: {
    internalPattern: ["@/", "~/"],
    order: "asc",
  },
  sortPackageJson: true,
  sortTailwindcss: {
    functions: ["cn", "clsx", "cva", "twMerge"],
    preserveWhitespace: true,
    stylesheet: "./src/globals.css",
  },
}

const lintConfig: OxlintConfig = {
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
}

export default defineConfig(async () => {
  const sitesPlugins: PluginOption[] = []

  if (isSitesBuild) {
    const { cloudflare } = await import("@cloudflare/vite-plugin")
    const { sites } = await import("./scripts/sites-vite-plugin")

    sitesPlugins.push(
      sites() as unknown as PluginOption,
      cloudflare({
        config: {
          main: "./worker/index.ts",
          compatibility_date: "2026-07-10",
          compatibility_flags: ["nodejs_compat"],
          assets: {
            binding: "ASSETS",
            not_found_handling: "single-page-application",
          },
        },
      }) as unknown as PluginOption,
    )
  }

  return {
    staged: {
      "*": "vp check --fix",
    },
    fmt: fmtConfig,
    lint: lintConfig,
    publicDir: isGitLabPagesBuild ? (false as const) : "public",
    build: {
      copyPublicDir: !isGitLabPagesBuild,
      chunkSizeWarningLimit: 650,
      emptyOutDir: isGitLabPagesBuild ? false : true,
      outDir: isGitLabPagesBuild
        ? "public"
        : isSitesBuild
          ? "dist"
          : previewOutDir,
      rolldownOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules/react-dom")) {
              return "vendor-react-dom"
            }

            if (
              id.includes("node_modules/react") ||
              id.includes("node_modules/scheduler")
            ) {
              return "vendor-react"
            }

            if (id.includes("node_modules/@tanstack")) {
              return "vendor-router"
            }

            if (
              id.includes("node_modules/i18next") ||
              id.includes("node_modules/react-i18next")
            ) {
              return "vendor-i18n"
            }

            if (
              id.includes("node_modules/@radix-ui") ||
              id.includes("node_modules/lucide-react") ||
              id.includes("node_modules/class-variance-authority") ||
              id.includes("node_modules/clsx") ||
              id.includes("node_modules/tailwind-merge")
            ) {
              return "vendor-ui"
            }
          },
        },
      },
    },
    plugins: lazyPlugins(() => [
      babel({
        plugins: [["@locator/babel-jsx/dist", { env: "development" }]],
        presets: [reactCompilerPreset()],
      }),
      react(),
      tailwindcss(),
      ...sitesPlugins,
    ]),
    resolve: {
      alias: {
        "@anys/tanstack-route-kit": fileURLToPath(
          new URL(
            "./packages/tanstack-route-kit/src/index.ts",
            import.meta.url,
          ),
        ),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "sticker-ui": fileURLToPath(new URL("./src/index.ts", import.meta.url)),
        "~": fileURLToPath(new URL(".", import.meta.url)),
      },
    },
    server: {
      port: 7777,
      strictPort: true,
    },
  }
})
