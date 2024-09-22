import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tag,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 40,
  titleKey: "preview.components.customColors",
  descriptionKey:
    "preview.components.useClassnameToCustomizeCardPaperHeaderAccentsAndBadgeColors",
})

const cards = [
  {
    badge: "Default",
    badgeKey: "preview.components.default",
    cardClassName: "",
    description: "Neutral paper for docs and general content.",
    descriptionKey: "preview.components.neutralPaperForDocsAndGeneralContent",
    headerClassName: "",
    tagColor: "default",
    title: "Paper Note",
    titleKey: "preview.components.paperNote",
  },
  {
    badge: "Info",
    badgeKey: "preview.components.info",
    cardClassName: "bg-fill-info",
    description: "Blue paper for previews, guides, and hints.",
    descriptionKey: "preview.components.bluePaperForPreviewsGuidesAndHints",
    headerClassName: "bg-accent-info",
    tagColor: "info",
    title: "Guide Card",
    titleKey: "preview.components.guideCard",
  },
  {
    badge: "Success",
    badgeKey: "preview.components.success",
    cardClassName: "bg-fill-success",
    description: "Green paper for ready states and healthy checks.",
    descriptionKey:
      "preview.components.greenPaperForReadyStatesAndHealthyChecks",
    headerClassName: "bg-accent-success",
    tagColor: "success",
    title: "Ready Card",
    titleKey: "preview.components.readyCard",
  },
  {
    badge: "Warning",
    badgeKey: "preview.components.warning",
    cardClassName: "bg-fill-warning",
    description: "Warm paper for setup notes and migration reminders.",
    descriptionKey:
      "preview.components.warmPaperForSetupNotesAndMigrationReminders",
    headerClassName: "bg-accent-warning",
    tagColor: "warning",
    title: "Reminder Card",
    titleKey: "preview.components.reminderCard",
  },
] as const

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card className={card.cardClassName} key={card.title}>
          <CardHeader className={card.headerClassName}>
            <Tag color={card.tagColor} rounded="pill" size="sm">
              {tm(card.badgeKey)}
            </Tag>
            <CardTitle>{tm(card.titleKey)}</CardTitle>
            <CardDescription>{tm(card.descriptionKey)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              {tm(
                "preview.components.useRootAndSlotClassnameValuesToTuneTheVisualContext",
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { Demo, meta }
