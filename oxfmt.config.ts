import { defineConfig } from "oxfmt"

type ImportGroupSource =
  | "builtin"
  | "external"
  | "import"
  | "index"
  | "internal"
  | "parent"
  | "sibling"
  | "style"
  | "subpath"
  | "unknown"

type ImportGroupModifier = "default" | "namespace" | "named" | "type" | "value"

type ImportGroupSelector =
  | ImportGroupSource
  | `${ImportGroupModifier}-${Exclude<ImportGroupSource, "unknown">}`

export type ImportGroups = readonly (
  | ImportGroupSelector
  | readonly ImportGroupSelector[]
)[]

export default defineConfig({
  ignorePatterns: [
    ".agents",
    ".playwright-mcp",
    "dist",
    "node_modules",
    "package-lock.json",
    "pnpm-lock.yaml",
    "public/r",
  ],
  printWidth: 80,
  semi: false,
  sortImports: {
    // 不配置 groups 时，oxfmt 会使用官方内置的 import 分组规则。
    // 自定义时可以写成 `groups: [...] as const satisfies ImportGroups`，
    // 同一个数组内不会空行，不同数组之间会空行分组。
    // groups: [
    //   ["value-builtin", "type-builtin", "value-external", "type-external"],
    //   ["value-internal", "type-internal", "value-subpath", "type-subpath"],
    //   [
    //     "value-parent",
    //     "type-parent",
    //     "value-sibling",
    //     "type-sibling",
    //     "value-index",
    //     "type-index",
    //   ],
    //   "style",
    //   "unknown",
    // ] as const satisfies ImportGroups,
    internalPattern: ["@/", "~/"],
    order: "asc",
  },
  sortPackageJson: false,
  sortTailwindcss: {
    functions: ["cn", "clsx", "cva", "twMerge"],
    preserveWhitespace: true,
    stylesheet: "./src/globals.css",
  },
})
