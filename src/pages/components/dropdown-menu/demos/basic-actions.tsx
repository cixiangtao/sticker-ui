import { Archive, Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Open project actions"
          size="icon"
          variant="outlined"
        >
          <MoreHorizontal aria-hidden="true" className="size-5 stroke-[3]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Project actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Pencil aria-hidden="true" className="size-4 stroke-[3]" />
          Rename
          <DropdownMenuShortcut>R</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy aria-hidden="true" className="size-4 stroke-[3]" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Archive aria-hidden="true" className="size-4 stroke-[3]" />
          Archive
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem tone="danger">
          <Trash2 aria-hidden="true" className="size-4 stroke-[3]" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { Demo, meta }
