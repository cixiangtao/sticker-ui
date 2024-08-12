import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.variantControlsTheTagStructureWhileColorCarriesSemanticMeaning",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Tag>{tm("preview.components.solid")}</Tag>
      <Tag color="info" variant="filled">
        {tm("preview.components.filled")}
      </Tag>
      <Tag color="success" variant="outlined">
        {tm("preview.components.outlined")}
      </Tag>
      <Tag color="warning">{tm("preview.components.warning")}</Tag>
      <Tag color="danger">{tm("preview.components.danger")}</Tag>
    </div>
  )
}

export { Demo, meta }
