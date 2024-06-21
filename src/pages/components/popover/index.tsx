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

const PopoverPage = createComponentPreviewPage({
  demoModules,
  demoSources,
  name: "popover",
})

export { PopoverPage }
