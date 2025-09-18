import { Button, Card, Spinner } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicLoading",
  descriptionKey:
    "preview.components.spinnerCanAnnouncePendingWorkOrStayDecorativeBesideVisibleLoadingText",
})

function Demo() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Publishing Preview</Card.Title>
      </Card.Header>
      <Card.Content className="flex flex-wrap items-center gap-3">
        <Spinner label="Publishing preview" tone="info" />
        <span className="text-sm font-extrabold text-su-ink">
          Publishing preview...
        </span>
        <Button disabled variant="outlined">
          <Spinner decorative size="sm" />
          Saving
        </Button>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
