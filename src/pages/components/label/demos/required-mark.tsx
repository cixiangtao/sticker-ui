import { Input, Label, LabelDescription, LabelMarker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 25,
  titleKey: "preview.components.requiredMark",
  descriptionKey:
    "preview.components.requiredMarksHandleFieldSemanticsWhileLabelmarkerStaysAvailableForCustomStatusChips",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-lg border border-ink bg-white p-4">
        <Label htmlFor="label-required-badge" required>
          Badge Required
        </Label>
        <Input
          defaultValue="Badge keeps the sticker feel."
          id="label-required-badge"
          required
        />
        <LabelDescription>
          Use the default badge when the label has room.
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-ink bg-white p-4">
        <Label
          htmlFor="label-required-asterisk"
          required
          requiredMark="asterisk"
        >
          Asterisk Required
        </Label>
        <Input
          defaultValue="Compact for narrow label columns."
          id="label-required-asterisk"
          required
        />
        <LabelDescription>
          Use the asterisk when horizontal forms need tighter labels.
        </LabelDescription>
      </div>
      <div className="grid gap-2 rounded-sticker-lg border border-ink bg-white p-4">
        <Label htmlFor="label-marker-custom">
          Custom Marker<LabelMarker tone="success">New</LabelMarker>
        </Label>
        <Input
          defaultValue="Status Copy Stays Manual"
          id="label-marker-custom"
        />
        <LabelDescription>
          Labelmarker is for extra status text not required semantics.
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
