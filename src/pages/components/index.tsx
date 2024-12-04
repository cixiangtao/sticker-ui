import apiDocs from "@/generated/preview-api-docs.json"
import {
  createComponentPreviewPage,
  type PreviewDemoModule,
} from "@/layouts/preview"

type ComponentPreviewName = keyof typeof apiDocs

const demoModuleLoaders = import.meta.glob<PreviewDemoModule>("./*/demos/*.tsx")
const demoSourceLoaders = import.meta.glob<string>("./*/demos/*.tsx", {
  import: "default",
  query: "?raw",
})

function pickComponentDemos<T>(
  demos: Record<string, T>,
  name: ComponentPreviewName,
) {
  const demoPrefix = `./${name}/demos/`

  return Object.fromEntries(
    Object.entries(demos)
      .filter(([path]) => path.startsWith(demoPrefix))
      .map(([path, demo]) => [
        `./demos/${path.slice(demoPrefix.length)}`,
        demo,
      ]),
  )
}

function createRegistryComponentPage(name: ComponentPreviewName) {
  return createComponentPreviewPage({
    demoModuleLoaders: pickComponentDemos(demoModuleLoaders, name),
    demoSourceLoaders: pickComponentDemos(demoSourceLoaders, name),
    name,
  })
}

const AlertPage = createRegistryComponentPage("alert")
const ButtonPage = createRegistryComponentPage("button")
const CardPage = createRegistryComponentPage("card")
const CheckboxPage = createRegistryComponentPage("checkbox")
const DialogPage = createRegistryComponentPage("dialog")
const DividerPage = createRegistryComponentPage("divider")
const FormPage = createRegistryComponentPage("form")
const InputPage = createRegistryComponentPage("input")
const InputPasswordPage = createRegistryComponentPage("input-password")
const JsxJoinPage = createRegistryComponentPage("jsx-join")
const LabelPage = createRegistryComponentPage("label")
const LayoutPage = createRegistryComponentPage("layout")
const PopoverPage = createRegistryComponentPage("popover")
const RadioPage = createRegistryComponentPage("radio")
const SelectPage = createRegistryComponentPage("select")
const SwitchPage = createRegistryComponentPage("switch")
const TablePage = createRegistryComponentPage("table")
const TagPage = createRegistryComponentPage("tag")
const TextareaPage = createRegistryComponentPage("textarea")
const TooltipPage = createRegistryComponentPage("tooltip")

export {
  AlertPage,
  ButtonPage,
  CardPage,
  CheckboxPage,
  DialogPage,
  DividerPage,
  FormPage,
  InputPage,
  InputPasswordPage,
  JsxJoinPage,
  LabelPage,
  LayoutPage,
  PopoverPage,
  RadioPage,
  SelectPage,
  SwitchPage,
  TablePage,
  TagPage,
  TextareaPage,
  TooltipPage,
}
