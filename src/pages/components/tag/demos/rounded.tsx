import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 30,
  titleKey: "preview.components.rounded",
  descriptionKey:
    "preview.components.roundedTagsFollowTheSelectedSizeWhilePillTagsKeepAFullyRoundedCapsuleShape",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag color="info" rounded="rounded" size="sm">
        Small Rounded
      </Tag>
      <Tag color="success" rounded="rounded" variant="filled">
        Medium Rounded
      </Tag>
      <Tag color="warning" rounded="rounded" size="lg">
        Large Rounded
      </Tag>
      <Tag color="danger" rounded="pill" variant="outlined">
        Pill
      </Tag>
    </div>
  )
}

export { Demo, meta }
