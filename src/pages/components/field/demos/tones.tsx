import { FieldLabel } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.tones",
  descriptionKey:
    "preview.components.toneChangesHelpValidationHeavyFormsCallOutTheCaptionWhileLeavingTheControlStyleIndependent",
})

function Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <FieldLabel>Default Caption</FieldLabel>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <FieldLabel required tone="success">
          Success Caption
        </FieldLabel>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <FieldLabel required tone="warning">
          Warning Caption
        </FieldLabel>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <FieldLabel required tone="danger">
          Danger Caption
        </FieldLabel>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <FieldLabel optional tone="muted">
          Muted Caption
        </FieldLabel>
      </div>
    </div>
  )
}

export { Demo, meta }
