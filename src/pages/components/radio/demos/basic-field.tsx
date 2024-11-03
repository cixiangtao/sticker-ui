import { Label, LabelDescription, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.radioKeepsRadixKeyboardBehaviorWhileAddingChunkyStickerCirclesHardShadowsAndAClearSelectedDot",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <div className="grid gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <div className="grid gap-1">
          <Label id="radio-launch-rhythm">Launch Rhythm</Label>
          <LabelDescription>
            Pair radiogroup with label when one option must be selected from a
            short list.
          </LabelDescription>
        </div>
        <RadioGroup aria-labelledby="radio-launch-rhythm" defaultValue="weekly">
          <div className="flex items-center gap-3">
            <RadioGroupItem id="radio-launch-weekly" value="weekly" />
            <Label htmlFor="radio-launch-weekly">Weekly Review</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="radio-launch-monthly" value="monthly" />
            <Label htmlFor="radio-launch-monthly">Monthly Map</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export { Demo, meta }
