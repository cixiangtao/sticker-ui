import type { UserConfig } from "vite-plus"

export const fmtConfig = {
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
} satisfies NonNullable<UserConfig["fmt"]>
