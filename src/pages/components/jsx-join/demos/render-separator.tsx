import { JsxJoin } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "A separator render function can react to each gap while children keep their original components.",
  order: 20,
  title: "Render Separator",
})

function Demo() {
  return (
    <nav
      aria-label="Component breadcrumb"
      className="rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg"
    >
      <JsxJoin
        as="ol"
        className="flex flex-wrap items-center gap-2 text-sm font-extrabold text-ink"
        separator={({ index }) => (
          <li
            aria-hidden="true"
            className="rounded-sticker-sm border border-ink bg-fill-default px-1.5 py-0.5 text-[10px] leading-none shadow-sticker-xs"
          >
            {index + 1}
          </li>
        )}
      >
        <li>Components</li>
        <li>Layout</li>
        <li>JsxJoin</li>
      </JsxJoin>
    </nav>
  )
}

export { Demo, meta }
