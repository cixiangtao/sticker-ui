import { Spinner } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.asyncRegion",
  descriptionKey:
    "preview.components.statusRegionsCanUseASingleAnnouncedSpinnerWithQuieterSupportingCopy",
})

function Demo() {
  return (
    <div
      className="flex items-center gap-4 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md"
      role="status"
    >
      <Spinner decorative size="lg" tone="secondary" />
      <div>
        <div className="text-sm font-black text-su-ink">
          Refreshing API Docs
        </div>
        <p className="text-sm leading-6 font-medium text-su-fg-muted">
          The preview table will update when the build finishes.
        </p>
      </div>
    </div>
  )
}

export { Demo, meta }
