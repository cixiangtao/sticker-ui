import { AlertDialog, Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.actionVariants",
  descriptionKey:
    "preview.components.alertDialogActionAndCancelButtonsCanUseButtonColorsSizesAndVariantsInsideTheModalFooter",
})

function Demo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button color="secondary" variant="outlined">
          Open footer variants
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content tone="info">
        <AlertDialog.Header>
          <AlertDialog.Title>Publish component examples?</AlertDialog.Title>
          <AlertDialog.Description>
            The footer demonstrates cancel and action button props without
            changing AlertDialog focus management.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel size="sm" variant="text">
            Keep editing
          </AlertDialog.Cancel>
          <AlertDialog.Cancel color="secondary" size="sm" variant="outlined">
            Save draft
          </AlertDialog.Cancel>
          <AlertDialog.Action color="success" size="sm" variant="solid">
            Publish
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export { Demo, meta }
