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
  "./demos/basic-field.tsx",
  "./demos/sizes-and-types.tsx",
  "./demos/states.tsx",
] as const

const demoExamples = getPreviewDemoExamples({
  demoModules,
  demoPaths: DEMO_PATHS,
  demoSources,
  missingLabel: "input",
})

function InputPage() {
  return (
    <PreviewDemoPage
      examples={demoExamples}
      sourceRoot="src/pages/components/input"
      trailing={<PreviewApiTable api={apiDocs.input} />}
    />
  )
}

export default InputPage
