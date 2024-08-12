import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 50,
  titleKey: "preview.components.sizesAndDots",
  descriptionKey:
    "preview.components.dotMarkersAddAQuickStatusSignalWhileKeepingTextReadableInDenseRows",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag dot size="xs">
        {tm("preview.components.tiny")}
      </Tag>
      <Tag dot size="sm">
        {tm("preview.components.small")}
      </Tag>
      <Tag dot>{tm("preview.components.ready")}</Tag>
      <Tag color="info" dot size="lg">
        {tm("preview.components.largeLabel")}
      </Tag>
    </div>
  )
}

export { Demo, meta }
