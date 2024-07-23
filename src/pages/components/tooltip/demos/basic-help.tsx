import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Tooltip adds a compact paper hint for controls that need extra context without taking over the page.",
  order: 10,
  title: "Basic Help",
  titleKey: "preview.components.basicHelp",
  descriptionKey:
    "preview.components.tooltipAddsACompactPaperHintForControlsThatNeedExtraContextWithoutTakingOverThePage",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <TooltipProvider>
      <div className="w-fit">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">
              {tm("preview.components.hoverForNote")}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {tm(
              "preview.components.keepTooltipCopyShortSpecificAndConnectedToOneVisibleControl",
            )}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
