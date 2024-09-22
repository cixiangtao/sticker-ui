import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 30,
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.filledOutlinedAndStripeVariantsTuneAlertEmphasisAcrossDenseFormsAndDocumentationPanels",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Alert size="sm" tone="info" variant="filled">
        <AlertTitle>{tm("preview.components.filled")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.useForProminentInlineFeedback")}
        </AlertDescription>
      </Alert>
      <Alert size="sm" tone="success" variant="outlined">
        <AlertTitle>{tm("preview.components.outlined")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.useForCalmerStatusNotes")}
        </AlertDescription>
      </Alert>
      <Alert size="sm" tone="warning" variant="stripe">
        <AlertTitle>{tm("preview.components.stripe")}</AlertTitle>
        <AlertDescription>
          {tm("preview.components.useForCompactDocumentationHints")}
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { Demo, meta }
