import { Empty } from "sticker-ui"

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
    <Empty
      className="max-w-xl"
      description="New notes and review requests will land here once the workspace starts moving."
      heading="No messages yet"
      tone="info"
    />
  )
}

export { Demo, meta }
