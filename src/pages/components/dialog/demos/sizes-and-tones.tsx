import { Button, Dialog } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAndTonesKeepModalSurfacesAlignedWithTheAmountOfContentAndTheKindOfDecision",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <Dialog.Trigger asChild>
          <Button color="info" variant="outlined">
            Small Info
          </Button>
        </Dialog.Trigger>
        <Dialog.Content size="sm" tone="info">
          <Dialog.Header>
            <Dialog.Title>Shortcut Saved</Dialog.Title>
            <Dialog.Description>
              Small dialogs work well for one decision and one follow up action.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button color="info">Done</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button color="warning" variant="outlined">
            Large Review
          </Button>
        </Dialog.Trigger>
        <Dialog.Content size="lg" tone="warning">
          <Dialog.Header>
            <Dialog.Title>Review Before Shipping</Dialog.Title>
            <Dialog.Description>
              Large dialogs give longer checklists and forms enough room while
              the close button title and footer stay predictable.
            </Dialog.Description>
          </Dialog.Header>
          <div className="grid gap-2 rounded-su-xl border border-su-ink bg-su-surface p-3 text-sm font-bold">
            <span>Preview demos render on desktop and mobile.</span>
            <span>Registry json points at source files.</span>
            <span>Chinese preview strings are covered.</span>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outlined">Keep Editing</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button color="warning">Ship It</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
