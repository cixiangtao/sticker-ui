import { Card, CardContent, CardHeader, CardTitle, Grid, Tag } from "sticker-ui"

import type { PreviewMessageKey } from "@/i18n/preview"
import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 20,
  titleKey: "preview.components.responsiveGrid",
  descriptionKey:
    "preview.components.gridPresetsCoverCommonResponsiveCardRowsWithoutDynamicTailwindClassGeneration",
})

const items = [
  {
    accent: "border-l-accent-info",
    label: "Docs page",
    labelKey: "preview.components.docsPage",
    status: "Draft",
    statusKey: "preview.components.draft",
  },
  {
    accent: "border-l-accent-success",
    label: "Registry card",
    labelKey: "preview.components.registryCard",
    status: "Ready",
    statusKey: "preview.components.ready",
  },
  {
    accent: "border-l-accent-warning",
    label: "Preview shell",
    labelKey: "preview.components.previewShell",
    status: "Review",
    statusKey: "preview.components.review",
  },
] satisfies {
  accent: string
  label: string
  labelKey: PreviewMessageKey
  status: string
  statusKey: PreviewMessageKey
}[]

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <Grid columns="responsive-3" gap="lg">
      {items.map((item) => (
        <Card
          className={`border-l-[8px] ${item.accent}`}
          key={item.label}
          padding="sm"
        >
          <CardHeader divider="dashed">
            <Tag size="sm" variant="outlined">
              {tm(item.statusKey)}
            </Tag>
            <CardTitle>{tm(item.labelKey)}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              {tm(
                "preview.components.theGridOwnsFlowAndGapsWhileEachCardKeepsItsOwnStickerSurface",
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}

export { Demo, meta }
