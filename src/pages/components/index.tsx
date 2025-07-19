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
const BadgePage = createRegistryComponentPage("badge")
const ButtonPage = createRegistryComponentPage("button")
const CardPage = createRegistryComponentPage("card")
const CheckboxPage = createRegistryComponentPage("checkbox")
const DataTablePage = createRegistryComponentPage("data-table")
const DialogPage = createRegistryComponentPage("dialog")
const DividerPage = createRegistryComponentPage("divider")
const EmptyPage = createRegistryComponentPage("empty")
const FieldPage = createRegistryComponentPage("field")
const FormPage = createRegistryComponentPage("form")
const InputPage = createRegistryComponentPage("input")
const InputPasswordPage = createRegistryComponentPage("input-password")
const JsxJoinPage = createRegistryComponentPage("jsx-join")
const LayoutPage = createRegistryComponentPage("layout")
const PaginationPage = createRegistryComponentPage("pagination")
const PopoverPage = createRegistryComponentPage("popover")
const ProgressPage = createRegistryComponentPage("progress")
const RadioPage = createRegistryComponentPage("radio")
const SelectPage = createRegistryComponentPage("select")
const SkeletonPage = createRegistryComponentPage("skeleton")
const SpinnerPage = createRegistryComponentPage("spinner")
const SwitchPage = createRegistryComponentPage("switch")
const TablePage = createRegistryComponentPage("table")
const TagPage = createRegistryComponentPage("tag")
const TextareaPage = createRegistryComponentPage("textarea")
const TooltipPage = createRegistryComponentPage("tooltip")
const ToastPage = createRegistryComponentPage("toast")

export {
  AlertPage,
  BadgePage,
  ButtonPage,
  CardPage,
  CheckboxPage,
  DataTablePage,
  DialogPage,
  DividerPage,
  EmptyPage,
  FieldPage,
  FormPage,
  InputPage,
  InputPasswordPage,
  JsxJoinPage,
  LayoutPage,
  PaginationPage,
  PopoverPage,
  ProgressPage,
  RadioPage,
  SelectPage,
  SkeletonPage,
  SpinnerPage,
  SwitchPage,
  TablePage,
  TagPage,
  TextareaPage,
  TooltipPage,
  ToastPage,
}
