import * as React from "react"
import { DropdownMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
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
        <DropdownMenu.Trigger asChild>
          <Button variant="solid">View options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Visible columns</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem
            checked={showDrafts}
            onCheckedChange={(checked) => setShowDrafts(checked === true)}
          >
            Drafts
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={showArchived}
            onCheckedChange={(checked) => setShowArchived(checked === true)}
          >
            Archived
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Label>Density</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={density} onValueChange={setDensity}>
            <DropdownMenu.RadioItem value="compact">
              Compact
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="comfortable">
              Comfortable
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="spacious">
              Spacious
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger inset>Export as</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>CSV file</DropdownMenu.Item>
              <DropdownMenu.Item>PDF summary</DropdownMenu.Item>
              <DropdownMenu.Item>Share link</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
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
