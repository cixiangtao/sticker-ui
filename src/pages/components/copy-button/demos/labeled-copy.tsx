import { CopyButton } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.labeledCopy",
  descriptionKey:
    "preview.components.copyButtonCanShowTextWhenTheActionNeedsMoreContext",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <CopyButton copyText="--color-su-fill-info" showLabel />
      <CopyButton copyText="registry:ui" label="Copy type" showLabel />
    </div>
  )
}

export { Demo, meta }
