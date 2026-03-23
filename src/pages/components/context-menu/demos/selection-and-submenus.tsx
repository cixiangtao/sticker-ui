import * as React from "react"
import { ContextMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
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
        <ContextMenu.Trigger asChild>
          <Button variant="outlined">Right-click workspace</Button>
        </ContextMenu.Trigger>
        <ContextMenu.Content tone="secondary">
          <ContextMenu.Label>Columns</ContextMenu.Label>
          <ContextMenu.CheckboxItem
            checked={showOwner}
            onCheckedChange={(checked) => setShowOwner(checked === true)}
          >
            Owner
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={showStatus}
            onCheckedChange={(checked) => setShowStatus(checked === true)}
          >
            Status
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={showOwner}
            hideIndicator
            onCheckedChange={(checked) => setShowOwner(checked === true)}
          >
            Owner without indicator
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.Label>Layout</ContextMenu.Label>
          <ContextMenu.RadioGroup value={layout} onValueChange={setLayout}>
            <ContextMenu.RadioItem value="table">Table</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="kanban">Kanban</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="timeline">
              Timeline
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
          <ContextMenu.Separator />
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger inset>Move to</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Backlog</ContextMenu.Item>
              <ContextMenu.Item>In review</ContextMenu.Item>
              <ContextMenu.Item>Done</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
        </ContextMenu.Content>
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
