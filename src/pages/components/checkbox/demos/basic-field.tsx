import { Checkbox, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.checkboxKeepsRadixKeyboardBehaviorWhileAddingAChunkyStickerSquareHardShadowAndClearCheckedMark",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <div className="flex items-start gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked id="checkbox-launch-notes" />
        <div className="grid gap-1">
          <Label htmlFor="checkbox-launch-notes">
            {tm("preview.components.publishLaunchNotes")}
          </Label>
          <LabelDescription>
            {tm(
              "preview.components.pairCheckboxWithLabelWhenASingleOptionNeedsAccessibleCopyAndHelperText",
            )}
          </LabelDescription>
        </div>
      </div>
    </div>
  )
}

export { Demo, meta }
