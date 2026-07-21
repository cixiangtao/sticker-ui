import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

import { describe, expect, it } from "vite-plus/test"

interface PackageJson {
  bugs?: {
    url?: string
  }
  homepage?: string
  repository?: {
    type?: string
    url?: string
  }
  scripts?: Record<string, string>
}

interface RegistryFile {
  homepage?: string
  items: RegistryItem[]
}

interface RegistryItem {
  files: RegistryItemFile[]
  name: string
  registryDependencies?: string[]
  type: string
}

interface RegistryItemFile {
  path: string
  target: string
  type: string
}

const projectRoot = process.cwd()

function readProjectFile(path: string) {
  return readFileSync(join(projectRoot, path), "utf8")
}

function readProjectJson<T>(path: string) {
  return JSON.parse(readProjectFile(path)) as T
}

function sorted(values: string[]) {
  return [...values].sort((first, second) => first.localeCompare(second))
}

function getComponentSourceNames() {
  return sorted(
    readdirSync(join(projectRoot, "src/components/ui"))
      .filter((fileName) => fileName.endsWith(".tsx"))
      .map((fileName) => fileName.replace(/\.tsx$/, "")),
  )
}

describe("release contract", () => {
  const packageJson = readProjectJson<PackageJson>("package.json")
  const registry = readProjectJson<RegistryFile>("registry.json")
  const apiDocs = readProjectJson<Record<string, unknown>>(
    "src/generated/preview-api-docs.json",
  )
  const pageExports = readProjectFile("src/pages/components/index.tsx")
  const routes = readProjectFile("src/router/routes.ts")

  const registryUiItems = registry.items.filter(
    (item) => item.type === "registry:ui",
  )
  const registryUiNames = sorted(registryUiItems.map((item) => item.name))

  it("keeps the registry, preview, API docs, and component sources aligned", () => {
    const sourceNames = getComponentSourceNames()

    expect(registryUiNames).toEqual(sourceNames)
    expect(sorted(Object.keys(apiDocs))).toEqual(registryUiNames)

    for (const name of registryUiNames) {
      expect(
        existsSync(join(projectRoot, `src/pages/components/${name}/demos`)),
      ).toBe(true)
      expect(pageExports).toContain(`createRegistryComponentPage("${name}")`)
      expect(routes).toContain(`/components/${name}`)
    }
  })

  it("keeps registry item files source-first and generated install files present", () => {
    const itemNames = sorted(registry.items.map((item) => item.name))
    const publicRegistryNames = sorted(
      readdirSync(join(projectRoot, "public/r"))
        .filter((fileName) => fileName.endsWith(".json"))
        .map((fileName) => fileName.replace(/\.json$/, "")),
    )

    expect(publicRegistryNames).toEqual(sorted([...itemNames, "registry"]))

    for (const item of registry.items) {
      for (const file of item.files) {
        expect(file.path.startsWith("src/")).toBe(true)
        expect(file.type).toBe(item.type)
        expect(existsSync(join(projectRoot, file.path))).toBe(true)

        if (item.type === "registry:ui") {
          expect(file.target).toMatch(/^@ui\/.+\.tsx$/)
        }
      }

      for (const dependency of item.registryDependencies ?? []) {
        expect(itemNames).toContain(dependency)
      }
    }
  })

  it("does not ship placeholder public registry addresses", () => {
    const searchableFiles = [
      "README.md",
      "registry.json",
      "public/r/registry.json",
      "src/pages/registry/usage/index.tsx",
    ]

    expect(registry.homepage).toBe("https://cixiangtao.github.io/sticker-ui/")

    for (const path of searchableFiles) {
      const content = readProjectFile(path)

      expect(content).not.toContain("example.com")
      expect(content).not.toContain("your-domain.com")
    }
  })

  it("publishes canonical project links in the package metadata", () => {
    expect(packageJson.homepage).toBe(
      "https://cixiangtao.github.io/sticker-ui/",
    )
    expect(packageJson.repository).toEqual({
      type: "git",
      url: "git+https://github.com/cixiangtao/sticker-ui.git",
    })
    expect(packageJson.bugs?.url).toBe(
      "https://github.com/cixiangtao/sticker-ui/issues",
    )
  })

  it("keeps package and preview build outputs separated", () => {
    const viteConfig = readProjectFile("vite.config.ts")

    expect(packageJson.scripts?.["build:lib"]).toContain("tsdown")
    expect(packageJson.scripts?.["build:preview"]).toContain("vp build")
    expect(viteConfig).toContain('const previewOutDir = "dist-preview"')
    expect(viteConfig).toContain(
      'outDir: isGitLabPagesBuild ? "public" : previewOutDir',
    )
  })
})
