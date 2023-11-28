import apiDocs from "@/generated/preview-api-docs.json"
import {
  getPreviewDemoExamples,
  PreviewApiTable,
  type PreviewDemoModule,
  PreviewDemoPage,
} from "@/layouts/preview"

const demoModules = import.meta.glob<PreviewDemoModule>("./demos/*.tsx", {
  eager: true,
})
const demoSources = import.meta.glob<string>("./demos/*.tsx", {
  eager: true,
  import: "default",
  query: "?raw",
})

const DEMO_PATHS = [
  "./demos/variants.tsx",
  "./demos/sizes.tsx",
  "./demos/states.tsx",
] as const

const demoExamples = getPreviewDemoExamples({
  demoModules,
  demoPaths: DEMO_PATHS,
  demoSources,
  missingLabel: "button",
})

function ButtonPage() {
  return (
    <PreviewDemoPage
      examples={demoExamples}
      sourceRoot="src/pages/components/button"
      trailing={<PreviewApiTable api={apiDocs.button} />}
    />
  )
}

export default ButtonPage
