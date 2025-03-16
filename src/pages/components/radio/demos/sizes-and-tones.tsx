import { RadioGroup, RadioGroupItem } from "sticker-ui"

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
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem label="Small Option" size="sm" value="small" />
      </div>
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem
          label="Standard Choice"
          value="standard"
          variant="filled"
        />
      </div>
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem
          label="Roomy Route"
          size="lg"
          tone="warning"
          value="roomy"
        />
      </div>
    </RadioGroup>
  )
}

export { Demo, meta }
