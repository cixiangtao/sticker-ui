import { ContextMenu } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 30,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.contextMenuContentSubmenusItemsAndSubtriggersCanMixSizesTonesInsetAndDangerStates",
})

function Demo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger asChild>
        <Button color="warning" variant="outlined">
          Right-click variants
        </Button>
      </ContextMenu.Trigger>
      <ContextMenu.Content size="lg" tone="warning">
        <ContextMenu.Label>Large warning menu</ContextMenu.Label>
        <ContextMenu.Item inset>Open review</ContextMenu.Item>
        <ContextMenu.Item>Duplicate</ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger tone="danger">
            Dangerous actions
          </ContextMenu.SubTrigger>
          <ContextMenu.SubContent size="sm" tone="secondary">
            <ContextMenu.Item tone="danger">Archive item</ContextMenu.Item>
            <ContextMenu.Item tone="danger">Delete item</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu>
  )
}

export { Demo, meta }
