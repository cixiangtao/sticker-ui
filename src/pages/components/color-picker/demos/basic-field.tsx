import { ColorPicker, Field } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.colorpickerKeepsNativeColorPanelBehaviorWhileAddingAStickerSwatchFrame",
})

function Demo() {
  return (
    <div className="grid max-w-sm gap-3">
      <Field
        description="Pick a brand accent with the browser color panel while keeping a visible CSS color value."
        label="Brand Accent"
      >
        <ColorPicker defaultValue="#f97316" />
      </Field>
    </div>
  )
}

export { Demo, meta }
