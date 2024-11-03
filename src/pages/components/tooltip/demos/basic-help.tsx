import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicHelp",
  descriptionKey:
    "preview.components.tooltipAddsACompactPaperHintForControlsThatNeedExtraContextWithoutTakingOverThePage",
})

function Demo() {
  return (
    <TooltipProvider>
      <div className="w-fit">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Hover For Note</Button>
          </TooltipTrigger>
          <TooltipContent>
            Keep tooltip copy short specific and connected to one visible
            control.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
