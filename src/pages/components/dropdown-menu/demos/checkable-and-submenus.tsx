import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.checkableAndSubmenus",
  descriptionKey:
    "preview.components.checkboxRadioAndNestedItemsKeepDesktopMenusDenseButKeyboardReachable",
})

function Demo() {
  const [density, setDensity] = React.useState("comfortable")
  const [showArchived, setShowArchived] = React.useState(false)
  const [showDrafts, setShowDrafts] = React.useState(true)

  return (
    <div className="flex flex-col items-start gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="solid">View options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showDrafts}
            onCheckedChange={(checked) => setShowDrafts(checked === true)}
          >
            Drafts
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showArchived}
            onCheckedChange={(checked) => setShowArchived(checked === true)}
          >
            Archived
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Density</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
            <DropdownMenuRadioItem value="compact">
              Compact
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="comfortable">
              Comfortable
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="spacious">
              Spacious
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Export as</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>CSV file</DropdownMenuItem>
              <DropdownMenuItem>PDF summary</DropdownMenuItem>
              <DropdownMenuItem>Share link</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-wrap gap-2">
        <Tag color="info">Density: {density}</Tag>
        <Tag color={showDrafts ? "success" : "default"}>Drafts</Tag>
        <Tag color={showArchived ? "warning" : "default"}>Archived</Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
