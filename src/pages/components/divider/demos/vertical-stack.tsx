import { Divider, Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  order: 30,
  titleKey: "preview.components.verticalStack",
  descriptionKey:
    "preview.components.verticalDividersSeparateSplitPanesAndToolbarClustersWithoutChangingTheSurroundingLayout",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex min-h-36 flex-wrap items-stretch gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="info" size="sm">
          {tm("preview.components.queue")}
        </Tag>
        <strong className="text-lg leading-6 text-ink">12 ready</strong>
      </div>
      <Divider decorative={false} orientation="vertical" tone="secondary" />
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="warning" size="sm">
          {tm("preview.components.review")}
        </Tag>
        <strong className="text-lg leading-6 text-ink">4 pending</strong>
      </div>
      <Divider orientation="vertical" tone="success" variant="dashed" />
      <div className="grid min-w-36 content-center gap-2">
        <Tag color="success" size="sm">
          {tm("preview.components.shipped")}
        </Tag>
        <strong className="text-lg leading-6 text-ink">28 done</strong>
      </div>
    </div>
  )
}

export { Demo, meta }
