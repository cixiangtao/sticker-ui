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

const meta = defineMeta({
  className: "bg-[#FFFDF7]",
  order: 30,
  titleKey: "preview.components.minimalMode",
  descriptionKey:
    "preview.components.minimalCardsRemoveTheShadowAndKeepOnlyAThinBorderForQuieterGrouping",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <Tag rounded="pill" size="sm">
            {tm("preview.components.elevated")}
          </Tag>
          <CardTitle>{tm("preview.components.stickerSurface")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.theDefaultCardKeepsAChunkyOutlineAndHardOffsetShadow",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="m-0 text-sm leading-6 font-medium text-[#5B5E6A]">
            {tm(
              "preview.components.useThisForProminentPreviewsRouteCardsAndActionGroups",
            )}
          </p>
        </CardContent>
      </Card>

      <Card variant="minimal">
        <CardHeader>
          <Tag rounded="pill" size="sm">
            {tm("preview.components.minimal")}
          </Tag>
          <CardTitle>{tm("preview.components.quietSurface")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.minimalCardsRemoveTheShadowAndUseAThinBorder",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="m-0 text-sm leading-6 font-medium text-[#5B5E6A]">
            {tm(
              "preview.components.useThisInsideDensePagesSidePanelsAndRepeatedContentLists",
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo, meta }
