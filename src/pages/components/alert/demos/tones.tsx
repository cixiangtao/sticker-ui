import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  descriptionKey:
    "preview.components.semanticTonesKeepFeedbackReadableWhileTheStickerFrameGivesEveryMessageAClearPaperSurface",
  titleKey: "preview.components.tones",
})

function Demo() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Alert tone="success">
        <AlertTitle>Ready To Ship</AlertTitle>
        <AlertDescription>
          All checks passed for this component.
        </AlertDescription>
      </Alert>
      <Alert tone="warning">
        <AlertTitle>Needs Review</AlertTitle>
        <AlertDescription>
          Translation copy changed in this demo.
        </AlertDescription>
      </Alert>
      <Alert tone="danger">
        <AlertTitle>Build Failed</AlertTitle>
        <AlertDescription>
          Run lint before handing off the registry.
        </AlertDescription>
      </Alert>
      <Alert tone="secondary">
        <AlertTitle>Design Note</AlertTitle>
        <AlertDescription>
          Keep nested surfaces quieter than this alert.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { Demo, meta }
