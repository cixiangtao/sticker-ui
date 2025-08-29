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
        <AlertDialogTrigger asChild>
          <Button size="sm" variant="outlined">
            Small check
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset filters?</AlertDialogTitle>
            <AlertDialogDescription>
              Saved column visibility will stay unchanged.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction color="default">Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="solid">Info review</Button>
        </AlertDialogTrigger>
        <AlertDialogContent tone="info">
          <AlertDialogHeader>
            <AlertDialogTitle>Send review request?</AlertDialogTitle>
            <AlertDialogDescription>
              Three reviewers will receive a dashboard notification.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction color="info">Send request</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="lg" variant="outlined">
            Large approval
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="lg" tone="warning">
          <AlertDialogHeader>
            <AlertDialogTitle>Approve quarterly changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Approval will unlock the next planning stage for every project
              lead in this workspace.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep reviewing</AlertDialogCancel>
            <AlertDialogAction color="warning">Approve</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export { Demo, meta }
