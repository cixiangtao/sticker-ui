import { Slider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.sliderSupportsRangeThumbsAndVerticalOrientationFromRadix",
  order: 30,
  titleKey: "preview.components.rangeAndVertical",
})

function Demo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center gap-8">
      <div className="grid min-w-64 flex-1 gap-3">
        <Tag color="info" rounded="pill">
          Range
        </Tag>
        <Slider
          defaultValue={[25, 70]}
          min={0}
          max={100}
          step={5}
          tone="info"
        />
      </div>
      <div className="grid justify-items-center gap-3">
        <Tag color="warning" rounded="pill">
          Vertical
        </Tag>
        <Slider
          defaultValue={[60]}
          max={100}
          orientation="vertical"
          tone="warning"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
