import { Tag } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#EAF7FF]",
  description:
    "Use as to switch the semantic element while keeping the same compact tag styling.",
  title: "As Elements",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tag as="span">Span</Tag>
      <Tag as="button" color="success" onClick={() => undefined}>
        Button
      </Tag>
      <Tag as="div" color="info" variant="outlined">
        Div
      </Tag>
    </div>
  )
}

export { Demo }
export default meta
