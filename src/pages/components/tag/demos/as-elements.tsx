import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Use as to switch the semantic element while keeping the same compact tag styling.",
  order: 40,
  title: "As Elements",
})

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

export { Demo, meta }
