import { Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Tone changes help validation-heavy forms call out the caption while leaving the control style independent.",
  order: 20,
  title: "Tones",
  titleKey: "preview.components.tones",
  descriptionKey:
    "preview.components.toneChangesHelpValidationHeavyFormsCallOutTheCaptionWhileLeavingTheControlStyleIndependent",
})

function Demo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label>Default label</Label>
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label required tone="success">
          Success label
        </Label>
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label required tone="warning">
          Warning label
        </Label>
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label required tone="danger">
          Danger label
        </Label>
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label optional tone="muted">
          Muted label
        </Label>
      </div>
    </div>
  )
}

export { Demo, meta }
