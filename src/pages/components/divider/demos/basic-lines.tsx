import { Divider } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 10,
  titleKey: "preview.components.basicLines",
  descriptionKey:
    "preview.components.dividerKeepsTheLineSemanticWhileVariantsTuneWeightAndTextureForCalmSectionBreaks",
})

function Demo() {
  return (
    <div className="grid gap-5 rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <Divider decorative={false} />
      <Divider variant="dashed" />
      <Divider tone="info" variant="dotted" />
      <Divider tone="success" weight="lg" />
    </div>
  )
}

export { Demo, meta }
