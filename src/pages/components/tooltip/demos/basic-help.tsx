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
  className: "bg-fill-info",
  order: 10,
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
