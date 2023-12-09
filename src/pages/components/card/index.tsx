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
  "./demos/basic.tsx",
  "./demos/panels.tsx",
  "./demos/minimal-mode.tsx",
  "./demos/tones.tsx",
  "./demos/interactive-list.tsx",
] as const

const demoExamples = getPreviewDemoExamples({
  demoModules,
  demoPaths: DEMO_PATHS,
  demoSources,
  missingLabel: "card",
})

function CardPage() {
  return (
    <PreviewDemoPage
      examples={demoExamples}
      sourceRoot="src/pages/components/card"
      trailing={<PreviewApiTable api={apiDocs.card} />}
    />
  )
}

export default CardPage
