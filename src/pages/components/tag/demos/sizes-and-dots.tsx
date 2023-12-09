import { Tag } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#FFF6DC]",
  description:
    "Dot markers add a quick status signal while keeping text readable in dense rows.",
  title: "Sizes & Dots",
} satisfies PreviewDemoMeta

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

export { Demo }
export default meta
