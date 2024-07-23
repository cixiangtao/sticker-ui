import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Use card slots to keep headings, body copy, metadata, and actions visually separated.",
  order: 10,
  title: "Basic Composition",
  titleKey: "preview.components.basicComposition",
  descriptionKey:
    "preview.components.useCardSlotsToKeepHeadingsBodyCopyMetadataAndActionsVisuallySeparated",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Card className="max-w-md">
      <CardHeader>
        <Tag rounded="pill" size="sm">
          {tm("preview.components.preview")}
        </Tag>
        <CardTitle>{tm("preview.components.componentKit")}</CardTitle>
        <CardDescription>
          {tm(
            "preview.components.aCompactPaperCardForComponentSummariesDocsLinksAndQuickActions",
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="m-0 text-sm leading-6 font-medium text-[#5B5E6A]">
          {tm(
            "preview.components.theHeaderOwnsTheAccentStripWhileTheContentKeepsAQuieterPaperSurfaceForLongerCopy",
          )}
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">{tm("preview.components.openDocs")}</Button>
        <Button size="sm" variant="text">
          {tm("preview.components.copyImport")}
        </Button>
      </CardFooter>
    </Card>
  )
}

export { Demo, meta }
