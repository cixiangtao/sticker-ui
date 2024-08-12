import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"
import { cn } from "@/lib/utils"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  order: 50,
  titleKey: "preview.components.interactiveList",
  descriptionKey:
    "preview.components.interactiveCardsKeepTactileMovementOnTheRootWhileNestedTextAndBadgesStayStable",
})

const tasks = [
  {
    cardClassName: "bg-fill-info",
    description: "Check props, variants, and translation coverage.",
    descriptionKey:
      "preview.components.checkPropsVariantsAndTranslationCoverage",
    headerClassName: "bg-accent-info",
    status: "docs",
    statusKey: "preview.components.docs",
    tagColor: "info",
    title: "Audit API table",
    titleKey: "preview.components.auditApiTable",
  },
  {
    cardClassName: "bg-fill-warning",
    description: "Confirm generated registry JSON includes source files.",
    descriptionKey:
      "preview.components.confirmGeneratedRegistryJsonIncludesSourceFiles",
    headerClassName: "bg-accent-warning",
    status: "registry",
    statusKey: "preview.components.registry",
    tagColor: "warning",
    title: "Build package entry",
    titleKey: "preview.components.buildPackageEntry",
  },
  {
    cardClassName: "bg-fill-success",
    description: "Verify hover and active tactile states.",
    descriptionKey: "preview.components.verifyHoverAndActiveTactileStates",
    headerClassName: "bg-accent-success",
    status: "ready",
    statusKey: "preview.components.ready",
    tagColor: "success",
    title: "Preview tactile states",
    titleKey: "preview.components.previewTactileStates",
  },
] as const

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card
          as="section"
          className={cn("cursor-pointer", task.cardClassName)}
          interactive
          key={task.title}
        >
          <CardHeader
            className={cn(
              "grid-cols-[1fr_auto] items-start gap-3",
              task.headerClassName,
            )}
          >
            <div className="grid gap-2">
              <Tag color={task.tagColor} rounded="pill" size="sm">
                {tm(task.statusKey)}
              </Tag>
              <CardTitle>{tm(task.titleKey)}</CardTitle>
              <CardDescription>{tm(task.descriptionKey)}</CardDescription>
            </div>
            <Tag size="sm" variant="outlined">
              {tm("preview.components.open")}
            </Tag>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              {tm(
                "preview.components.addHandlersAtTheCardRootWhenTheWholeSurfaceBehavesLikeOneAction",
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { Demo, meta }
