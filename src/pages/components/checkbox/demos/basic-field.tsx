import { Checkbox, Label, LabelDescription } from "sticker-ui"

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
      <div className="flex items-start gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked id="checkbox-launch-notes" />
        <div className="grid gap-1">
          <Label htmlFor="checkbox-launch-notes">Publish Launch Notes</Label>
          <LabelDescription>
            Pair checkbox with label when a single option needs accessible copy
            and helper text.
          </LabelDescription>
        </div>
      </div>
    </div>
  )
}

export { Demo, meta }
