import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Disabled and loading states keep the sticker shape while preventing duplicate actions.",
  order: 30,
  title: "States",
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
