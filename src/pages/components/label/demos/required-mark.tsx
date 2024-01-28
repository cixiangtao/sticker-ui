import { Input, Label, LabelDescription, LabelMarker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Required marks handle field semantics, while LabelMarker stays available for custom status chips.",
  order: 25,
  title: "Required Mark",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-required-badge" required>
          Badge required
        </Label>
        <Input
          defaultValue="Badge keeps the sticker feel"
          id="label-required-badge"
          required
        />
        <LabelDescription>
          Use the default badge when the label has room.
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label
          htmlFor="label-required-asterisk"
          required
          requiredMark="asterisk"
        >
          Asterisk required
        </Label>
        <Input
          defaultValue="Compact for narrow label columns"
          id="label-required-asterisk"
          required
        />
        <LabelDescription>
          Use the asterisk when horizontal forms need tighter labels.
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-marker-custom">
          Custom marker
          <LabelMarker tone="success">new</LabelMarker>
        </Label>
        <Input
          defaultValue="Status copy stays manual"
          id="label-marker-custom"
        />
        <LabelDescription>
          LabelMarker is for extra status text, not required semantics.
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo }
export default meta
