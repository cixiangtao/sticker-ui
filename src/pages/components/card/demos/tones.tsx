import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Use className to customize card paper, header accents, and badge colors.",
  order: 40,
  title: "Custom Colors",
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
    cardClassName: "bg-fill-info",
    description: "Blue paper for previews, guides, and hints.",
    headerClassName: "bg-accent-info",
    tagColor: "info",
    title: "Guide Card",
  },
  {
    badge: "Success",
    cardClassName: "bg-fill-success",
    description: "Green paper for ready states and healthy checks.",
    headerClassName: "bg-accent-success",
    tagColor: "success",
    title: "Ready Card",
  },
  {
    badge: "Warning",
    cardClassName: "bg-fill-warning",
    description: "Warm paper for setup notes and migration reminders.",
    headerClassName: "bg-accent-warning",
    tagColor: "warning",
    title: "Reminder Card",
  },
] as const

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card className={card.cardClassName} key={card.title}>
          <CardHeader className={card.headerClassName}>
            <Tag color={card.tagColor} rounded="pill" size="sm">
              {card.badge}
            </Tag>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              Use root and slot className values to tune the visual context.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { Demo }
export default meta
