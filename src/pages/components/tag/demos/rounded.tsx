import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Rounded tags follow the selected size, while pill tags keep a fully rounded capsule shape.",
  order: 30,
  title: "Rounded",
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
