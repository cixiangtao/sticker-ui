import { spawnSync } from "node:child_process"
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

const packageRoot = process.cwd()
const temporaryDirectory = await mkdtemp(join(tmpdir(), "sticker-ui-package-"))

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: packageRoot,
    encoding: "utf8",
    ...options,
  })

  if (result.status !== 0) {
    process.stderr.write(result.stdout ?? "")
    process.stderr.write(result.stderr ?? "")
    throw new Error(`${command} ${args.join(" ")} failed`)
  }

  return result
}

try {
  run("pnpm", ["pack", "--pack-destination", temporaryDirectory], {
    stdio: "inherit",
  })

  const archives = (await readdir(temporaryDirectory)).filter((fileName) =>
    fileName.endsWith(".tgz"),
  )

  if (archives.length !== 1) {
    throw new Error(`Expected one package archive, found ${archives.length}`)
  }

  const archivePath = join(temporaryDirectory, archives[0])
  const listing = run("tar", ["-tzf", archivePath])
    .stdout.split("\n")
    .filter(Boolean)

  const requiredFiles = [
    "package/LICENSE",
    "package/README.md",
    "package/dist/index.cjs",
    "package/dist/index.d.ts",
    "package/dist/index.js",
    "package/dist/tokens.css",
    "package/package.json",
    "package/registry.json",
  ]

  for (const path of requiredFiles) {
    if (!listing.includes(path)) {
      throw new Error(`Package archive is missing ${path}`)
    }
  }

  for (const path of listing) {
    if (
      path.startsWith("package/.github/") ||
      path.includes("/node_modules/")
    ) {
      throw new Error(`Package archive contains private content: ${path}`)
    }
  }

  run("tar", ["-xzf", archivePath, "-C", temporaryDirectory])

  const packedPackage = JSON.parse(
    await readFile(join(temporaryDirectory, "package", "package.json"), "utf8"),
  )
  const packedReadme = await readFile(
    join(temporaryDirectory, "package", "README.md"),
    "utf8",
  )

  if (packedPackage.name !== "sticker-ui") {
    throw new Error(`Unexpected package name: ${packedPackage.name}`)
  }

  if (packedPackage.license !== "MIT") {
    throw new Error(`Unexpected package license: ${packedPackage.license}`)
  }

  if (!packedReadme.includes("sticker-ui@beta")) {
    throw new Error("Packed README does not document the beta install channel")
  }

  console.log(
    `Verified ${archives[0]} with ${listing.length} files, MIT license, package entrypoints, tokens, Registry, and npm README.`,
  )
} finally {
  await rm(temporaryDirectory, { force: true, recursive: true })
}
