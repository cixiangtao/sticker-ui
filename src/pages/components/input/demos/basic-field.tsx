import { Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.inputsKeepNativeFormBehaviorWhileAddingAChunkyStickerFrameHardShadowAndReadableHelperCopy",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Field
        description="Pair input with label when the field needs accessible captions and helper text."
        label="Project Name"
        required
      >
        <Input defaultValue="Sticker Handbook" placeholder="Sticker Handbook" />
      </Field>
    </div>
  )
}

export { Demo, meta }
