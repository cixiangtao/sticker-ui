import { Card, CardContent, CardHeader, CardTitle, Grid, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Grid presets cover common responsive card rows without dynamic Tailwind class generation.",
  order: 20,
  title: "Responsive Grid",
  titleKey: "preview.components.responsiveGrid",
  descriptionKey:
    "preview.components.gridPresetsCoverCommonResponsiveCardRowsWithoutDynamicTailwindClassGeneration",
})

const items = [
  {
    accent: "border-l-accent-info",
    label: "Docs page",
    status: "Draft",
  },
  {
    accent: "border-l-accent-success",
    label: "Registry card",
    status: "Ready",
  },
  {
    accent: "border-l-accent-warning",
    label: "Preview shell",
    status: "Review",
  },
]

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
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
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
