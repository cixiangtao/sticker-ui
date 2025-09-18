import { Button, Tooltip } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.tonesAndSides",
  descriptionKey:
    "preview.components.toneAndSideOptionsKeepHintBubblesUsefulInDenseToolbarsAndStatusRows",
})

function Demo() {
  return (
    <Tooltip.Provider>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Default</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            Default tooltips stay neutral for general help.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="info" variant="outlined">
              Info
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="top" tone="info">
            Explains a field without interrupting the current task.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="success" variant="outlined">
              Ready
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom" tone="success">
            Shows why this action is available.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="warning" variant="outlined">
              Watch
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="right" tone="warning">
            Warns about a small constraint before clicking.
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left" tone="secondary">
            Secondary tooltips fit quiet metadata.
          </Tooltip.Content>
        </Tooltip>
      </div>
    </Tooltip.Provider>
  )
}

export { Demo, meta }
