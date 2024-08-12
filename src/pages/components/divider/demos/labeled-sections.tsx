import { Divider } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  order: 20,
  titleKey: "preview.components.labeledSections",
  descriptionKey:
    "preview.components.addLabelContentWhenASectionBreakNeedsAScannableCheckpointInsideDenseDocsOrForms",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <div className="text-sm leading-6 font-medium text-text-muted">
        {tm(
          "preview.components.startWithTheBriefCollectEdgeCasesThenMarkTheHandoffPath",
        )}
      </div>
      <Divider align="start" decorative={false} tone="warning">
        {tm("preview.components.requirements")}
      </Divider>
      <div className="grid gap-2 text-sm font-bold text-ink">
        <span>{tm("preview.components.copySourceRemainsPortable")}</span>
        <span>
          {tm("preview.components.previewExamplesStayCompactAndReadable")}
        </span>
      </div>
      <Divider align="end" tone="secondary" variant="dashed">
        Handoff
      </Divider>
    </div>
  )
}

export { Demo, meta }
