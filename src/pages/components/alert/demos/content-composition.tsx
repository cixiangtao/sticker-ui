import { Alert, Button, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.contentComposition",
  descriptionKey:
    "preview.components.alertsCanCombineRolesTitlesDescriptionsActionsAndInlineMetadataWithoutAddingExtraSlots",
})

function Demo() {
  return (
    <Alert role="alert" size="lg" tone="success" variant="outlined">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-2">
          <Alert.Title>Preview checks passed</Alert.Title>
          <Alert.Description>
            Use nested composition when the message needs action buttons or
            status metadata alongside the normal title and description slots.
          </Alert.Description>
        </div>
        <Tag color="success" rounded="pill" size="sm">
          build:preview
        </Tag>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button color="success" size="sm">
          View output
        </Button>
        <Button size="sm" variant="outlined">
          Copy command
        </Button>
      </div>
    </Alert>
  )
}

export { Demo, meta }
