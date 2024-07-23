import { Label, LabelDescription, Textarea } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Textarea keeps native multiline behavior while adding a chunky sticker frame, hard shadow, and comfortable writing space.",
  order: 10,
  title: "Basic Field",
  titleKey: "preview.components.basicField",
  descriptionKey:
    "preview.components.textareaKeepsNativeMultilineBehaviorWhileAddingAChunkyStickerFrameHardShadowAndComfortableWritingSpace",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-project-notes" required>
        {tm("preview.components.projectNotes")}
      </Label>
      <Textarea
        defaultValue="Draft the launch checklist, capture edge cases, and mark anything the team should revisit before shipping."
        id="textarea-project-notes"
        placeholder={tm("preview.components.writeAShortProjectNote")}
      />
      <LabelDescription>
        {tm(
          "preview.components.pairTextareaWithLabelWhenLongerCopyNeedsAccessibleCaptionsAndHelperText",
        )}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
