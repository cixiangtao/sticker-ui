import { Button } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.disabledAndLoadingStatesKeepTheStickerShapeWhilePreventingDuplicateActions",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>{tm("preview.components.disabled")}</Button>
      <Button loading>{tm("preview.components.loading")}</Button>
      <Button color="info" loading variant="outlined">
        {tm("preview.components.saving")}
      </Button>
      <Button color="danger" disabled variant="dashed">
        {tm("preview.components.disabledDanger")}
      </Button>
    </div>
  )
}

export { Demo, meta }
