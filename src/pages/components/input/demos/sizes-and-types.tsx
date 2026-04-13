import { Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTypes",
  descriptionKey:
    "preview.components.sizesAlignTextInputsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileTypeStaysFocusedOnTextEntry",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Small Search" size="sm">
          <Input placeholder="Search Docs" size="sm" type="search" />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Standard URL">
          <Input placeholder="Https Sticker Dev" size="md" type="url" />
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Roomy Email" size="lg">
          <Input placeholder="Hello Sticker Dev" size="lg" type="email" />
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
