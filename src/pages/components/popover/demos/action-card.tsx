import { Button, Popover } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 20,
  titleKey: "preview.components.actionCard",
  descriptionKey:
    "preview.components.closeCanWrapAStickerButtonSoShortPopoverWorkflowsCanFinishFromInsideThePanel",
})

function Demo() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button color="success" variant="outlined">
          Review Draft
        </Button>
      </Popover.Trigger>
      <Popover.Content showArrow size="sm" tone="success">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">Draft Ready</h3>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              The component page has demos API docs and translated preview copy.
            </p>
          </div>
          <Popover.Close asChild>
            <Button color="success" size="sm">
              Looks Good
            </Button>
          </Popover.Close>
        </div>
      </Popover.Content>
    </Popover>
  )
}

export { Demo, meta }
