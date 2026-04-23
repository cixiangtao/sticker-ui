import { Button, Sheet } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.sheetSizeToneAndCloseOptionsSupportUtilityDrawersAndFocusedPanels",
  order: 30,
  titleKey: "preview.components.sizesAndClose",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outlined">Small info sheet</Button>
        </Sheet.Trigger>
        <Sheet.Content size="sm" tone="info">
          <Sheet.Header>
            <Sheet.Title>Quick settings</Sheet.Title>
            <Sheet.Description>
              A compact drawer for one focused task.
            </Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button color="secondary" variant="outlined">
            No close button
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="bottom" showClose={false} tone="warning">
          <Sheet.Header className="pr-0">
            <Sheet.Title>Bottom notice</Sheet.Title>
            <Sheet.Description>
              Hide the icon close button when the footer owns the only action.
            </Sheet.Description>
          </Sheet.Header>
          <Sheet.Footer>
            <Sheet.Close asChild>
              <Button>Done</Button>
            </Sheet.Close>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    </div>
  )
}

export { Demo, meta }
