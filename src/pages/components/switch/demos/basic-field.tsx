import { Field, Switch } from "sticker-ui"

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
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        classNames={{ body: "order-1 flex-1", control: "order-2" }}
        controlPlacement="start"
        description="Pair switch with label for immediate on off preferences and settings."
        label="Weekly Digest"
      >
        <Switch defaultChecked />
      </Field>
    </div>
  )
}

export { Demo, meta }
