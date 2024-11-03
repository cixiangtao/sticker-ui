import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-success",
  order: 30,
  titleKey: "preview.components.timingAndArrows",
  descriptionKey:
    "preview.components.providerTimingPropsControlHoverDelayWhileSizeAndShowarrowAdjustEachTooltipBubble",
})

function Demo() {
  return (
    <TooltipProvider delayDuration={500} skipDelayDuration={0}>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outlined">
              Slow Hint
            </Button>
          </TooltipTrigger>
          <TooltipContent size="lg" tone="success">
            Opens after a longer provider delay.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" variant="outlined">
              No Arrow
            </Button>
          </TooltipTrigger>
          <TooltipContent showArrow={false} size="sm" tone="secondary">
            Compact hint without the pointer arrow.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
