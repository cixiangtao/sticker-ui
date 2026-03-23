import { Bell, CheckCircle2 } from "lucide-react"
import { Badge, Button, Card } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.indicatorCustomization",
  descriptionKey:
    "preview.components.badgeCanRenderStandaloneContentOrCustomizeThePositionedIndicatorSlot",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Badge content="LIVE" tone="success" variant="soft" />
      <Badge
        content={<CheckCircle2 aria-hidden="true" className="size-3.5" />}
        indicatorClassName="bg-su-paper text-su-fg-success ring-su-fill-success"
        placement="bottom-right"
        tone="success"
        variant="outline"
      >
        <Card className="w-44" padding="sm" variant="minimal">
          <Card.Title className="text-sm">Release card</Card.Title>
          <Card.Content className="pt-2 text-xs font-bold text-su-fg-muted">
            Custom indicator className keeps the badge slot open.
          </Card.Content>
        </Card>
      </Badge>
      <Badge dot indicatorClassName="ring-su-fill-warning" tone="warning">
        <Button aria-label="Alerts have an attention dot" color="warning">
          <Bell />
          Alerts
        </Button>
      </Badge>
    </div>
  )
}

export { Demo, meta }
