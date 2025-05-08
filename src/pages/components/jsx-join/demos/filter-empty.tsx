import { JsxJoin, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.filterEmpty",
  descriptionKey:
    "preview.components.emptyOptionalChildrenAreSkippedByDefaultWhichKeepsConditionalRowsFromRenderingStraySeparators",
})

function Demo() {
  const optionalTone = null
  const archived = false

  return (
    <div className="grid gap-4 rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2"
        separator={<span className="text-su-fg-muted">·</span>}
      >
        <Tag size="sm">Divider</Tag>
        {optionalTone}
        <Tag color="info" size="sm">
          Semantic
        </Tag>
        {archived && <Tag color="danger">Archived</Tag>}
        <Tag color="success" size="sm">
          Published
        </Tag>
      </JsxJoin>
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2 text-xs font-extrabold text-su-fg-muted"
        filterEmpty={false}
        separator={<span aria-hidden="true">/</span>}
      >
        Visible empty slots
        {""}
        Still reserve their separators
      </JsxJoin>
    </div>
  )
}

export { Demo, meta }
