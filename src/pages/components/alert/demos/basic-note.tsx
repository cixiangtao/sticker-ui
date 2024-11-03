import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  descriptionKey:
    "preview.components.alertCreatesAReadableStickerNoteForStatusMessagesValidationSummariesAndHelpfulNextSteps",
  titleKey: "preview.components.basicNote",
})

function Demo() {
  return (
    <Alert className="max-w-xl" tone="info">
      <AlertTitle>Preview Updated</AlertTitle>
      <AlertDescription>
        The registry output is ready to inspect before publishing the component
        page.
      </AlertDescription>
    </Alert>
  )
}

export { Demo, meta }
