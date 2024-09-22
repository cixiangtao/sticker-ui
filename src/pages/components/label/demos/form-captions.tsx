import { Input, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.formCaptions",
  descriptionKey:
    "preview.components.labelsStayCompactReadableAndConnectedToNativeControlsWithTheNormalHtmlforRelationship",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="label-component-name" required>
          {tm("preview.components.componentName")}
        </Label>
        <Input
          defaultValue={tm("preview.components.stickerLabel")}
          id="label-component-name"
          required
        />
        <LabelDescription>
          {tm(
            "preview.components.requiredMarkersArePartOfTheCaptionNotTheInputFrame",
          )}
        </LabelDescription>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-component-note" optional>
          {tm("preview.components.releaseNote")}
        </Label>
        <textarea
          className="min-h-24 resize-none rounded-sticker-lg border-2 border-ink bg-white px-3 py-2 text-sm font-bold shadow-sticker-sm outline-none focus-visible:ring-2 focus-visible:ring-fill-danger"
          defaultValue={tm(
            "preview.components.useOptionalMarkersForHelperFieldsAndShortNotes",
          )}
          id="label-component-note"
        />
        <LabelDescription>
          {tm(
            "preview.components.descriptionCopyCanSitUnderAnyControlInTheSameField",
          )}
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
