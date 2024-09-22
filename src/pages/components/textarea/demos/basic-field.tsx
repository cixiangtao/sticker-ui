import { Label, LabelDescription, Textarea } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
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
        defaultValue={tm(
          "preview.components.draftTheLaunchChecklistCaptureEdgeCasesAndMarkAnythingTheTeamShouldRevisitBeforeShipping",
        )}
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
