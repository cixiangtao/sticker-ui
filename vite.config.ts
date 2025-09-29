import { fileURLToPath, URL } from "node:url"

import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
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
  plugins: [
    babel({
      plugins: [["@locator/babel-jsx/dist", { env: "development" }]],
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@anys/tanstack-route-kit": fileURLToPath(
        new URL("./packages/tanstack-route-kit/src/index.ts", import.meta.url),
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
})
