import { Button } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Variants define structure while color sets the sticker paper tone.",
  order: 10,
  title: "Variants",
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.variantsDefineStructureWhileColorSetsTheStickerPaperTone",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Button>{tm("preview.components.solid")}</Button>
      <Button color="info" variant="outlined">
        {tm("preview.components.outlined")}
      </Button>
      <Button color="warning" variant="dashed">
        {tm("preview.components.dashed")}
      </Button>
      <Button color="success" variant="filled">
        {tm("preview.components.filled")}
      </Button>
      <Button color="danger" variant="text">
        {tm("preview.components.text")}
      </Button>
      <Button color="secondary" variant="link">
        {tm("preview.components.link")}
      </Button>
    </div>
  )
}

export { Demo, meta }
