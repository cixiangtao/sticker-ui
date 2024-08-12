import { Input, Label } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 20,
  titleKey: "preview.components.sizesAndTypes",
  descriptionKey:
    "preview.components.sizesAlignTextInputsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileTypeStaysFocusedOnTextEntry",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-small" size="sm">
          {tm("preview.components.smallSearch")}
        </Label>
        <Input
          id="input-size-small"
          placeholder={tm("preview.components.searchDocs")}
          size="sm"
          type="search"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-medium">
          {tm("preview.components.standardUrl")}
        </Label>
        <Input
          id="input-size-medium"
          placeholder={tm("preview.components.httpsStickerDev")}
          type="url"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="input-size-large" size="lg">
          {tm("preview.components.roomyEmail")}
        </Label>
        <Input
          id="input-size-large"
          placeholder={tm("preview.components.helloStickerDev")}
          size="lg"
          type="email"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
