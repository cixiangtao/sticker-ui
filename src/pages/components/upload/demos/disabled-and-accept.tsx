import { Upload } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.uploadAcceptMultipleAndDisabledPropsDescribePickerConstraintsWithoutOwningTransport",
  order: 30,
  titleKey: "preview.components.disabledAndAccept",
})

function Demo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 md:grid-cols-2">
      <Upload
        accept=".png,.jpg"
        emptyDescription="PNG or JPG files, up to your app's own limit."
        emptyHeading="Image assets"
        multiple
        pickLabel="Choose images"
      />
      <Upload
        disabled
        emptyDescription="Uploads are locked while the release is being archived."
        emptyHeading="Uploads paused"
        pickLabel="Locked"
      />
    </div>
  )
}

export { Demo, meta }
