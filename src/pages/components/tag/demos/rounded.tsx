import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 30,
  titleKey: "preview.components.rounded",
  descriptionKey:
    "preview.components.roundedTagsFollowTheSelectedSizeWhilePillTagsKeepAFullyRoundedCapsuleShape",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag color="info" rounded="rounded" size="sm">
        {tm("preview.components.smallRounded")}
      </Tag>
      <Tag color="success" rounded="rounded" variant="filled">
        {tm("preview.components.mediumRounded")}
      </Tag>
      <Tag color="warning" rounded="rounded" size="lg">
        {tm("preview.components.largeRounded")}
      </Tag>
      <Tag color="danger" rounded="pill" variant="outlined">
        {tm("preview.components.pill")}
      </Tag>
    </div>
  )
}

export { Demo, meta }
