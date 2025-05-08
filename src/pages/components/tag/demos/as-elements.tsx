import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 40,
  titleKey: "preview.components.asElements",
  descriptionKey:
    "preview.components.useAsToSwitchTheSemanticElementWhileKeepingTheSameCompactTagStyling",
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
