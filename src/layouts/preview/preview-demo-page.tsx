import type { ReactNode } from "react"

import type { PreviewDemoModule } from "./preview-example"

import { PreviewExample } from "./preview-example"

interface PreviewDemoExample {
  code: string
  module: PreviewDemoModule
  path: string
}

interface GetPreviewDemoExamplesOptions {
  demoModules: Record<string, PreviewDemoModule | undefined>
  demoPaths: readonly string[]
  demoSources: Record<string, string | undefined>
  missingLabel: string
}

interface PreviewDemoPageProps {
  className?: string
  examples: PreviewDemoExample[]
  sourceRoot: string
  trailing?: ReactNode
}

function getPreviewDemoExamples({
  demoModules,
  demoPaths,
  demoSources,
  missingLabel,
}: GetPreviewDemoExamplesOptions) {
  return demoPaths.map((path) => {
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

export { getPreviewDemoExamples, PreviewDemoPage }
