import { Toggle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.toggleWrapsRadixPressedStateInAStickerCommandButton",
  order: 10,
  titleKey: "preview.components.formattingToggle",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle aria-label="Bold" defaultPressed>
        B
      </Toggle>
      <Toggle aria-label="Italic" tone="info">
        I
      </Toggle>
      <Toggle aria-label="Underline" tone="success" variant="ghost">
        U
      </Toggle>
      <Toggle aria-label="Disabled" disabled>
        Off
      </Toggle>
    </div>
  )
}

export { Demo, meta }
