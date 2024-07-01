import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  description:
    "Provider timing props control hover delay, while size and showArrow adjust each tooltip bubble.",
  order: 30,
  title: "Timing & Arrows",
})

function Demo() {
  return (
    <TooltipProvider delayDuration={500} skipDelayDuration={0}>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outlined">
              Slow hint
            </Button>
          </TooltipTrigger>
          <TooltipContent size="lg" tone="success">
            Opens after a longer provider delay.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" variant="outlined">
              No arrow
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
