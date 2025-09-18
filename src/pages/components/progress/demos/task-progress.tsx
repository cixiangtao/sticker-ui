import { Badge, Card, Progress } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.taskProgress",
  descriptionKey:
    "preview.components.progressPairsWithTextOrBadgesSoCompletionIsNotCommunicatedByColorAlone",
})

function Demo() {
  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between gap-3">
        <Card.Title>Demo Coverage</Card.Title>
        <Badge content="72%" tone="success" />
      </Card.Header>
      <Card.Content className="grid gap-3">
        <Progress
          aria-label="Demo coverage"
          showValue
          tone="success"
          value={72}
        />
        <p className="text-sm leading-6 font-medium text-su-fg-muted">
          Three new examples are ready, with one accessibility pass remaining.
        </p>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
