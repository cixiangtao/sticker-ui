import { Tag } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#EAF7FF]",
  description:
    "Variant controls the tag structure while color carries semantic meaning.",
  title: "Variants",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Tag>Solid</Tag>
      <Tag color="info" variant="soft">
        Soft
      </Tag>
      <Tag color="success" variant="outlined">
        Outlined
      </Tag>
      <Tag color="warning" variant="filled">
        Filled
      </Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
    </div>
  )
}

export { Demo }
export default meta
