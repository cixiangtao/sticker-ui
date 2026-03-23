import { DropdownMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.propMatrix",
  descriptionKey:
    "preview.components.dropdownMenuPropMatrixCoversDefaultMediumContentSubcontentAndItemToneCombinations",
})

function Demo() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outlined">Open prop matrix</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="md" tone="default">
        <DropdownMenu.Label>Default medium content</DropdownMenu.Label>
        <DropdownMenu.Item tone="default">Default item</DropdownMenu.Item>
        <DropdownMenu.Item inset>Inset item</DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger tone="default">
            Default submenu
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent size="md" tone="default">
            <DropdownMenu.Item>Medium subcontent</DropdownMenu.Item>
            <DropdownMenu.Item tone="danger">Danger item</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger inset>
            Secondary submenu
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent size="sm" tone="secondary">
            <DropdownMenu.Item>Secondary subcontent</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export { Demo, meta }
