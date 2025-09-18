import { Field } from "sticker-ui"

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
        <Field.Label>Default Caption</Field.Label>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field.Label required tone="success">
          Success Caption
        </Field.Label>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field.Label required tone="warning">
          Warning Caption
        </Field.Label>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field.Label required tone="danger">
          Danger Caption
        </Field.Label>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field.Label optional tone="muted">
          Muted Caption
        </Field.Label>
      </div>
    </div>
  )
}

export { Demo, meta }
