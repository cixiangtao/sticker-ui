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
  "./demos/basic-login.tsx",
  "./demos/validation-rules.tsx",
  "./demos/form-instance.tsx",
] as const

const demoExamples = getPreviewDemoExamples({
  demoModules,
  demoPaths: DEMO_PATHS,
  demoSources,
  missingLabel: "form",
})

function FormPage() {
  return (
    <PreviewDemoPage
      examples={demoExamples}
      sourceRoot="src/pages/components/form"
      trailing={<PreviewApiTable api={apiDocs.form} />}
    />
  )
}

export default FormPage
