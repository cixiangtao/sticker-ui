import { Upload } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.queueStates",
  descriptionKey:
    "preview.components.uploadQueueShowsIdleUploadingDoneAndErrorStatesWithoutOwningNetworkLogic",
})

function Demo() {
  return (
    <Upload
      emptyHeading="Attach release files"
      items={[
        {
          id: "1",
          name: "component-audit.csv",
          size: "42 KB",
          status: "done",
        },
        {
          id: "2",
          name: "preview-screenshots.zip",
          progress: 64,
          size: "2.4 MB",
          status: "uploading",
        },
        {
          error: "File exceeds the configured limit.",
          id: "3",
          name: "raw-video.mov",
          size: "96 MB",
          status: "error",
        },
      ]}
    />
  )
}

export { Demo, meta }
