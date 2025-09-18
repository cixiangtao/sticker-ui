import * as React from "react"
import { AlertDialog } from "sticker-ui"

import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.controlledState",
  descriptionKey:
    "preview.components.alertDialogCanBeControlledWhenAWorkflowNeedsToReflectTheLastDecision",
})

function Demo() {
  const [open, setOpen] = React.useState(false)
  const [lastDecision, setLastDecision] = React.useState("No decision yet")

  return (
    <div className="flex flex-col items-start gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialog.Trigger asChild>
          <Button variant="solid">Publish changes</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content tone="warning">
          <AlertDialog.Header>
            <AlertDialog.Title>Publish these settings?</AlertDialog.Title>
            <AlertDialog.Description>
              The current team will see the new navigation order immediately.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel onClick={() => setLastDecision("Canceled")}>
              Review again
            </AlertDialog.Cancel>
            <AlertDialog.Action
              color="warning"
              onClick={() => setLastDecision("Published")}
            >
              Publish
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Tag color="warning">{lastDecision}</Tag>
    </div>
  )
}

export { Demo, meta }
