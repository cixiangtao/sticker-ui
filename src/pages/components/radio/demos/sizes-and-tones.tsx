import { RadioGroup } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
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
      size="md"
      tone="secondary"
    >
      <div className="rounded-su-xl border border-su-ink bg-white/80 p-4">
        <RadioGroup.Item label="Small Option" size="sm" value="small" />
      </div>
      <div className="rounded-su-xl border border-su-ink bg-white/80 p-4">
        <RadioGroup.Item
          className="rounded-su-lg bg-su-surface p-2"
          label="Standard Choice"
          size="md"
          value="standard"
          variant="filled"
        />
      </div>
      <div className="rounded-su-xl border border-su-ink bg-white/80 p-4">
        <RadioGroup.Item
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
