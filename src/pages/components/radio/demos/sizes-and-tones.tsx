import { Field, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignRadioControlsWithCompactListsStandardFormsAndRoomySettingsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  return (
    <RadioGroup
      className="grid gap-4 md:grid-cols-3"
      defaultValue="standard"
      tone="secondary"
    >
      <Field
        className="items-center rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Small Option"
        size="sm"
      >
        <RadioGroupItem size="sm" value="small" />
      </Field>
      <Field
        className="items-center rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Standard Choice"
      >
        <RadioGroupItem value="standard" variant="filled" />
      </Field>
      <Field
        className="items-center rounded-sticker-xl border border-ink bg-white/80 p-4"
        controlPlacement="start"
        label="Roomy Route"
        size="lg"
      >
        <RadioGroupItem size="lg" tone="warning" value="roomy" />
      </Field>
    </RadioGroup>
  )
}

export { Demo, meta }
