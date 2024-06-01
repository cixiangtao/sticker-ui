import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Combine tags with calmer borders for route cards, filters, and registry detail panels.",
  order: 60,
  title: "Metadata Row",
})

function Demo() {
  return (
    <div className="rounded-sticker-xl border border-[#2E3038] bg-white p-4">
      <div className="mb-3 font-extrabold">src/components/ui/tag.tsx</div>
      <div className="flex flex-wrap gap-2">
        <Tag size="sm" variant="outlined">
          registry:ui
        </Tag>
        <Tag color="success" dot size="sm">
          ready
        </Tag>
        <Tag color="info" size="sm" variant="filled">
          source-first
        </Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
