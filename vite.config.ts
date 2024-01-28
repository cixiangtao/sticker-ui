import { fileURLToPath, URL } from "node:url"

import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    babel({
      plugins: [["@locator/babel-jsx/dist", { env: "development" }]],
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
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
