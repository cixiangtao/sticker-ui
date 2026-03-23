import * as React from "react"
import { Button, Popover, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.controlledAnchor",
  descriptionKey:
    "preview.components.popoverCanRunControlledWithCustomAnchorCloseActionsAndArrowlessContent",
})

function Demo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <div className="grid gap-3">
        <Popover.Anchor asChild>
          <div className="w-fit rounded-su-xl border-2 border-su-ink bg-su-surface px-4 py-3 shadow-su-md">
            <Tag color={open ? "success" : "secondary"} rounded="pill">
              {open ? "Open" : "Closed"}
            </Tag>
          </div>
        </Popover.Anchor>
        <Popover.Trigger asChild>
          <Button color="secondary" variant="outlined">
            Toggle anchored panel
          </Button>
        </Popover.Trigger>
      </div>
      <Popover.Content
        align="start"
        showArrow={false}
        side="right"
        tone="secondary"
      >
        <div className="grid gap-3">
          <h3 className="m-0 text-base font-black">Anchored popover</h3>
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            Controlled open state pairs with Popover.Anchor when the visual
            anchor is separate from the trigger.
          </p>
          <Popover.Close asChild>
            <Button color="secondary" size="sm">
              Close
            </Button>
          </Popover.Close>
        </div>
      </Popover.Content>
    </Popover>
  )
}

export { Demo, meta }
