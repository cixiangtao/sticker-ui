import { Button, Checkbox, Sheet } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.filterPanel",
  descriptionKey:
    "preview.components.sheetCreatesAContainedDrawerForFiltersSettingsAndSecondaryWorkflows",
})

function Demo() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Filters</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Registry filters</Sheet.Title>
          <Sheet.Description>
            Narrow the preview catalog without leaving the current page.
          </Sheet.Description>
        </Sheet.Header>
        <div className="grid gap-3">
          <Checkbox defaultChecked label="Show ready components" />
          <Checkbox label="Show draft components" />
          <Checkbox label="Only components with demos" />
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button variant="outlined">Cancel</Button>
          </Sheet.Close>
          <Sheet.Close asChild>
            <Button>Apply filters</Button>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}

export { Demo, meta }
