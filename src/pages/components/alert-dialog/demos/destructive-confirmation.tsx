import { AlertDialog } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.destructiveConfirmation",
  descriptionKey:
    "preview.components.alertDialogKeepsDestructiveDecisionsExplicitWithTitleDescriptionAndSeparateCancelAction",
})

function Demo() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button color="danger" variant="outlined">
          Delete workspace
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content tone="danger">
        <AlertDialog.Header>
          <AlertDialog.Title>Delete this workspace?</AlertDialog.Title>
          <AlertDialog.Description>
            This will remove all pinned boards, saved filters, and shared
            shortcuts for the workspace.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Keep workspace</AlertDialog.Cancel>
          <AlertDialog.Action>Delete workspace</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export { Demo, meta }
