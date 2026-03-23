import { AlertDialog, Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.buttonPropMatrix",
  descriptionKey:
    "preview.components.alertDialogButtonPropMatrixCoversActionCancelSizeColorAndVariantOverrides",
})

function Demo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button variant="dashed">Open button matrix</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content size="md" tone="default">
        <AlertDialog.Header>
          <AlertDialog.Title>Footer button prop matrix</AlertDialog.Title>
          <AlertDialog.Description>
            Action and Cancel reuse the Button API while keeping AlertDialog
            focus management.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer className="flex-wrap">
          <AlertDialog.Cancel color="default" size="md" variant="dashed">
            Dashed cancel
          </AlertDialog.Cancel>
          <AlertDialog.Cancel color="secondary" size="md" variant="filled">
            Filled cancel
          </AlertDialog.Cancel>
          <AlertDialog.Cancel color="info" size="md" variant="link">
            Link cancel
          </AlertDialog.Cancel>
          <AlertDialog.Action color="success" size="md" variant="dashed">
            Dashed action
          </AlertDialog.Action>
          <AlertDialog.Action color="warning" size="md" variant="filled">
            Filled action
          </AlertDialog.Action>
          <AlertDialog.Action color="danger" size="md" variant="link">
            Link action
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export { Demo, meta }
