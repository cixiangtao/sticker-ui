import {
  FieldDescription,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.radioKeepsRadixKeyboardBehaviorWhileAddingChunkyStickerCirclesHardShadowsAndAClearSelectedDot",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <div className="grid gap-3 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <div className="grid gap-1">
          <FieldLabel id="radio-launch-rhythm">Launch Rhythm</FieldLabel>
          <FieldDescription>
            Pair radiogroup with a field label when one option must be selected
            from a short list.
          </FieldDescription>
        </div>
        <RadioGroup aria-labelledby="radio-launch-rhythm" defaultValue="weekly">
          <RadioGroupItem label="Weekly Review" value="weekly" />
          <RadioGroupItem label="Monthly Map" value="monthly" />
        </RadioGroup>
      </div>
    </div>
  )
}

export { Demo, meta }
