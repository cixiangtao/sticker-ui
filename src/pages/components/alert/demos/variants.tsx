import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.filledOutlinedAndStripeVariantsTuneAlertEmphasisAcrossDenseFormsAndDocumentationPanels",
})

function Demo() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Alert size="sm" tone="info" variant="filled">
        <AlertTitle>Filled</AlertTitle>
        <AlertDescription>Use for prominent inline feedback.</AlertDescription>
      </Alert>
      <Alert size="sm" tone="success" variant="outlined">
        <AlertTitle>Outlined</AlertTitle>
        <AlertDescription>Use for calmer status notes.</AlertDescription>
      </Alert>
      <Alert size="sm" tone="warning" variant="stripe">
        <AlertTitle>Stripe</AlertTitle>
        <AlertDescription>
          Use for compact documentation hints.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { Demo, meta }
