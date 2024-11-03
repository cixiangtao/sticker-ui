import { Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.tones",
  descriptionKey:
    "preview.components.toneChangesHelpValidationHeavyFormsCallOutTheCaptionWhileLeavingTheControlStyleIndependent",
})

function Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label>Default Label</Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="success">
          Success Label
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="warning">
          Warning Label
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="danger">
          Danger Label
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label optional tone="muted">
          Muted Label
        </Label>
      </div>
    </div>
  )
}

export { Demo, meta }
