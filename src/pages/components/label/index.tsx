import {
  createComponentPreviewPage,
  type PreviewDemoModule,
} from "@/layouts/preview"

const demoModules = import.meta.glob<PreviewDemoModule>("./demos/*.tsx", {
  eager: true,
})
const demoSources = import.meta.glob<string>("./demos/*.tsx", {
  eager: true,
  import: "default",
  query: "?raw",
})

const LabelPage = createComponentPreviewPage({
  demoModules,
  demoSources,
  name: "label",
})

export { LabelPage }
