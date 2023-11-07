import { copyFile, mkdir } from "node:fs/promises"

await mkdir("dist", { recursive: true })
await copyFile("src/tokens.css", "dist/tokens.css")
