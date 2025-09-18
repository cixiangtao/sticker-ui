import { DropdownMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 30,
  titleKey: "preview.components.tonesAndSizes",
  descriptionKey:
    "preview.components.menuContentSizesAndPaperTonesFitToolbarsCardsAndRoomierCommandPanels",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button size="sm" variant="outlined">
            Small
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="sm">
          <DropdownMenu.Label>Compact menu</DropdownMenu.Label>
          <DropdownMenu.Item>Pin row</DropdownMenu.Item>
          <DropdownMenu.Item>Copy ID</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="solid">Info</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content tone="info">
          <DropdownMenu.Label>Review queue</DropdownMenu.Label>
          <DropdownMenu.Item>Assign reviewer</DropdownMenu.Item>
          <DropdownMenu.Item>Mark as ready</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button size="lg" variant="outlined">
            Large
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="lg" tone="warning">
          <DropdownMenu.Label>Batch update</DropdownMenu.Label>
          <DropdownMenu.Item>Move selected</DropdownMenu.Item>
          <DropdownMenu.Item>Schedule reminder</DropdownMenu.Item>
          <DropdownMenu.Item tone="danger">Remove selected</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}

export { Demo, meta }
