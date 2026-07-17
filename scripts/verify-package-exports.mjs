import { readFile } from "node:fs/promises"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const requiredExports = ["Button", "Card", "ColorPicker"]

const esmPackage = await import("sticker-ui")
const cjsPackage = require("sticker-ui")

for (const exportName of requiredExports) {
  if (!(exportName in esmPackage)) {
    throw new Error(`Missing ESM export: ${exportName}`)
  }

  if (!(exportName in cjsPackage)) {
    throw new Error(`Missing CommonJS export: ${exportName}`)
  }
}

const tokens = await readFile(
  new URL("../dist/tokens.css", import.meta.url),
  "utf8",
)

if (!tokens.includes("--color-su-ink")) {
  throw new Error("The package token stylesheet is missing Sticker UI tokens")
}

console.log(
  `Verified ${requiredExports.length} package exports in ESM and CommonJS plus tokens.css.`,
)
