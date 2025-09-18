import { Alert } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  descriptionKey:
    "preview.components.semanticTonesKeepFeedbackReadableWhileTheStickerFrameGivesEveryMessageAClearPaperSurface",
  titleKey: "preview.components.tones",
})

function Demo() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Alert tone="success">
        <Alert.Title>Ready To Ship</Alert.Title>
        <Alert.Description>
          All checks passed for this component.
        </Alert.Description>
      </Alert>
      <Alert tone="warning">
        <Alert.Title>Needs Review</Alert.Title>
        <Alert.Description>
          Translation copy changed in this demo.
        </Alert.Description>
      </Alert>
      <Alert tone="danger">
        <Alert.Title>Build Failed</Alert.Title>
        <Alert.Description>
          Run lint before handing off the registry.
        </Alert.Description>
      </Alert>
      <Alert tone="secondary">
        <Alert.Title>Design Note</Alert.Title>
        <Alert.Description>
          Keep nested surfaces quieter than this alert.
        </Alert.Description>
      </Alert>
    </div>
  )
}

export { Demo, meta }
