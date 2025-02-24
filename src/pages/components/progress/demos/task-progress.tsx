import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Progress,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.taskProgress",
  descriptionKey:
    "preview.components.progressPairsWithTextOrBadgesSoCompletionIsNotCommunicatedByColorAlone",
})

function Demo() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between gap-3">
        <CardTitle>Demo Coverage</CardTitle>
        <Badge content="72%" tone="success" />
      </CardHeader>
      <CardContent className="grid gap-3">
        <Progress
          aria-label="Demo coverage"
          showValue
          tone="success"
          value={72}
        />
        <p className="text-sm leading-6 font-medium text-text-muted">
          Three new examples are ready, with one accessibility pass remaining.
        </p>
      </CardContent>
    </Card>
  )
}

export { Demo, meta }
