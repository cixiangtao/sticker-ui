import { Button, Popover, PopoverContent, PopoverTrigger } from "sticker-ui"

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
  return (
    <div className="flex flex-wrap gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button color="info" variant="outlined">
            With arrow
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" showArrow={true} side="bottom">
          <p className="m-0 text-sm leading-6 font-bold">
            The arrow points back to the trigger when the relationship needs to
            be visually explicit.
          </p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button color="warning" variant="outlined">
            Offset right
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
            Offset and alignment keep dense command bars from covering the
            trigger.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { Demo, meta }
