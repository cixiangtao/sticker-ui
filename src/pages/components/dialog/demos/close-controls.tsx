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
  className: "bg-[#EAFBF5]",
  description:
    "showClose and closeLabel tune the built-in icon close button, or remove it when the footer should own dismissal.",
  order: 30,
  title: "Close Controls",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button color="success" variant="outlined">
            Custom label
          </Button>
        </DialogTrigger>
        <DialogContent closeLabel="Close review dialog" tone="info">
          <DialogHeader>
            <DialogTitle>Accessible close label</DialogTitle>
            <DialogDescription>
              The icon button keeps the same visual treatment while exposing a
              context-specific aria-label.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" variant="outlined">
            Footer only
          </Button>
        </DialogTrigger>
        <DialogContent showClose={false} tone="warning">
          <DialogHeader className="pr-0">
            <DialogTitle>No icon close</DialogTitle>
            <DialogDescription>
              Some confirmations keep dismissal in the footer so the available
              choices remain explicit.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button color="warning">I understand</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
