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
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.closeControls",
  descriptionKey:
    "preview.components.showcloseAndCloselabelTuneTheBuiltInIconCloseButtonOrRemoveItWhenTheFooterShouldOwnDismissal",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button color="success" variant="outlined">
            Custom Label
          </Button>
        </DialogTrigger>
        <DialogContent closeLabel="Close Review Dialog" tone="info">
          <DialogHeader>
            <DialogTitle>Accessible Close Label</DialogTitle>
            <DialogDescription>
              The icon button keeps the same visual treatment while exposing a
              context specific ARIA label.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" variant="outlined">
            Footer Only
          </Button>
        </DialogTrigger>
        <DialogContent showClose={false} tone="warning">
          <DialogHeader className="pr-0">
            <DialogTitle>No Icon Close</DialogTitle>
            <DialogDescription>
              Some confirmations keep dismissal in the footer so the available
              choices remain explicit.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button color="warning">I Understand</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
