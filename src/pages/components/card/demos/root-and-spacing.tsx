import { Card, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 60,
  titleKey: "preview.components.rootAndSpacingProps",
  descriptionKey:
    "preview.components.rootPropsControlSemanticElementsDelegatedChildrenTactileInteractionAndTheSpacingSharedByCardSlots",
})

function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card as="section" interactive={true} padding="sm" variant="elevated">
        <Card.Header decoration={true} divider="dashed" dividerInset="card">
          <Card.Title>Compact Section</Card.Title>
          <Card.Description>
            As interactive padding decoration divider and dividerinset work
            together across the composed slots.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Tag color="info" dot={true} size="sm" variant="outlined">
            Padding Sm
          </Tag>
        </Card.Content>
      </Card>

      <Card asChild interactive={true} padding="none" variant="minimal">
        <a
          className="block no-underline"
          href="#card-as-child"
          aria-label="Open Delegated Card"
        >
          <Card.Header
            decoration={<Tag size="xs">Link</Tag>}
            divider="solid"
            dividerInset="md"
          >
            <Card.Title>Delegated Link Card</Card.Title>
            <Card.Description>
              asChild puts the card root classes on the anchor while slot
              spacing stays explicit.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <span className="text-sm font-extrabold text-su-ink">
              Open Composed Surface
            </span>
          </Card.Content>
        </a>
      </Card>
    </div>
  )
}

export { Demo, meta }
