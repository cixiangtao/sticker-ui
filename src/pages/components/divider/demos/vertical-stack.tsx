import { Divider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.verticalStack",
  descriptionKey:
    "preview.components.verticalDividersSeparateSplitPanesAndToolbarClustersWithoutChangingTheSurroundingLayout",
})

function Demo() {
  return (
    <div className="flex min-h-36 flex-wrap items-stretch gap-4 rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="info" size="sm">
          Queue
        </Tag>
        <strong className="text-lg leading-6 text-su-ink">12 Ready</strong>
      </div>
      <Divider decorative={false} orientation="vertical" tone="secondary" />
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="warning" size="sm">
          Review
        </Tag>
        <strong className="text-lg leading-6 text-su-ink">4 Pending</strong>
      </div>
      <Divider orientation="vertical" tone="success" variant="dashed" />
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="success" size="sm">
          Shipped
        </Tag>
        <strong className="text-lg leading-6 text-su-ink">28 Done</strong>
      </div>
    </div>
  )
}

export { Demo, meta }
