import * as React from "react"
import { CopyButton, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.copyButtonCanShowVisibleLabelsAndReportCopiedTextToNearbyUi",
  order: 30,
  titleKey: "preview.components.sizesAndFeedback",
})

function Demo() {
  const [copiedText, setCopiedText] = React.useState("Nothing copied yet")

  return (
    <div className="flex flex-wrap items-center gap-3">
      <CopyButton
        copyText="pnpm build:preview"
        onCopied={setCopiedText}
        showLabel
      />
      <CopyButton copyText="registry:item" onCopied={setCopiedText} size="md" />
      <Tag color="info" rounded="pill">
        {copiedText}
      </Tag>
    </div>
  )
}

export { Demo, meta }
