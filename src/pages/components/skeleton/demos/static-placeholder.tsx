import { Skeleton } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.staticPlaceholder",
  descriptionKey:
    "preview.components.animationCanBeDisabledWhenThePlaceholderIsPartOfALargerBusyRegion",
})

function Demo() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading notebook summary"
      className="grid gap-3 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md"
      role="status"
    >
      <Skeleton animated={false} className="max-w-52" shape="line" />
      <Skeleton animated={false} shape="block" tone="secondary" />
      <Skeleton animated={false} className="max-w-72" shape="line" />
    </div>
  )
}

export { Demo, meta }
