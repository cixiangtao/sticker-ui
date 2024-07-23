import { Button, Popover, PopoverContent, PopoverTrigger } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "showArrow, side, align, and sideOffset make anchored popovers read clearly in toolbars and edge-aligned panels.",
  order: 30,
  title: "Arrows & Sides",
  titleKey: "preview.components.arrowsAndSides",
  descriptionKey:
    "preview.components.showarrowSideAlignAndSideoffsetMakeAnchoredPopoversReadClearlyInToolbarsAndEdgeAlignedPanels",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button color="info" variant="outlined">
            {tm("preview.components.withArrow")}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" showArrow={true} side="bottom">
          <p className="m-0 text-sm leading-6 font-bold">
            {tm(
              "preview.components.theArrowPointsBackToTheTriggerWhenTheRelationshipNeedsToBeVisuallyExplicit",
            )}
          </p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button color="warning" variant="outlined">
            {tm("preview.components.offsetRight")}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          showArrow={true}
          side="right"
          sideOffset={16}
          tone="warning"
        >
          <p className="m-0 text-sm leading-6 font-bold">
            {tm(
              "preview.components.offsetAndAlignmentKeepDenseCommandBarsFromCoveringTheTrigger",
            )}
          </p>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { Demo, meta }
