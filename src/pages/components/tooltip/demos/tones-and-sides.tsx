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
  className: "bg-[#FFF6DC]",
  order: 20,
  titleKey: "preview.components.tonesAndSides",
  descriptionKey:
    "preview.components.toneAndSideOptionsKeepHintBubblesUsefulInDenseToolbarsAndStatusRows",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="info" variant="outlined">
              {tm("preview.components.info")}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" tone="info">
            {tm(
              "preview.components.explainsAFieldWithoutInterruptingTheCurrentTask",
            )}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outlined">
              {tm("preview.components.ready")}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" tone="success">
            {tm("preview.components.showsWhyThisActionIsAvailable")}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="warning" variant="outlined">
              Watch
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" tone="warning">
            {tm("preview.components.warnsAboutASmallConstraintBeforeClicking")}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
