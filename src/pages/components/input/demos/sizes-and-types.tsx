import { Input, Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTypes",
  descriptionKey:
    "preview.components.sizesAlignTextInputsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileTypeStaysFocusedOnTextEntry",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-small" size="sm">
          Small Search
        </Label>
        <Input
          id="input-size-small"
          placeholder="Search Docs"
          size="sm"
          type="search"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-medium">Standard URL</Label>
        <Input
          id="input-size-medium"
          placeholder="Https Sticker Dev"
          type="url"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-large" size="lg">
          Roomy Email
        </Label>
        <Input
          id="input-size-large"
          placeholder="Hello Sticker Dev"
          size="lg"
          type="email"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
