import { Divider } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 10,
  titleKey: "preview.components.basicLines",
  descriptionKey:
    "preview.components.dividerKeepsTheLineSemanticWhileVariantsTuneWeightAndTextureForCalmSectionBreaks",
})

function Demo() {
  return (
    <div className="grid gap-5 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <Divider decorative={false} />
      <Divider variant="dashed" />
      <Divider tone="info" variant="dotted" />
      <Divider tone="success" weight="lg" />
    </div>
  )
}

export { Demo, meta }
