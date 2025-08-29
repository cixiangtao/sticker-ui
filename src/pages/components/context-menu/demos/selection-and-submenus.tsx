import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.selectionAndSubmenus",
  descriptionKey:
    "preview.components.contextMenuCheckboxRadioAndSubmenusSupportDenseDesktopEditingFlows",
})

function Demo() {
  const [layout, setLayout] = React.useState("kanban")
  const [showOwner, setShowOwner] = React.useState(true)
  const [showStatus, setShowStatus] = React.useState(true)

  return (
    <div className="flex flex-col items-start gap-3">
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Button variant="outlined">Right-click workspace</Button>
        </ContextMenuTrigger>
        <ContextMenuContent tone="secondary">
          <ContextMenuLabel>Columns</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showOwner}
            onCheckedChange={(checked) => setShowOwner(checked === true)}
          >
            Owner
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showStatus}
            onCheckedChange={(checked) => setShowStatus(checked === true)}
          >
            Status
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Layout</ContextMenuLabel>
          <ContextMenuRadioGroup value={layout} onValueChange={setLayout}>
            <ContextMenuRadioItem value="table">Table</ContextMenuRadioItem>
            <ContextMenuRadioItem value="kanban">Kanban</ContextMenuRadioItem>
            <ContextMenuRadioItem value="timeline">
              Timeline
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Move to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Backlog</ContextMenuItem>
              <ContextMenuItem>In review</ContextMenuItem>
              <ContextMenuItem>Done</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>

      <div className="flex flex-wrap gap-2">
        <Tag color="secondary">Layout: {layout}</Tag>
        <Tag color={showOwner ? "success" : "default"}>Owner column</Tag>
        <Tag color={showStatus ? "info" : "default"}>Status column</Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
