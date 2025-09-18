import { Button, Tooltip } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.timingAndArrows",
  descriptionKey:
    "preview.components.providerTimingPropsControlHoverDelayWhileSizeAndShowarrowAdjustEachTooltipBubble",
})

function Demo() {
  return (
    <Tooltip.Provider delayDuration={500} skipDelayDuration={0}>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="success" variant="outlined">
              Slow Hint
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content size="lg" tone="success">
            Opens after a longer provider delay.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="secondary" variant="outlined">
              No Arrow
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content showArrow={false} size="sm" tone="secondary">
            Compact hint without the pointer arrow.
          </Tooltip.Content>
        </Tooltip>
      </div>
    </Tooltip.Provider>
  )
}

export { Demo, meta }
