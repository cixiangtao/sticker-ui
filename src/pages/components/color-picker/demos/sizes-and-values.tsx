import { ColorPicker, Field } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndValues",
  descriptionKey:
    "preview.components.sizesAlignColorPickersWithCompactToolbarsStandardFormsAndRoomySettingsPanels",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Small Swatch" size="sm">
          <ColorPicker defaultValue="#22c55e" size="sm" />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Standard Theme">
          <ColorPicker defaultValue="#3b82f6" />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Large Panel" size="lg">
          <ColorPicker defaultValue="#a855f7" size="lg" />
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
