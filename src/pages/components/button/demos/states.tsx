import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.disabledAndLoadingStatesKeepTheStickerShapeWhilePreventingDuplicateActions",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button color="info" loading variant="outlined">
        Saving
      </Button>
      <Button color="danger" disabled variant="dashed">
        Disabled Danger
      </Button>
    </div>
  )
}

export { Demo, meta }
