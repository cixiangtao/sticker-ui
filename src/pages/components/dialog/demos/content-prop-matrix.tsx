import { Button, Dialog } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.contentPropMatrix",
  descriptionKey:
    "preview.components.dialogContentPropMatrixCoversDefaultMediumSecondaryToneAndCloseButtonCombinations",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <Dialog.Trigger asChild>
          <Button variant="outlined">Default md</Button>
        </Dialog.Trigger>
        <Dialog.Content size="md" tone="default">
          <Dialog.Header>
            <Dialog.Title>Default medium dialog</Dialog.Title>
            <Dialog.Description>
              The default content tone and medium size are explicit here.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button color="secondary" variant="outlined">
            Secondary
          </Button>
        </Dialog.Trigger>
        <Dialog.Content
          closeLabel="Close secondary dialog"
          size="sm"
          tone="secondary"
        >
          <Dialog.Header>
            <Dialog.Title>Secondary dialog</Dialog.Title>
            <Dialog.Description>
              Tone can match the surrounding workflow without changing Radix
              behavior.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}

export { Demo, meta }
