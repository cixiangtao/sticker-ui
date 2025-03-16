import { Checkbox } from "sticker-ui"

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
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked label="Small Checklist" size="sm" />
      </div>
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked
          label="Standard Review"
          tone="secondary"
          variant="filled"
        />
      </div>
      <div className="rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked="indeterminate"
          label="Roomy Mixed State"
          size="lg"
          tone="warning"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
