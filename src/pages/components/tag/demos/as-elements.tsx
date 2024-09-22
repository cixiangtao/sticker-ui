import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 40,
  titleKey: "preview.components.asElements",
  descriptionKey:
    "preview.components.useAsToSwitchTheSemanticElementWhileKeepingTheSameCompactTagStyling",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag as="span">{tm("preview.components.span")}</Tag>
      <Tag as="button" color="success" onClick={() => undefined}>
        {tm("preview.components.button")}
      </Tag>
      <Tag as="div" color="info" variant="outlined">
        {tm("preview.components.div")}
      </Tag>
    </div>
  )
}

export { Demo, meta }
