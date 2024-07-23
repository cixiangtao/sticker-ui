import { Label, LabelDescription, Switch } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Switch keeps Radix pressed state behavior while adding a tactile sticker track and paper thumb.",
  order: 10,
  title: "Basic Field",
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.switchKeepsRadixPressedStateBehaviorWhileAddingATactileStickerTrackAndPaperThumb",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <div className="flex items-start justify-between gap-4 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <div className="grid gap-1">
          <Label htmlFor="switch-weekly-digest">
            {tm("preview.components.weeklyDigest")}
          </Label>
          <LabelDescription>
            {tm(
              "preview.components.pairSwitchWithLabelForImmediateOnOffPreferencesAndSettings",
            )}
          </LabelDescription>
        </div>
        <Switch defaultChecked id="switch-weekly-digest" />
      </div>
    </div>
  )
}

export { Demo, meta }
