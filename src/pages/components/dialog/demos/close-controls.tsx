import { Button, Dialog } from "sticker-ui"

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
        <Dialog.Trigger asChild>
          <Button color="success" variant="outlined">
            Custom Label
          </Button>
        </Dialog.Trigger>
        <Dialog.Content closeLabel="Close Review Dialog" tone="info">
          <Dialog.Header>
            <Dialog.Title>Accessible Close Label</Dialog.Title>
            <Dialog.Description>
              The icon button keeps the same visual treatment while exposing a
              context specific ARIA label.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog>

      <Dialog>
        <Dialog.Trigger asChild>
          <Button color="warning" variant="outlined">
            Footer Only
          </Button>
        </Dialog.Trigger>
        <Dialog.Content showClose={false} tone="warning">
          <Dialog.Header className="pr-0">
            <Dialog.Title>No Icon Close</Dialog.Title>
            <Dialog.Description>
              Some confirmations keep dismissal in the footer so the available
              choices remain explicit.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button color="warning">I Understand</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
