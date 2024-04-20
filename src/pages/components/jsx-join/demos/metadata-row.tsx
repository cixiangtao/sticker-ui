import { JsxJoin, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  description:
    "Use JsxJoin for metadata rows where each item stays independent and separators are generated once.",
  order: 10,
  title: "Metadata Row",
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
          ready
        </Tag>
        <Tag color="info" size="sm" variant="filled">
          source-first
        </Tag>
      </JsxJoin>
    </div>
  )
}

export { Demo }
export default meta
