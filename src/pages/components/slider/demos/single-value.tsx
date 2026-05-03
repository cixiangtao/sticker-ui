import * as React from "react"
import { Field, Progress, Slider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.sliderReportsNumericValuesForSingleThumbSettings",
  order: 10,
  titleKey: "preview.components.singleValue",
})

function Demo() {
  const [volume, setVolume] = React.useState(64)

  return (
    <div className="grid max-w-xl gap-4">
      <Field description={`Current volume: ${volume}%`} label="Desk Speaker">
        <Slider max={100} min={0} onChange={setVolume} value={volume} />
      </Field>
      <div className="grid gap-3 rounded-su-xl border-2 border-su-ink bg-su-paper p-4 shadow-su-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Tag color={volume > 70 ? "warning" : "info"} dot>
            Live Level
          </Tag>
          <span className="text-sm font-black text-su-ink">{volume}%</span>
        </div>
        <Progress showValue tone="info" value={volume} />
      </div>
    </div>
  )
}

export { Demo, meta }
