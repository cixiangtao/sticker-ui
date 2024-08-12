import { Label, Textarea } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesScaleTheWritingAreaForCompactNotesStandardFormsAndRoomyPlanningPanelsWhileToneKeepsSemanticFeedbackVisible",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-small" size="sm">
          {tm("preview.components.quickNote")}
        </Label>
        <Textarea
          id="textarea-size-small"
          placeholder={tm("preview.components.addACompactNote")}
          size="sm"
          tone="secondary"
          variant="quiet"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-medium">
          {tm("preview.components.feedback")}
        </Label>
        <Textarea
          defaultValue="The sticker frame keeps comments readable without losing the playful paper tone."
          id="textarea-size-medium"
          placeholder={tm("preview.components.shareFeedback")}
          tone="info"
          variant="filled"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-large" size="lg">
          {tm("preview.components.launchPlan")}
        </Label>
        <Textarea
          id="textarea-size-large"
          placeholder={tm("preview.components.outlineTheLaunchPlan")}
          size="lg"
          tone="success"
          variant="filled"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
