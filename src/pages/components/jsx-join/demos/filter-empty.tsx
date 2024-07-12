import { JsxJoin, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Empty optional children are skipped by default, which keeps conditional rows from rendering stray separators.",
  order: 30,
  title: "Filter Empty",
  titleKey: "preview.components.filterEmpty",
  descriptionKey:
    "preview.components.emptyOptionalChildrenAreSkippedByDefaultWhichKeepsConditionalRowsFromRenderingStraySeparators",
})

function Demo() {
  const optionalTone = null
  const archived = false

  return (
    <div className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2"
        separator={<span className="text-text-muted">·</span>}
      >
        <Tag size="sm">Divider</Tag>
        {optionalTone}
        <Tag color="info" size="sm">
          semantic
        </Tag>
        {archived && <Tag color="danger">archived</Tag>}
        <Tag color="success" size="sm">
          published
        </Tag>
      </JsxJoin>
      <JsxJoin
        as="div"
        className="flex flex-wrap items-center gap-2 text-xs font-extrabold text-text-muted"
        filterEmpty={false}
        separator={<span aria-hidden="true">/</span>}
      >
        Visible empty slots
        {""}
        still reserve their separators
      </JsxJoin>
    </div>
  )
}

export { Demo, meta }
