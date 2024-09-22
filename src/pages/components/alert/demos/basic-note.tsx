import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  descriptionKey:
    "preview.components.alertCreatesAReadableStickerNoteForStatusMessagesValidationSummariesAndHelpfulNextSteps",
  titleKey: "preview.components.basicNote",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Alert className="max-w-xl" tone="info">
      <AlertTitle>{tm("preview.components.previewUpdated")}</AlertTitle>
      <AlertDescription>
        {tm(
          "preview.components.theRegistryOutputIsReadyToInspectBeforePublishingTheComponentPage",
        )}
      </AlertDescription>
    </Alert>
  )
}

export { Demo, meta }
