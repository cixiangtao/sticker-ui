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
  className: "bg-fill-success",
  order: 30,
  titleKey: "preview.components.timingAndArrows",
  descriptionKey:
    "preview.components.providerTimingPropsControlHoverDelayWhileSizeAndShowarrowAdjustEachTooltipBubble",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <TooltipProvider delayDuration={500} skipDelayDuration={0}>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outlined">
              {tm("preview.components.slowHint")}
            </Button>
          </TooltipTrigger>
          <TooltipContent size="lg" tone="success">
            {tm("preview.components.opensAfterALongerProviderDelay")}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary" variant="outlined">
              {tm("preview.components.noArrow")}
            </Button>
          </TooltipTrigger>
          <TooltipContent showArrow={false} size="sm" tone="secondary">
            {tm("preview.components.compactHintWithoutThePointerArrow")}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
