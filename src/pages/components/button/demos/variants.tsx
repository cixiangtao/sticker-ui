import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.variants",
  descriptionKey:
    "preview.components.variantsDefineStructureWhileColorSetsTheStickerPaperTone",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Solid</Button>
      <Button color="info" variant="outlined">
        Outlined
      </Button>
      <Button color="warning" variant="dashed">
        Dashed
      </Button>
      <Button color="success" variant="filled">
        Filled
      </Button>
      <Button color="danger" variant="text">
        Text
      </Button>
      <Button color="secondary" variant="link">
        Link
      </Button>
    </div>
  )
}

export { Demo, meta }
