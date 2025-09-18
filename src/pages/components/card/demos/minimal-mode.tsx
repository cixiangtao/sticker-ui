import { Card, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  order: 30,
  titleKey: "preview.components.minimalMode",
  descriptionKey:
    "preview.components.minimalCardsRemoveTheShadowAndKeepOnlyAThinBorderForQuieterGrouping",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <Card.Header>
          <Tag rounded="pill" size="sm">
            Elevated
          </Tag>
          <Card.Title>Sticker Surface</Card.Title>
          <Card.Description>
            The default card keeps a chunky outline and hard offset shadow.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            Use this for prominent previews route cards and action groups.
          </p>
        </Card.Content>
      </Card>

      <Card variant="minimal">
        <Card.Header>
          <Tag rounded="pill" size="sm">
            Minimal
          </Tag>
          <Card.Title>Quiet Surface</Card.Title>
          <Card.Description>
            Minimal cards remove the shadow and use a thin border.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            Use this inside dense pages side panels and repeated content lists.
          </p>
        </Card.Content>
      </Card>
    </div>
  )
}

export { Demo, meta }
