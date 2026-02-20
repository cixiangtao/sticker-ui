import { Plus } from "lucide-react"
import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  descriptionKey:
    "preview.components.sizeControlsScaleWhileShapeKeepsSquareCommandsSeparate",
  titleKey: "preview.components.sizes",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large Action</Button>
      <Button aria-label="Add Component" shape="square">
        <Plus aria-hidden="true" className="size-5 stroke-[3]" />
      </Button>
    </div>
  )
}

export { Demo, meta }
