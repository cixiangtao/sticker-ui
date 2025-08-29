import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outlined">
            Small
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent size="sm">
          <DropdownMenuLabel>Compact menu</DropdownMenuLabel>
          <DropdownMenuItem>Pin row</DropdownMenuItem>
          <DropdownMenuItem>Copy ID</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="solid">Info</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent tone="info">
          <DropdownMenuLabel>Review queue</DropdownMenuLabel>
          <DropdownMenuItem>Assign reviewer</DropdownMenuItem>
          <DropdownMenuItem>Mark as ready</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="lg" variant="outlined">
            Large
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent size="lg" tone="warning">
          <DropdownMenuLabel>Batch update</DropdownMenuLabel>
          <DropdownMenuItem>Move selected</DropdownMenuItem>
          <DropdownMenuItem>Schedule reminder</DropdownMenuItem>
          <DropdownMenuItem tone="danger">Remove selected</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { Demo, meta }
