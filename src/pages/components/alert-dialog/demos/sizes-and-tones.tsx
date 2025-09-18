import { AlertDialog } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 30,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.alertDialogSizesAndTonesFitRoutineChecksWarningsAndRoomierApprovalPrompts",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button size="sm" variant="outlined">
            Small check
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content size="sm">
          <AlertDialog.Header>
            <AlertDialog.Title>Reset filters?</AlertDialog.Title>
            <AlertDialog.Description>
              Saved column visibility will stay unchanged.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action color="default">Reset</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button variant="solid">Info review</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content tone="info">
          <AlertDialog.Header>
            <AlertDialog.Title>Send review request?</AlertDialog.Title>
            <AlertDialog.Description>
              Three reviewers will receive a dashboard notification.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Not now</AlertDialog.Cancel>
            <AlertDialog.Action color="info">Send request</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button size="lg" variant="outlined">
            Large approval
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content size="lg" tone="warning">
          <AlertDialog.Header>
            <AlertDialog.Title>Approve quarterly changes?</AlertDialog.Title>
            <AlertDialog.Description>
              Approval will unlock the next planning stage for every project
              lead in this workspace.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Keep reviewing</AlertDialog.Cancel>
            <AlertDialog.Action color="warning">Approve</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  )
}

export { Demo, meta }
