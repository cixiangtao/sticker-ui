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
  className: "bg-[#EAF7FF]",
  description:
    "Dialog creates a focused modal sticker panel for decisions that need title, description, and actions.",
  order: 10,
  title: "Basic Modal",
})

function Demo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Publish component page?</DialogTitle>
          <DialogDescription>
            Confirm the preview demos, API table, translations, and registry
            output before marking this component ready.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button color="success">Publish</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { Demo, meta }
