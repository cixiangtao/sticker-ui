import * as React from "react"
import { Tag, Toggle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.toggleCanBeControlledWhenPressedStateDrivesNearbyStatus",
  order: 30,
  titleKey: "preview.components.controlledPressed",
})

function Demo() {
  const [pressed, setPressed] = React.useState(true)

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle
        aria-label="Pin updates"
        onPressedChange={setPressed}
        pressed={pressed}
        tone="secondary"
      >
        Pin
      </Toggle>
      <Tag color={pressed ? "secondary" : "default"} rounded="pill">
        {pressed ? "Pinned" : "Not pinned"}
      </Tag>
    </div>
  )
}

export { Demo, meta }
