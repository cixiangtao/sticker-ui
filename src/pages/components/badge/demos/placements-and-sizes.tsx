import { Badge, Card } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const BADGE_PLACEMENTS = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const

const BADGE_SIZES = [
  ["sm", "2"],
  ["md", "7"],
  ["lg", "24"],
] as const

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.placementsAndSizes",
  descriptionKey:
    "preview.components.badgePlacementControlsWhichCornerReceivesTheIndicator",
})

function Demo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {BADGE_PLACEMENTS.map((placement, index) => (
        <Badge
          content={index + 1}
          key={placement}
          placement={placement}
          size={BADGE_SIZES[index % BADGE_SIZES.length][0]}
          tone="warning"
        >
          <Card className="min-w-40" padding="sm" variant="minimal">
            <Card.Header decoration={null}>
              <Card.Title className="text-sm capitalize">
                {placement.replace("-", " ")}
              </Card.Title>
            </Card.Header>
            <Card.Content className="text-sm font-medium text-su-fg-muted">
              {BADGE_SIZES[index % BADGE_SIZES.length][1]} updates
            </Card.Content>
          </Card>
        </Badge>
      ))}
    </div>
  )
}

export { Demo, meta }
