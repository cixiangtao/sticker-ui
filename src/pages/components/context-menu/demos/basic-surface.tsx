import { Copy, ExternalLink, FolderOpen, Trash2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
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
      <ContextMenuTrigger>
        <Card className="w-full max-w-md border-l-[8px] border-l-su-accent-info">
          <CardHeader>
            <CardTitle>Quarterly planning board</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-3">
            <p className="text-sm leading-6 font-medium text-su-fg-muted">
              Right-click this card to open desktop actions.
            </p>
            <Tag color="info">Draft</Tag>
          </CardContent>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Board actions</ContextMenuLabel>
        <ContextMenuItem>
          <FolderOpen aria-hidden="true" className="size-4 stroke-[3]" />
          Open
          <ContextMenuShortcut>Enter</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy aria-hidden="true" className="size-4 stroke-[3]" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <ExternalLink aria-hidden="true" className="size-4 stroke-[3]" />
          Open in new tab
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="danger">
          <Trash2 aria-hidden="true" className="size-4 stroke-[3]" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export { Demo, meta }
