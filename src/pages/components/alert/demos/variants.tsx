import { Alert } from "sticker-ui"

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
        <Alert.Title>Filled</Alert.Title>
        <Alert.Description>
          Use for prominent inline feedback.
        </Alert.Description>
      </Alert>
      <Alert size="sm" tone="success" variant="outlined">
        <Alert.Title>Outlined</Alert.Title>
        <Alert.Description>Use for calmer status notes.</Alert.Description>
      </Alert>
      <Alert size="sm" tone="warning" variant="stripe">
        <Alert.Title>Stripe</Alert.Title>
        <Alert.Description>
          Use for compact documentation hints.
        </Alert.Description>
      </Alert>
    </div>
  )
}

export { Demo, meta }
