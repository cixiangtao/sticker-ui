import { Input, Label, LabelMarker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Sizes align with compact, standard, and roomy controls. Markers can be composed directly when a form needs custom wording.",
  order: 30,
  title: "Sizes & Custom Markers",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-small" size="sm">
          Small caption
        </Label>
        <Input
          className="mt-3"
          id="label-small"
          placeholder="Compact"
          size="sm"
        />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-default">
          Default caption
          <LabelMarker>new</LabelMarker>
        </Label>
        <Input className="mt-3" id="label-default" placeholder="Standard" />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-large" size="lg">
          Large caption
        </Label>
        <Input
          className="mt-3"
          id="label-large"
          placeholder="Roomy"
          size="lg"
        />
      </div>
    </div>
  )
}

export { Demo }
export default meta
