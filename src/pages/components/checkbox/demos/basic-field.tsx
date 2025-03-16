import { Checkbox } from "sticker-ui"

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
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked label="Publish Launch Notes" />
      </div>
    </div>
  )
}

export { Demo, meta }
