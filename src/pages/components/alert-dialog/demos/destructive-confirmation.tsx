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
  order: 10,
  titleKey: "preview.components.destructiveConfirmation",
  descriptionKey:
    "preview.components.alertDialogKeepsDestructiveDecisionsExplicitWithTitleDescriptionAndSeparateCancelAction",
})

function Demo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button color="danger" variant="outlined">
          Delete workspace
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent tone="danger">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this workspace?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove all pinned boards, saved filters, and shared
            shortcuts for the workspace.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep workspace</AlertDialogCancel>
          <AlertDialogAction>Delete workspace</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { Demo, meta }
