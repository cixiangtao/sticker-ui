import { Checkbox, Field } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.checkboxKeepsRadixKeyboardBehaviorWhileAddingAChunkyStickerSquareHardShadowAndClearCheckedMark",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        description="Pair checkbox with label when a single option needs accessible copy and helper text."
        label="Publish Launch Notes"
      >
        <Checkbox defaultChecked />
      </Field>
    </div>
  )
}

export { Demo, meta }
