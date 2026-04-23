import { Upload } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.emptyDropzone",
  descriptionKey:
    "preview.components.uploadKeepsTransportApplicationOwnedWhileHandlingFilePickingUi",
})

function Demo() {
  return (
    <Upload
      accept=".png,.jpg,.webp"
      emptyDescription="Drop images here or choose files from your device."
      emptyHeading="Upload component screenshots"
      multiple
    />
  )
}

export { Demo, meta }
