import type apiDocs from "@/generated/preview-api-docs.json"
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
const AlertDialogPage = createRegistryComponentPage("alert-dialog")
const AccordionPage = createRegistryComponentPage("accordion")
const BadgePage = createRegistryComponentPage("badge")
const BreadcrumbPage = createRegistryComponentPage("breadcrumb")
const ButtonPage = createRegistryComponentPage("button")
const CardPage = createRegistryComponentPage("card")
const CheckboxPage = createRegistryComponentPage("checkbox")
const ColorPickerPage = createRegistryComponentPage("color-picker")
const ContextMenuPage = createRegistryComponentPage("context-menu")
const DataTablePage = createRegistryComponentPage("data-table")
const DialogPage = createRegistryComponentPage("dialog")
const DividerPage = createRegistryComponentPage("divider")
const DropdownMenuPage = createRegistryComponentPage("dropdown-menu")
const EmptyPage = createRegistryComponentPage("empty")
const FieldPage = createRegistryComponentPage("field")
const FormPage = createRegistryComponentPage("form")
const InputPage = createRegistryComponentPage("input")
const InputPasswordPage = createRegistryComponentPage("input-password")
const JsxJoinPage = createRegistryComponentPage("jsx-join")
const LayoutPage = createRegistryComponentPage("layout")
const NavigationMenuPage = createRegistryComponentPage("navigation-menu")
const PaginationPage = createRegistryComponentPage("pagination")
const PopoverPage = createRegistryComponentPage("popover")
const ProgressPage = createRegistryComponentPage("progress")
const RadioPage = createRegistryComponentPage("radio")
const RangePage = createRegistryComponentPage("range")
const SelectPage = createRegistryComponentPage("select")
const SidebarPage = createRegistryComponentPage("sidebar")
const SkeletonPage = createRegistryComponentPage("skeleton")
const SpinnerPage = createRegistryComponentPage("spinner")
const SwitchPage = createRegistryComponentPage("switch")
const TabsPage = createRegistryComponentPage("tabs")
const TablePage = createRegistryComponentPage("table")
const TagPage = createRegistryComponentPage("tag")
const TextareaPage = createRegistryComponentPage("textarea")
const TooltipPage = createRegistryComponentPage("tooltip")
const ToastPage = createRegistryComponentPage("toast")

export {
  AccordionPage,
  AlertDialogPage,
  AlertPage,
  BadgePage,
  BreadcrumbPage,
  ButtonPage,
  CardPage,
  CheckboxPage,
  ColorPickerPage,
  ContextMenuPage,
  DataTablePage,
  DialogPage,
  DividerPage,
  DropdownMenuPage,
  EmptyPage,
  FieldPage,
  FormPage,
  InputPage,
  InputPasswordPage,
  JsxJoinPage,
  LayoutPage,
  NavigationMenuPage,
  PaginationPage,
  PopoverPage,
  ProgressPage,
  RadioPage,
  RangePage,
  SelectPage,
  SidebarPage,
  SkeletonPage,
  SpinnerPage,
  SwitchPage,
  TabsPage,
  TablePage,
  TagPage,
  TextareaPage,
  TooltipPage,
  ToastPage,
}
