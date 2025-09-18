import { Alert } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  descriptionKey:
    "preview.components.alertCreatesAReadableStickerNoteForStatusMessagesValidationSummariesAndHelpfulNextSteps",
  titleKey: "preview.components.basicNote",
})

function Demo() {
  return (
    <Alert className="max-w-xl" tone="info">
      <Alert.Title>Preview Updated</Alert.Title>
      <Alert.Description>
        The registry output is ready to inspect before publishing the component
        page.
      </Alert.Description>
    </Alert>
  )
}

export { Demo, meta }
