import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Variant controls the tag structure while color carries semantic meaning.",
  order: 10,
  title: "Variants",
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.variantControlsTheTagStructureWhileColorCarriesSemanticMeaning",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Tag>Solid</Tag>
      <Tag color="info" variant="filled">
        Filled
      </Tag>
      <Tag color="success" variant="outlined">
        Outlined
      </Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="danger">Danger</Tag>
    </div>
  )
}

export { Demo, meta }
