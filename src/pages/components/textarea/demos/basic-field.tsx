import { Field, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.textareaKeepsNativeMultilineBehaviorWhileAddingAChunkyStickerFrameHardShadowAndComfortableWritingSpace",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Field
        description="Pair textarea with label when longer copy needs accessible captions and helper text."
        label="Project Notes"
        required
      >
        <Textarea
          defaultValue="Draft the launch checklist capture edge cases and mark anything the team should revisit before shipping."
          placeholder="Write a short project note."
        />
      </Field>
    </div>
  )
}

export { Demo, meta }
