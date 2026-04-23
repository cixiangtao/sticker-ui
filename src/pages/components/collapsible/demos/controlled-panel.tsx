import * as React from "react"
import { Button, Collapsible, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.collapsibleCanBeControlledWhenTheDisclosureStateBelongsToAParentToolbar",
  order: 20,
  titleKey: "preview.components.controlledPanel",
})

function Demo() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="grid w-full max-w-xl gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setOpen((value) => !value)} size="sm">
          {open ? "Hide details" : "Show details"}
        </Button>
        <Tag color={open ? "success" : "warning"} rounded="pill" size="sm">
          {open ? "Expanded" : "Collapsed"}
        </Tag>
      </div>
      <Collapsible onOpenChange={setOpen} open={open}>
        <Collapsible.Trigger className="w-full justify-between">
          Sprint checklist
        </Collapsible.Trigger>
        <Collapsible.Content className="mt-3" tone="info">
          <p className="m-0 text-sm leading-6 font-bold">
            Controlled disclosure lets nearby toolbar state, badges, or saved
            preferences stay in sync with the panel.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>
  )
}

export { Demo, meta }
