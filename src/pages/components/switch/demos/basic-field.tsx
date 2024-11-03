import { Label, LabelDescription, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.switchKeepsRadixPressedStateBehaviorWhileAddingATactileStickerTrackAndPaperThumb",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <div className="flex items-start justify-between gap-4 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <div className="grid gap-1">
          <Label htmlFor="switch-weekly-digest">Weekly Digest</Label>
          <LabelDescription>
            Pair switch with label for immediate on off preferences and
            settings.
          </LabelDescription>
        </div>
        <Switch defaultChecked id="switch-weekly-digest" />
      </div>
    </div>
  )
}

export { Demo, meta }
