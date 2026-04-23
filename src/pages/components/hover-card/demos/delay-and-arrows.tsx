import { HoverCard, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.hoverCardDelayArrowSideAndAlignPropsTuneNonInteractivePreviews",
  order: 30,
  titleKey: "preview.components.delayAndArrows",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <HoverCard closeDelay={100} openDelay={100}>
        <HoverCard.Trigger asChild>
          <button className="rounded-su-lg border-2 border-su-ink bg-su-surface px-3 py-2 text-sm font-black shadow-su-sm">
            Hover for docs
          </button>
        </HoverCard.Trigger>
        <HoverCard.Content align="start" showArrow side="right" tone="info">
          <div className="grid gap-2">
            <Tag color="info" rounded="pill">
              side="right"
            </Tag>
            <p className="m-0 text-sm leading-6 font-bold">
              Arrows and offsets help hover previews point back to compact
              trigger rows.
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard>
    </div>
  )
}

export { Demo, meta }
