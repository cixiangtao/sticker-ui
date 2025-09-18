import { Card, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 40,
  titleKey: "preview.components.customColors",
  descriptionKey:
    "preview.components.useClassnameToCustomizeCardPaperHeaderAccentsAndBadgeColors",
})

const cards = [
  {
    badge: "Default",
    cardClassName: "",
    description: "Neutral paper for docs and general content.",
    headerClassName: "",
    tagColor: "default",
    title: "Paper Note",
  },
  {
    badge: "Info",
    cardClassName: "bg-su-fill-info",
    description: "Blue paper for previews, guides, and hints.",
    headerClassName: "bg-su-accent-info",
    tagColor: "info",
    title: "Guide Card",
  },
  {
    badge: "Success",
    cardClassName: "bg-su-fill-success",
    description: "Green paper for ready states and healthy checks.",
    headerClassName: "bg-su-accent-success",
    tagColor: "success",
    title: "Ready Card",
  },
  {
    badge: "Warning",
    cardClassName: "bg-su-fill-warning",
    description: "Warm paper for setup notes and migration reminders.",
    headerClassName: "bg-su-accent-warning",
    tagColor: "warning",
    title: "Reminder Card",
  },
] as const

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card className={card.cardClassName} key={card.title}>
          <Card.Header className={card.headerClassName}>
            <Tag color={card.tagColor} rounded="pill" size="sm">
              {card.badge}
            </Tag>
            <Card.Title>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              Use root and slot className values to tune the visual context.
            </p>
          </Card.Content>
        </Card>
      ))}
    </div>
  )
}

export { Demo, meta }
