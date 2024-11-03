import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAndTonesKeepModalSurfacesAlignedWithTheAmountOfContentAndTheKindOfDecision",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button color="info" variant="outlined">
            Small Info
          </Button>
        </DialogTrigger>
        <DialogContent size="sm" tone="info">
          <DialogHeader>
            <DialogTitle>Shortcut Saved</DialogTitle>
            <DialogDescription>
              Small dialogs work well for one decision and one follow up action.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button color="info">Done</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" variant="outlined">
            Large Review
          </Button>
        </DialogTrigger>
        <DialogContent size="lg" tone="warning">
          <DialogHeader>
            <DialogTitle>Review Before Shipping</DialogTitle>
            <DialogDescription>
              Large dialogs give longer checklists and forms enough room while
              the close button title and footer stay predictable.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 rounded-sticker-xl border border-ink bg-surface p-3 text-sm font-bold">
            <span>Preview demos render on desktop and mobile.</span>
            <span>Registry json points at source files.</span>
            <span>Chinese preview strings are covered.</span>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outlined">Keep Editing</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="warning">Ship It</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
