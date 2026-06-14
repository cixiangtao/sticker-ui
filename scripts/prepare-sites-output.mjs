import { copyFile, mkdir } from "node:fs/promises"

const workerEntry = "dist/sticker_ui/index.js"
const sitesEntry = "dist/server/index.js"

await mkdir("dist/server", { recursive: true })
await copyFile(workerEntry, sitesEntry)
