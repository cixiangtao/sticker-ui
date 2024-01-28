import type { ReactNode } from "react"

import apiDocs from "@/generated/preview-api-docs.json"

import { PreviewApiTable } from "./preview-api-table"
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

interface PreviewDemoPageProps {
  className?: string
  examples: PreviewDemoExample[]
  sourceRoot: string
  trailing?: ReactNode
}

type ComponentPreviewName = keyof typeof apiDocs

interface CreateComponentPreviewPageOptions {
  demoModules: Record<string, PreviewDemoModule | undefined>
  demoSources: Record<string, string | undefined>
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
        code,
        module: demoModule,
        path,
      }
    })
    .sort(comparePreviewDemoExamples)
}

function comparePreviewDemoExamples(
  firstExample: PreviewDemoExample,
  secondExample: PreviewDemoExample,
) {
  const firstOrder = firstExample.module.default.order
  const secondOrder = secondExample.module.default.order

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
          meta={example.module.default}
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
  demoModules,
  demoSources,
  name,
}: CreateComponentPreviewPageOptions) {
  const demoExamples = getPreviewDemoExamples({
    demoModules,
    demoSources,
    missingLabel: name,
  })

  function ComponentPreviewPage() {
    return (
      <PreviewDemoPage
        examples={demoExamples}
        sourceRoot={`src/pages/components/${name}`}
        trailing={<PreviewApiTable api={apiDocs[name]} />}
      />
    )
  }

  return ComponentPreviewPage
}

export { createComponentPreviewPage, getPreviewDemoExamples, PreviewDemoPage }
