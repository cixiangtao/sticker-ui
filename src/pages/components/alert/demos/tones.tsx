import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Semantic tones keep feedback readable while the sticker frame gives every message a clear paper surface.",
  order: 20,
  title: "Tones",
  descriptionKey:
    "preview.components.semanticTonesKeepFeedbackReadableWhileTheStickerFrameGivesEveryMessageAClearPaperSurface",
  titleKey: "preview.components.tones",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Alert tone="success">
        <AlertTitle>{tm("preview.components.readyToShip")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.allChecksPassedForThisComponent")}
        </AlertDescription>
      </Alert>
      <Alert tone="warning">
        <AlertTitle>{tm("preview.components.needsReview")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.translationCopyChangedInThisDemo")}
        </AlertDescription>
      </Alert>
      <Alert tone="danger">
        <AlertTitle>{tm("preview.components.buildFailed")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.runLintBeforeHandingOffTheRegistry")}
        </AlertDescription>
      </Alert>
      <Alert tone="secondary">
        <AlertTitle>{tm("preview.components.designNote")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.keepNestedSurfacesQuieterThanThisAlert")}
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { Demo, meta }
