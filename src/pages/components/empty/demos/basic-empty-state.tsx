import { Inbox } from "lucide-react"
import { Empty, EmptyDescription, EmptyIcon, EmptyTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicEmptyState",
  descriptionKey:
    "preview.components.emptyCentersBlankContentWithAnIconTitleAndConciseHelperCopy",
})

function Demo() {
  return (
    <Empty className="max-w-xl" tone="info">
      <EmptyIcon>
        <Inbox />
      </EmptyIcon>
      <EmptyTitle>No messages yet</EmptyTitle>
      <EmptyDescription>
        New notes and review requests will land here once the workspace starts
        moving.
      </EmptyDescription>
    </Empty>
  )
}

export { Demo, meta }
