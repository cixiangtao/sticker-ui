import { Checkbox, Field } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignCheckboxControlsWithCompactListsStandardFormsAndRoomySettingsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Small Checklist"
        size="sm"
      >
        <Checkbox defaultChecked size="sm" />
      </Field>
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Standard Review"
      >
        <Checkbox defaultChecked tone="secondary" variant="filled" />
      </Field>
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Roomy Mixed State"
        size="lg"
      >
        <Checkbox defaultChecked="indeterminate" size="lg" tone="warning" />
      </Field>
    </div>
  )
}

export { Demo, meta }
