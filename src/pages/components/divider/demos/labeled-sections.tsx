import { Divider } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.labeledSections",
  descriptionKey:
    "preview.components.addLabelContentWhenASectionBreakNeedsAScannableCheckpointInsideDenseDocsOrForms",
})

function Demo() {
  return (
    <div className="grid gap-4 rounded-su-2xl border-2 border-su-ink bg-su-surface p-5 shadow-su-lg">
      <div className="text-sm leading-6 font-medium text-su-fg-muted">
        Start with the brief collect edge cases then mark the handoff path.
      </div>
      <Divider align="start" decorative={false} tone="warning">
        Requirements
      </Divider>
      <div className="grid gap-2 text-sm font-bold text-su-ink">
        <span>Copy Source Remains Portable</span>
        <span>Preview examples stay compact and readable.</span>
      </div>
      <Divider align="end" tone="secondary" variant="dashed">
        Handoff
      </Divider>
    </div>
  )
}

export { Demo, meta }
