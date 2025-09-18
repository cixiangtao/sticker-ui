import { Archive, Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { DropdownMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.basicActions",
  descriptionKey:
    "preview.components.dropdownMenusCollectSecondaryActionsWithoutOverloadingThePrimaryButton",
})

function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          aria-label="Open project actions"
          size="icon"
          variant="outlined"
        >
          <MoreHorizontal aria-hidden="true" className="size-5 stroke-[3]" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>Project actions</DropdownMenu.Label>
        <DropdownMenu.Item>
          <Pencil aria-hidden="true" className="size-4 stroke-[3]" />
          Rename
          <DropdownMenu.Shortcut>R</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Copy aria-hidden="true" className="size-4 stroke-[3]" />
          Duplicate
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Archive aria-hidden="true" className="size-4 stroke-[3]" />
          Archive
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item tone="danger">
          <Trash2 aria-hidden="true" className="size-4 stroke-[3]" />
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export { Demo, meta }
