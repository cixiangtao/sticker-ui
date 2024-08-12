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
  className: "bg-[#EAF7FF]",
  order: 60,
  titleKey: "preview.components.rootAndSpacingProps",
  descriptionKey:
    "preview.components.rootPropsControlSemanticElementsDelegatedChildrenTactileInteractionAndTheSpacingSharedByCardSlots",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card as="section" interactive={true} padding="sm" variant="elevated">
        <CardHeader decoration={true} divider="dashed" dividerInset="card">
          <CardTitle>{tm("preview.components.compactSection")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.asInteractivePaddingDecorationDividerAndDividerinsetWorkTogetherAcrossTheComposedSlots",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tag color="info" dot={true} size="sm" variant="outlined">
            {tm("preview.components.paddingSm")}
          </Tag>
        </CardContent>
      </Card>

      <Card asChild interactive={true} padding="none" variant="minimal">
        <a
          className="block no-underline"
          href="#card-as-child"
          aria-label={tm("preview.components.openDelegatedCard")}
        >
          <CardHeader
            decoration={<Tag size="xs">{tm("preview.components.link")}</Tag>}
            divider="solid"
            dividerInset="md"
          >
            <CardTitle>{tm("preview.components.delegatedLinkCard")}</CardTitle>
            <CardDescription>
              {tm(
                "preview.components.aschildPutsTheCardRootClassesOnTheAnchorWhileSlotSpacingStaysExplicit",
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-sm font-extrabold text-ink">
              {tm("preview.components.openComposedSurface")}
            </span>
          </CardContent>
        </a>
      </Card>
    </div>
  )
}

export { Demo, meta }
