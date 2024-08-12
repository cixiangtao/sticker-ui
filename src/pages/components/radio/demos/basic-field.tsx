import { Label, LabelDescription, RadioGroup, RadioGroupItem } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.radioKeepsRadixKeyboardBehaviorWhileAddingChunkyStickerCirclesHardShadowsAndAClearSelectedDot",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <div className="grid gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <div className="grid gap-1">
          <Label id="radio-launch-rhythm">
            {tm("preview.components.launchRhythm")}
          </Label>
          <LabelDescription>
            {tm(
              "preview.components.pairRadiogroupWithLabelWhenOneOptionMustBeSelectedFromAShortList",
            )}
          </LabelDescription>
        </div>
        <RadioGroup aria-labelledby="radio-launch-rhythm" defaultValue="weekly">
          <div className="flex items-center gap-3">
            <RadioGroupItem id="radio-launch-weekly" value="weekly" />
            <Label htmlFor="radio-launch-weekly">
              {tm("preview.components.weeklyReview")}
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="radio-launch-monthly" value="monthly" />
            <Label htmlFor="radio-launch-monthly">
              {tm("preview.components.monthlyMap")}
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export { Demo, meta }
