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
const AspectRatioPage = createRegistryComponentPage("aspect-ratio")
const AvatarPage = createRegistryComponentPage("avatar")
const BadgePage = createRegistryComponentPage("badge")
const BreadcrumbPage = createRegistryComponentPage("breadcrumb")
const ButtonPage = createRegistryComponentPage("button")
const CalloutPage = createRegistryComponentPage("callout")
const CalendarPage = createRegistryComponentPage("calendar")
const CarouselPage = createRegistryComponentPage("carousel")
const CardPage = createRegistryComponentPage("card")
const CheckboxPage = createRegistryComponentPage("checkbox")
const CodeBlockPage = createRegistryComponentPage("code-block")
const CollapsiblePage = createRegistryComponentPage("collapsible")
const ColorPickerPage = createRegistryComponentPage("color-picker")
const CommandPage = createRegistryComponentPage("command")
const ContextMenuPage = createRegistryComponentPage("context-menu")
const CopyButtonPage = createRegistryComponentPage("copy-button")
const DataTablePage = createRegistryComponentPage("data-table")
const DatePickerPage = createRegistryComponentPage("date-picker")
const DialogPage = createRegistryComponentPage("dialog")
const DividerPage = createRegistryComponentPage("divider")
const DropdownMenuPage = createRegistryComponentPage("dropdown-menu")
const EmptyPage = createRegistryComponentPage("empty")
const FieldPage = createRegistryComponentPage("field")
const FormPage = createRegistryComponentPage("form")
const HoverCardPage = createRegistryComponentPage("hover-card")
const InputPage = createRegistryComponentPage("input")
const InputOtpPage = createRegistryComponentPage("input-otp")
const InputPasswordPage = createRegistryComponentPage("input-password")
const JsxJoinPage = createRegistryComponentPage("jsx-join")
const LabelPage = createRegistryComponentPage("label")
const LayoutPage = createRegistryComponentPage("layout")
const MenubarPage = createRegistryComponentPage("menubar")
const NavigationMenuPage = createRegistryComponentPage("navigation-menu")
const PaginationPage = createRegistryComponentPage("pagination")
const PopoverPage = createRegistryComponentPage("popover")
const ProgressPage = createRegistryComponentPage("progress")
const RadioPage = createRegistryComponentPage("radio")
const RangePage = createRegistryComponentPage("range")
const ResizablePage = createRegistryComponentPage("resizable")
const ScrollAreaPage = createRegistryComponentPage("scroll-area")
const SelectPage = createRegistryComponentPage("select")
const SheetPage = createRegistryComponentPage("sheet")
const SidebarPage = createRegistryComponentPage("sidebar")
const SliderPage = createRegistryComponentPage("slider")
const SkeletonPage = createRegistryComponentPage("skeleton")
const SpinnerPage = createRegistryComponentPage("spinner")
const StatCardPage = createRegistryComponentPage("stat-card")
const StepsPage = createRegistryComponentPage("steps")
const SwitchPage = createRegistryComponentPage("switch")
const TabsPage = createRegistryComponentPage("tabs")
const TablePage = createRegistryComponentPage("table")
const TagPage = createRegistryComponentPage("tag")
const TextareaPage = createRegistryComponentPage("textarea")
const TimelinePage = createRegistryComponentPage("timeline")
const TogglePage = createRegistryComponentPage("toggle")
const ToggleGroupPage = createRegistryComponentPage("toggle-group")
const TooltipPage = createRegistryComponentPage("tooltip")
const ToastPage = createRegistryComponentPage("toast")
const UploadPage = createRegistryComponentPage("upload")

export {
  AccordionPage,
  AlertDialogPage,
  AlertPage,
  AspectRatioPage,
  AvatarPage,
  BadgePage,
  BreadcrumbPage,
  ButtonPage,
  CalloutPage,
  CalendarPage,
  CarouselPage,
  CardPage,
  CheckboxPage,
  CodeBlockPage,
  CollapsiblePage,
  ColorPickerPage,
  CommandPage,
  ContextMenuPage,
  CopyButtonPage,
  DataTablePage,
  DatePickerPage,
  DialogPage,
  DividerPage,
  DropdownMenuPage,
  EmptyPage,
  FieldPage,
  FormPage,
  HoverCardPage,
  InputPage,
  InputOtpPage,
  InputPasswordPage,
  JsxJoinPage,
  LabelPage,
  LayoutPage,
  MenubarPage,
  NavigationMenuPage,
  PaginationPage,
  PopoverPage,
  ProgressPage,
  RadioPage,
  RangePage,
  ResizablePage,
  ScrollAreaPage,
  SelectPage,
  SheetPage,
  SidebarPage,
  SliderPage,
  SkeletonPage,
  SpinnerPage,
  StatCardPage,
  StepsPage,
  SwitchPage,
  TabsPage,
  TablePage,
  TagPage,
  TextareaPage,
  TimelinePage,
  ToggleGroupPage,
  TogglePage,
  TooltipPage,
  ToastPage,
  UploadPage,
}
