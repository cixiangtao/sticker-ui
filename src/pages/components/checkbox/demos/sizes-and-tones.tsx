import { Checkbox, Label } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignCheckboxControlsWithCompactListsStandardFormsAndRoomySettingsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked id="checkbox-size-small" size="sm" />
        <Label htmlFor="checkbox-size-small" size="sm">
          {tm("preview.components.smallChecklist")}
        </Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked
          id="checkbox-size-medium"
          tone="secondary"
          variant="filled"
        />
        <Label htmlFor="checkbox-size-medium">
          {tm("preview.components.standardReview")}
        </Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked="indeterminate"
          id="checkbox-size-large"
          size="lg"
          tone="warning"
        />
        <Label htmlFor="checkbox-size-large" size="lg">
          {tm("preview.components.roomyMixedState")}
        </Label>
      </div>
    </div>
  )
}

export { Demo, meta }
