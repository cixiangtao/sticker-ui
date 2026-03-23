import { ContextMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.propMatrix",
  descriptionKey:
    "preview.components.contextMenuPropMatrixCoversDefaultMediumContentSubcontentAndItemToneCombinations",
})

function Demo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger asChild>
        <Button variant="outlined">Right-click prop matrix</Button>
      </ContextMenu.Trigger>
      <ContextMenu.Content size="md" tone="default">
        <ContextMenu.Label>Default medium content</ContextMenu.Label>
        <ContextMenu.Item tone="default">Default item</ContextMenu.Item>
        <ContextMenu.Item inset>Inset item</ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger tone="default">
            Default submenu
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent size="md" tone="default">
            <ContextMenu.Item>Medium subcontent</ContextMenu.Item>
            <ContextMenu.Item tone="danger">Danger item</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger inset>Info submenu</ContextMenu.SubTrigger>
          <ContextMenu.SubContent size="sm" tone="info">
            <ContextMenu.Item>Info subcontent</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu>
  )
}

export { Demo, meta }
