import { JsxJoin, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-success",
  order: 10,
  titleKey: "preview.components.metadataRow",
  descriptionKey:
    "preview.components.useJsxjoinForMetadataRowsWhereEachItemStaysIndependentAndSeparatorsAreGeneratedOnce",
})

function Demo() {
  return (
    <div className="rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2"
        separator={
          <span aria-hidden="true" className="font-black text-text-muted">
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
