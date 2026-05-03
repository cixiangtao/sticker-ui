import * as React from "react"
import { Slider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.sliderSupportsSingleAndRangeValuesWithRadixKeyboardControl",
  order: 20,
  titleKey: "preview.components.planningRange",
})

function Demo() {
  const [value, setValue] = React.useState([30, 72])

  return (
    <div className="grid w-full max-w-md gap-4">
      <div className="flex items-center justify-between gap-4">
        <span className="font-black">Sprint focus window</span>
        <Tag color="info" rounded="pill">
          {value[0]}-{value[1]}%
        </Tag>
      </div>
      <Slider
        max={100}
        min={0}
        onValueChange={setValue}
        step={1}
        tone="info"
        value={value}
      />
    </div>
  )
}

export { Demo, meta }
