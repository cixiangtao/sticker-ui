import { Label, LabelDescription, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.textareaKeepsNativeMultilineBehaviorWhileAddingAChunkyStickerFrameHardShadowAndComfortableWritingSpace",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-project-notes" required>
        Project Notes
      </Label>
      <Textarea
        defaultValue="Draft the launch checklist capture edge cases and mark anything the team should revisit before shipping."
        id="textarea-project-notes"
        placeholder="Write a short project note."
      />
      <LabelDescription>
        Pair textarea with label when longer copy needs accessible captions and
        helper text.
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
