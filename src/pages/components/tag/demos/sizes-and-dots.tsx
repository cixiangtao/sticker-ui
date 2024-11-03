import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 50,
  titleKey: "preview.components.sizesAndDots",
  descriptionKey:
    "preview.components.dotMarkersAddAQuickStatusSignalWhileKeepingTextReadableInDenseRows",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag dot size="xs">
        Tiny
      </Tag>
      <Tag dot size="sm">
        Small
      </Tag>
      <Tag dot>Ready</Tag>
      <Tag color="info" dot size="lg">
        Large Label
      </Tag>
    </div>
  )
}

export { Demo, meta }
