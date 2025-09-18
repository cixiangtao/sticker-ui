import { Button, Dialog } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicModal",
  descriptionKey:
    "preview.components.dialogCreatesAFocusedModalStickerPanelForDecisionsThatNeedTitleDescriptionAndActions",
})

function Demo() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Publish Component Page</Dialog.Title>
          <Dialog.Description>
            Confirm the preview demos API table translations and registry output
            before marking this component ready.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outlined">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button color="success">Publish</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  )
}

export { Demo, meta }
