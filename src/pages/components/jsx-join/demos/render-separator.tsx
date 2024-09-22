import { JsxJoin } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.renderSeparator",
  descriptionKey:
    "preview.components.aSeparatorRenderFunctionCanReactToEachGapWhileChildrenKeepTheirOriginalComponents",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <nav
      aria-label={tm("preview.components.componentBreadcrumb")}
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
        <li>{tm("preview.components.components")}</li>
        <li>{tm("preview.components.layout")}</li>
        <li>{tm("preview.components.jsxjoin")}</li>
      </JsxJoin>
    </nav>
  )
}

export { Demo, meta }
