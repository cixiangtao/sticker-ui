import { Copy, ExternalLink, FolderOpen, Trash2 } from "lucide-react"
import { Card, ContextMenu } from "sticker-ui"

import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.basicSurface",
  descriptionKey:
    "preview.components.contextMenusExposeRightClickActionsWithoutAddingMoreVisibleChrome",
})

function Demo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <Card className="w-full max-w-md border-l-[8px] border-l-su-accent-info">
          <Card.Header>
            <Card.Title>Quarterly planning board</Card.Title>
          </Card.Header>
          <Card.Content className="flex items-center justify-between gap-3">
            <p className="text-sm leading-6 font-medium text-su-fg-muted">
              Right-click this card to open desktop actions.
            </p>
            <Tag color="info">Draft</Tag>
          </Card.Content>
        </Card>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Board actions</ContextMenu.Label>
        <ContextMenu.Item>
          <FolderOpen aria-hidden="true" className="size-4 stroke-[3]" />
          Open
          <ContextMenu.Shortcut>Enter</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          <Copy aria-hidden="true" className="size-4 stroke-[3]" />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Item>
          <ExternalLink aria-hidden="true" className="size-4 stroke-[3]" />
          Open in new tab
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item tone="danger">
          <Trash2 aria-hidden="true" className="size-4 stroke-[3]" />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}

export { Demo, meta }
