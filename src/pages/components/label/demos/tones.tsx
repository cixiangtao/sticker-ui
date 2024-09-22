import { Label } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.tones",
  descriptionKey:
    "preview.components.toneChangesHelpValidationHeavyFormsCallOutTheCaptionWhileLeavingTheControlStyleIndependent",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label>{tm("preview.components.defaultLabel")}</Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="success">
          {tm("preview.components.successLabel")}
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="warning">
          {tm("preview.components.warningLabel")}
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label required tone="danger">
          {tm("preview.components.dangerLabel")}
        </Label>
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label optional tone="muted">
          {tm("preview.components.mutedLabel")}
        </Label>
      </div>
    </div>
  )
}

export { Demo, meta }
