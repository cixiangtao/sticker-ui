import { Divider } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Add label content when a section break needs a scannable checkpoint inside dense docs or forms.",
  order: 20,
  title: "Labeled Sections",
})

function Demo() {
  return (
    <div className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <div className="text-sm leading-6 font-medium text-text-muted">
        Start with the brief, collect edge cases, then mark the handoff path.
      </div>
      <Divider align="start" decorative={false} tone="warning">
        Requirements
      </Divider>
      <div className="grid gap-2 text-sm font-bold text-ink">
        <span>Copy source remains portable.</span>
        <span>Preview examples stay compact and readable.</span>
      </div>
      <Divider align="end" tone="secondary" variant="dashed">
        Handoff
      </Divider>
    </div>
  )
}

export { Demo }
export default meta
