import { Button, Popover } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 30,
  titleKey: "preview.components.arrowsAndSides",
  descriptionKey:
    "preview.components.showarrowSideAlignAndSideoffsetMakeAnchoredPopoversReadClearlyInToolbarsAndEdgeAlignedPanels",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Popover>
        <Popover.Trigger asChild>
          <Button color="info" variant="outlined">
            With Arrow
          </Button>
        </Popover.Trigger>
        <Popover.Content align="start" showArrow={true} side="bottom">
          <p className="m-0 text-sm leading-6 font-bold">
            The arrow points back to the trigger when the relationship needs to
            be visually explicit.
          </p>
        </Popover.Content>
      </Popover>
      <Popover>
        <Popover.Trigger asChild>
          <Button color="warning" variant="outlined">
            Offset Right
          </Button>
        </Popover.Trigger>
        <Popover.Content
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
        </Popover.Content>
      </Popover>
    </div>
  )
}

export { Demo, meta }
