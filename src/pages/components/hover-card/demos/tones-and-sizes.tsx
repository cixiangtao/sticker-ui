import { Button, HoverCard } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.tonesAndSizes",
  descriptionKey:
    "preview.components.hoverCardContentSupportsCompactAndRoomierStickerPreviewPanels",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <HoverCard openDelay={100}>
        <HoverCard.Trigger asChild>
          <Button size="sm" variant="outlined">
            Small
          </Button>
        </HoverCard.Trigger>
        <HoverCard.Content size="sm" tone="secondary">
          <strong>Compact preview</strong>
          <p className="m-0 mt-1 text-sm leading-6">
            Useful for terse labels in dense toolbars.
          </p>
        </HoverCard.Content>
      </HoverCard>
      <HoverCard openDelay={100}>
        <HoverCard.Trigger asChild>
          <Button variant="outlined">Large</Button>
        </HoverCard.Trigger>
        <HoverCard.Content size="lg" tone="warning">
          <strong>Roomy preview</strong>
          <p className="m-0 mt-1 text-sm leading-6">
            Gives status summaries enough space without becoming a dialog.
          </p>
        </HoverCard.Content>
      </HoverCard>
    </div>
  )
}

export { Demo, meta }
