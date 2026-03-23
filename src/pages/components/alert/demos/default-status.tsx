import { Alert, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.defaultStatus",
  descriptionKey:
    "preview.components.alertDefaultStatusShowsTheNeutralToneRoleAndStripeVariantExplicitly",
})

function Demo() {
  return (
    <Alert role="status" tone="default" variant="stripe">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-2">
          <Alert.Title>Neutral status</Alert.Title>
          <Alert.Description>
            Default tone is useful for informative notes that should not imply
            success, warning, or danger.
          </Alert.Description>
        </div>
        <Tag size="sm" variant="outlined">
          default
        </Tag>
      </div>
    </Alert>
  )
}

export { Demo, meta }
