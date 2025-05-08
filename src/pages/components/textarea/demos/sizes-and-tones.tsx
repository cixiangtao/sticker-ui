import { Field, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesScaleTheWritingAreaForCompactNotesStandardFormsAndRoomyPlanningPanelsWhileToneKeepsSemanticFeedbackVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Quick Note" size="sm">
          <Textarea
            placeholder="Add A Compact Note"
            size="sm"
            tone="secondary"
            variant="quiet"
          />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Feedback">
          <Textarea
            defaultValue="The sticker frame keeps comments readable without losing the playful paper tone."
            placeholder="Share Feedback"
            tone="info"
            variant="filled"
          />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Launch Plan" size="lg">
          <Textarea
            placeholder="Outline the launch plan"
            size="lg"
            tone="success"
            variant="filled"
          />
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
