import { Card, Progress, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.customScale",
  descriptionKey:
    "preview.components.progressMaxShowsNonPercentDomainValuesWhileTheVisibleLabelStillReportsCompletion",
})

function Demo() {
  return (
    <Card className="max-w-xl" variant="panel">
      <Card.Header className="grid-cols-[1fr_auto] items-center gap-3">
        <Card.Title>Issue budget</Card.Title>
        <Tag color="secondary" rounded="pill">
          18 / 24
        </Tag>
      </Card.Header>
      <Card.Content className="grid gap-3">
        <Progress
          aria-label="Issues triaged"
          max={24}
          showValue
          tone="secondary"
          value={18}
        />
        <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
          max accepts the source domain, while ARIA and the label map it to
          completion.
        </p>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
