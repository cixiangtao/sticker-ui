import { Button, Popover } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.contentPropMatrix",
  descriptionKey:
    "preview.components.popoverContentPropMatrixCoversDefaultMediumLargeInfoAndArrowCombinations",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Popover>
        <Popover.Trigger asChild>
          <Button variant="outlined">Default md</Button>
        </Popover.Trigger>
        <Popover.Content size="md" tone="default">
          <p className="m-0 text-sm font-bold">Default medium popover.</p>
        </Popover.Content>
      </Popover>
      <Popover>
        <Popover.Trigger asChild>
          <Button color="info" variant="outlined">
            Info lg
          </Button>
        </Popover.Trigger>
        <Popover.Content showArrow size="lg" tone="info">
          <p className="m-0 text-sm font-bold">
            Large info popover with an arrow.
          </p>
        </Popover.Content>
      </Popover>
    </div>
  )
}

export { Demo, meta }
