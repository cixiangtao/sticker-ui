import { Field, Range } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesTuneRangeTracksForDenseRowsAndRoomyPanelsWhileToneKeepsMeaningVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Field
        className="rounded-su-xl border border-su-ink bg-white/80 p-4"
        label="Compact"
        size="sm"
      >
        <Range defaultValue={24} size="sm" tone="secondary" />
      </Field>
      <Field
        className="rounded-su-xl border border-su-ink bg-white/80 p-4"
        label="Balanced"
      >
        <Range defaultValue={56} showValue tone="success" />
      </Field>
      <Field
        className="rounded-su-xl border border-su-ink bg-white/80 p-4"
        label="Priority"
        size="lg"
      >
        <Range defaultValue={82} size="lg" showValue tone="danger" />
      </Field>
    </div>
  )
}

export { Demo, meta }
