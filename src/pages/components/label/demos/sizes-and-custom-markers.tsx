import { Input, Label, LabelMarker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 30,
  titleKey: "preview.components.sizesAndCustomMarkers",
  descriptionKey:
    "preview.components.sizesAlignWithCompactStandardAndRoomyControlsMarkersCanBeComposedDirectlyWhenAFormNeedsCustomWording",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label htmlFor="label-small" size="sm">
          Small Caption
        </Label>
        <Input
          className="mt-3"
          id="label-small"
          placeholder="Compact"
          size="sm"
        />
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label htmlFor="label-default">
          Default Caption<LabelMarker>New</LabelMarker>
        </Label>
        <Input className="mt-3" id="label-default" placeholder="Standard" />
      </div>
      <div className="rounded-sticker-lg border border-ink bg-white p-4">
        <Label htmlFor="label-large" size="lg">
          Large Caption
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

export { Demo, meta }
