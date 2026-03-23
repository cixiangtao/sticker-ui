import { Badge, Button, Card } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.attachedCorners",
  descriptionKey:
    "preview.components.badgesAttachCountsAndDotsToTheCornerOfAnyElement",
})

function Demo() {
  return (
    <Card className="max-w-md">
      <Card.Header>
        <Card.Title>Notification shortcuts</Card.Title>
      </Card.Header>
      <Card.Content className="flex flex-wrap items-center gap-5">
        <Badge content={6} tone="danger">
          <Button aria-label="Inbox, 6 unread messages">Inbox</Button>
        </Badge>
        <Badge content={12} max={9} tone="info" variant="soft">
          <Button aria-label="Tasks, more than 9 open items" color="info">
            Tasks
          </Button>
        </Badge>
        <Badge dot tone="success">
          <Button aria-label="Sync is online" color="success">
            Sync
          </Button>
        </Badge>
        <Badge content="1" tone="default" variant="solid">
          <Button aria-label="Default badge sample" variant="outlined">
            Default
          </Button>
        </Badge>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
