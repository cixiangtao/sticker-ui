import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

import { describe, expect, it } from "vite-plus/test"

interface PackageJson {
  bugs?: {
    url?: string
  }
  devDependencies?: Record<string, string>
  homepage?: string
  license?: string
  private?: boolean
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

function expectActionsPinned(workflow: string) {
  const actionReferences = [...workflow.matchAll(/uses:\s+([^\s#]+)/g)].map(
    ([, actionReference]) => actionReference,
  )

  expect(actionReferences.length).toBeGreaterThan(0)

  for (const actionReference of actionReferences) {
    expect(actionReference).toMatch(/^[^@]+@[0-9a-f]{40}$/)
  }
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

  it("does not document placeholder public registry addresses", () => {
    const searchableFiles = [
      "README.md",
      ".github/README.md",
      "registry.json",
      "public/r/registry.json",
      "src/pages/registry/usage/index.tsx",
    ]

    expect(registry.homepage).toBe("https://sticker-ui.cixiangtao.workers.dev/")

    for (const path of searchableFiles) {
      const content = readProjectFile(path)

      expect(content).not.toContain("example.com")
      expect(content).not.toContain("your-domain.com")
    }
  })

  it("keeps npm and GitHub README surfaces separate", () => {
    const npmReadme = readProjectFile("README.md")
    const githubReadme = readProjectFile(".github/README.md")

    expect(npmReadme).toContain("https://github.com/cixiangtao/sticker-ui")
    expect(npmReadme).not.toContain("sticker-ui.cixiangtao.workers.dev")
    expect(githubReadme).toContain(packageJson.homepage)
  })

  it("publishes canonical project links in the package metadata", () => {
    expect(packageJson.homepage).toBe(
      "https://sticker-ui.cixiangtao.workers.dev/",
    )
    expect(packageJson.repository).toEqual({
      type: "git",
      url: "git+https://github.com/cixiangtao/sticker-ui.git",
    })
    expect(packageJson.bugs?.url).toBe(
      "https://github.com/cixiangtao/sticker-ui/issues",
    )
  })

  it("publishes an explicit license and keeps internal packages private", () => {
    const routeKitPackage = readProjectJson<PackageJson>(
      "packages/tanstack-route-kit/package.json",
    )

    expect(readProjectFile("LICENSE")).toContain("MIT License")
    expect(packageJson.license).toBe("MIT")
    expect(routeKitPackage.license).toBe("MIT")
    expect(routeKitPackage.private).toBe(true)
  })

  it("keeps stable and beta release channels explicit", () => {
    const releaseConfig = readProjectJson<{
      github?: { release?: boolean }
      npm?: {
        publish?: boolean
      }
    }>(".release-it.json")
    const npmReadme = readProjectFile("README.md")
    const githubReadme = readProjectFile(".github/README.md")
    const publishWorkflow = readProjectFile(".github/workflows/publish.yml")

    expect(packageJson.scripts?.release).toBe("release-it")
    expect(packageJson.scripts?.["release:beta"]).toBe(
      "release-it --preRelease",
    )
    expect(releaseConfig.npm?.publish).toBe(false)
    expect(releaseConfig.github?.release).toBe(false)
    expect(publishWorkflow).toContain("id-token: write")
    expect(publishWorkflow).toContain("npm publish --access public --tag")
    expect(publishWorkflow).toContain("gh release create")
    expect(npmReadme).toContain("sticker-ui@beta")
    expect(githubReadme).toContain("sticker-ui@beta")
  })

  it("keeps repository policy and CI entrypoints present", () => {
    const requiredFiles = [
      "CHANGELOG.md",
      "CONTRIBUTING.md",
      "SECURITY.md",
      "SUPPORT.md",
      ".github/PULL_REQUEST_TEMPLATE.md",
      ".github/workflows/ci.yml",
      ".github/workflows/codeql.yml",
      ".github/workflows/publish.yml",
    ]

    for (const path of requiredFiles) {
      expect(existsSync(join(projectRoot, path))).toBe(true)
    }

    expect(packageJson.scripts?.ci).toContain("pnpm run build")
    expect(packageJson.scripts?.ci).toContain("pnpm run test")
    expect(readProjectFile(".github/workflows/ci.yml")).toContain(
      "pull_request:",
    )
    expect(
      readProjectFile(".github/workflows/deploy-cloudflare.yml"),
    ).toContain("run: pnpm run ci")

    for (const path of [
      ".github/workflows/ci.yml",
      ".github/workflows/codeql.yml",
      ".github/workflows/deploy-cloudflare.yml",
      ".github/workflows/publish.yml",
    ]) {
      expectActionsPinned(readProjectFile(path))
    }
  })

  it("keeps package and preview build outputs separated", () => {
    const viteConfig = readProjectFile("vite.config.ts")

    expect(packageJson.scripts?.["build:lib"]).toContain("tsdown")
    expect(packageJson.scripts?.["build:preview"]).toContain("vp build")
    expect(viteConfig).toContain('const previewOutDir = "dist-preview"')
    expect(viteConfig).toContain("outDir: previewOutDir")
  })

  it("deploys browser-history routes with a Cloudflare SPA fallback", () => {
    const router = readProjectFile("src/router/index.tsx")
    const workflow = readProjectFile(".github/workflows/deploy-cloudflare.yml")
    const wrangler = readProjectFile("wrangler.jsonc")

    expect(router).toContain("createBrowserHistory()")
    expect(router).not.toContain("createHashHistory()")
    expect(wrangler).toContain('"name": "sticker-ui"')
    expect(wrangler).toContain('"directory": "./dist-preview"')
    expect(wrangler).toContain(
      '"not_found_handling": "single-page-application"',
    )
    expect(workflow).toMatch(/uses: cloudflare\/wrangler-action@[0-9a-f]{40}/)
    expect(workflow).toContain(
      `wranglerVersion: "${packageJson.devDependencies?.wrangler}"`,
    )
    expect(workflow).toContain("CLOUDFLARE_ACCOUNT_ID")
    expect(workflow).toContain("CLOUDFLARE_API_TOKEN")
  })
})
