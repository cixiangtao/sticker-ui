import { Input, Label, LabelMarker } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  order: 30,
  titleKey: "preview.components.sizesAndCustomMarkers",
  descriptionKey:
    "preview.components.sizesAlignWithCompactStandardAndRoomyControlsMarkersCanBeComposedDirectlyWhenAFormNeedsCustomWording",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-small" size="sm">
          {tm("preview.components.smallCaption")}
        </Label>
        <Input
          className="mt-3"
          id="label-small"
          placeholder={tm("preview.components.compact")}
          size="sm"
        />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-default">
          {tm("preview.components.defaultCaption")}
          <LabelMarker>{tm("preview.components.new")}</LabelMarker>
        </Label>
        <Input
          className="mt-3"
          id="label-default"
          placeholder={tm("preview.components.standard")}
        />
      </div>
      <div className="rounded-[16px] border border-[#2E3038] bg-white p-4">
        <Label htmlFor="label-large" size="lg">
          {tm("preview.components.largeCaption")}
        </Label>
        <Input
          className="mt-3"
          id="label-large"
          placeholder={tm("preview.components.roomy")}
          size="lg"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
