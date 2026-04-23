import { ToggleGroup } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.toggleGroupSharesStickerVariantsAcrossRelatedRadixToggleItems",
  order: 10,
  titleKey: "preview.components.alignmentGroup",
})

function Demo() {
  return (
    <ToggleGroup defaultValue="center" tone="secondary" type="single">
      <ToggleGroup.Item aria-label="Align left" value="left">
        Left
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Align center" value="center">
        Center
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Align right" value="right">
        Right
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}

export { Demo, meta }
