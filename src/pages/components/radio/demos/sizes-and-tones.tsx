import { Label, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes align radio controls with compact lists, standard forms, and roomy settings while tone keeps semantic context visible.",
  order: 20,
  title: "Sizes & Tones",
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
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem id="radio-size-small" size="sm" value="small" />
        <Label htmlFor="radio-size-small" size="sm">
          Small option
        </Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem
          id="radio-size-medium"
          value="standard"
          variant="filled"
        />
        <Label htmlFor="radio-size-medium">Standard choice</Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <RadioGroupItem
          id="radio-size-large"
          size="lg"
          tone="warning"
          value="roomy"
        />
        <Label htmlFor="radio-size-large" size="lg">
          Roomy route
        </Label>
      </div>
    </RadioGroup>
  )
}

export { Demo, meta }
