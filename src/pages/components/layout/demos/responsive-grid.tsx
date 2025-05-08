import { Card, CardContent, CardHeader, CardTitle, Grid, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.responsiveGrid",
  descriptionKey:
    "preview.components.gridPresetsCoverCommonResponsiveCardRowsWithoutDynamicTailwindClassGeneration",
})

const items = [
  {
    accent: "border-l-su-accent-info",
    label: "Docs page",
    status: "Draft",
  },
  {
    accent: "border-l-su-accent-success",
    label: "Registry card",
    status: "Ready",
  },
  {
    accent: "border-l-su-accent-warning",
    label: "Preview shell",
    status: "Review",
  },
] satisfies {
  accent: string
  label: string
  status: string
}[]

function Demo() {
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
              {item.status}
            </Tag>
            <CardTitle>{item.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              The grid owns flow and gaps while each card keeps its own sticker
              surface.
            </p>
          </CardContent>
        </Card>
      ))}
    </Grid>
  )
}

export { Demo, meta }
