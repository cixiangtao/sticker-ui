import { Input, Label, LabelDescription } from "sticker-ui"

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
      <Label htmlFor="input-project-name" required>
        Project Name
      </Label>
      <Input
        defaultValue="Sticker Handbook"
        id="input-project-name"
        placeholder="Sticker Handbook"
      />
      <LabelDescription>
        Pair input with label when the field needs accessible captions and
        helper text.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
