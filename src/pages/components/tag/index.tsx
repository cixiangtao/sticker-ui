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
  "./demos/colors.tsx",
  "./demos/rounded.tsx",
  "./demos/as-elements.tsx",
  "./demos/sizes-and-dots.tsx",
  "./demos/metadata-row.tsx",
] as const

const demoExamples = getPreviewDemoExamples({
  demoModules,
  demoPaths: DEMO_PATHS,
  demoSources,
  missingLabel: "tag",
})

function TagPage() {
  return (
    <PreviewDemoPage
      examples={demoExamples}
      sourceRoot="src/pages/components/tag"
      trailing={<PreviewApiTable api={apiDocs.tag} />}
    />
  )
}

export default TagPage
