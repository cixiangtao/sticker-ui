import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
        <AlertDialogTrigger asChild>
          <Button variant="solid">Publish changes</Button>
        </AlertDialogTrigger>
        <AlertDialogContent tone="warning">
          <AlertDialogHeader>
            <AlertDialogTitle>Publish these settings?</AlertDialogTitle>
            <AlertDialogDescription>
              The current team will see the new navigation order immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setLastDecision("Canceled")}>
              Review again
            </AlertDialogCancel>
            <AlertDialogAction
              color="warning"
              onClick={() => setLastDecision("Published")}
            >
              Publish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Tag color="warning">{lastDecision}</Tag>
    </div>
  )
}

export { Demo, meta }
