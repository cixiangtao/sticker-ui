import { JsxJoin, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 10,
  titleKey: "preview.components.metadataRow",
  descriptionKey:
    "preview.components.useJsxjoinForMetadataRowsWhereEachItemStaysIndependentAndSeparatorsAreGeneratedOnce",
})

function Demo() {
  return (
    <div className="rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2"
        separator={
          <span aria-hidden="true" className="font-black text-su-fg-muted">
            /
          </span>
        }
      >
        <Tag size="sm">registry:ui</Tag>
        <Tag color="success" dot size="sm">
          Ready
        </Tag>
        <Tag color="info" size="sm" variant="filled">
          Source First
        </Tag>
      </JsxJoin>
    </div>
  )
}

export { Demo, meta }
