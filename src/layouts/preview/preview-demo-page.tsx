import { lazy, Suspense, type ReactNode } from "react"

import type apiDocs from "@/generated/preview-api-docs.json"

import { usePreviewI18n } from "../../i18n/preview"
import { PreviewApiTable } from "./preview-api-table"
import { Card, CardContent } from "./preview-card"
import type { PreviewDemoModule } from "./preview-example"
import { PreviewExample } from "./preview-example"

interface PreviewDemoExample {
  code: string
  module: PreviewDemoModule
  path: string
}

interface GetPreviewDemoExamplesOptions {
  demoModules: Record<string, PreviewDemoModule | undefined>
  demoSources: Record<string, string | undefined>
  missingLabel: string
}

type PreviewDemoModuleLoader = () => Promise<PreviewDemoModule>
type PreviewDemoSourceLoader = () => Promise<string>

interface LoadPreviewDemoExamplesOptions {
  demoModuleLoaders: Record<string, PreviewDemoModuleLoader | undefined>
  demoSourceLoaders: Record<string, PreviewDemoSourceLoader | undefined>
  missingLabel: string
}

interface PreviewDemoPageProps {
  className?: string
  examples: PreviewDemoExample[]
  sourceRoot: string
  trailing?: ReactNode
}

type ComponentPreviewName = keyof typeof apiDocs

interface CreateComponentPreviewPageOptions {
  demoModuleLoaders: Record<string, PreviewDemoModuleLoader | undefined>
  demoSourceLoaders: Record<string, PreviewDemoSourceLoader | undefined>
  name: ComponentPreviewName
}

function getPreviewDemoExamples({
  demoModules,
  demoSources,
  missingLabel,
}: GetPreviewDemoExamplesOptions) {
  return Object.keys(demoModules)
    .map((path) => {
      const demoModule = demoModules[path]
      const code = demoSources[path]

      if (!demoModule || !code) {
        throw new Error(`Missing ${missingLabel} demo: ${path}`)
      }

      return {
        code: formatPreviewDemoSource(code),
        module: demoModule,
        path,
      }
    })
    .sort(comparePreviewDemoExamples)
}

async function loadPreviewDemoExamples({
  demoModuleLoaders,
  demoSourceLoaders,
  missingLabel,
}: LoadPreviewDemoExamplesOptions) {
  const demoExamples = await Promise.all(
    Object.keys(demoModuleLoaders).map(async (path) => {
      const demoModuleLoader = demoModuleLoaders[path]
      const demoSourceLoader = demoSourceLoaders[path]

      if (!demoModuleLoader || !demoSourceLoader) {
        throw new Error(`Missing ${missingLabel} demo: ${path}`)
      }

      const [demoModule, code] = await Promise.all([
        demoModuleLoader(),
        demoSourceLoader(),
      ])

      return {
        code: formatPreviewDemoSource(code),
        module: demoModule,
        path,
      }
    }),
  )

  return demoExamples.sort(comparePreviewDemoExamples)
}

function comparePreviewDemoExamples(
  firstExample: PreviewDemoExample,
  secondExample: PreviewDemoExample,
) {
  const firstOrder = firstExample.module.meta.order
  const secondOrder = secondExample.module.meta.order

  if (firstOrder !== undefined && secondOrder !== undefined) {
    return (
      firstOrder - secondOrder ||
      firstExample.path.localeCompare(secondExample.path)
    )
  }

  if (firstOrder !== undefined) {
    return -1
  }

  if (secondOrder !== undefined) {
    return 1
  }

  return firstExample.path.localeCompare(secondExample.path)
}

function formatPreviewDemoSource(code: string) {
  return stripMetaExport(stripMetaDeclaration(stripDefineMetaImport(code)))
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

function stripDefineMetaImport(code: string) {
  return code.replace(
    /^[ \t]*import\s*\{\s*defineMeta\s*\}\s*from\s*["']@\/layouts\/preview["']\s*\n/m,
    "",
  )
}

function stripMetaDeclaration(code: string) {
  const declarationStart = code.search(/\bconst\s+meta\s*=\s*defineMeta\s*\(/)

  if (declarationStart === -1) {
    return code
  }

  const callStart = code.indexOf("(", declarationStart)
  const declarationEnd = findMatchingCharacter(code, callStart, "(", ")")

  if (declarationEnd === -1) {
    return code
  }

  let end = declarationEnd + 1

  while (code[end] === ";" || code[end] === "\r" || code[end] === "\n") {
    end += 1
  }

  return `${code.slice(0, declarationStart)}${code.slice(end)}`
}

function stripMetaExport(code: string) {
  return code.replace(/\bexport\s*\{\s*Demo\s*,\s*meta\s*\}/, "export { Demo }")
}

function findMatchingCharacter(
  code: string,
  start: number,
  openCharacter: string,
  closeCharacter: string,
) {
  let depth = 0

  for (let index = start; index < code.length; index += 1) {
    const character = code[index]

    if (character === openCharacter) {
      depth += 1
    }

    if (character === closeCharacter) {
      depth -= 1
    }

    if (depth === 0) {
      return index
    }
  }

  return -1
}

function PreviewDemoPage({
  className = "grid gap-5",
  examples,
  sourceRoot,
  trailing,
}: PreviewDemoPageProps) {
  return (
    <div className={className}>
      {examples.map((example) => (
        <PreviewExample
          component={example.module.Demo}
          key={example.path}
          meta={example.module.meta}
          source={{
            code: example.code,
            language: "tsx",
          }}
          sourcePath={`${sourceRoot}/${example.path.replace("./", "")}`}
        />
      ))}
      {trailing}
    </div>
  )
}

function createComponentPreviewPage({
  demoModuleLoaders,
  demoSourceLoaders,
  name,
}: CreateComponentPreviewPageOptions) {
  const ComponentPreviewContent = lazy(async () => {
    const [demoExamples, apiDocsModule] = await Promise.all([
      loadPreviewDemoExamples({
        demoModuleLoaders,
        demoSourceLoaders,
        missingLabel: name,
      }),
      import("@/generated/preview-api-docs.json"),
    ])
    const componentApi = apiDocsModule.default[name]

    return {
      default: () => (
        <PreviewDemoPage
          examples={demoExamples}
          sourceRoot={`src/pages/components/${name}`}
          trailing={<PreviewApiTable api={componentApi} />}
        />
      ),
    }
  })

  function ComponentPreviewPage() {
    return (
      <Suspense fallback={<PreviewDemoLoading />}>
        <ComponentPreviewContent />
      </Suspense>
    )
  }

  return ComponentPreviewPage
}

function PreviewDemoLoading() {
  const { tm } = usePreviewI18n()

  return (
    <Card>
      <CardContent className="text-sm font-extrabold text-su-ink/70">
        {tm("preview.components.loadingDemos")}
      </CardContent>
    </Card>
  )
}

export { createComponentPreviewPage, getPreviewDemoExamples, PreviewDemoPage }
