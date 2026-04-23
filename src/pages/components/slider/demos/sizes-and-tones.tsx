import { Slider, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.sliderSizesAndTonesMatchCompactFiltersAndLouderStatusControls",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
})

const sliders: Array<{
  label: string
  size: "lg" | "md" | "sm"
  tone: "info" | "secondary" | "warning"
  value: number[]
}> = [
  { label: "Small", size: "sm", tone: "secondary", value: [20] },
  { label: "Medium", size: "md", tone: "info", value: [55] },
  { label: "Large", size: "lg", tone: "warning", value: [80] },
]

function Demo() {
  return (
    <div className="grid w-full max-w-xl gap-5">
      {sliders.map((item) => (
        <div className="grid gap-2" key={item.label}>
          <Tag rounded="pill" size="sm">
            {item.label}
          </Tag>
          <Slider defaultValue={item.value} size={item.size} tone={item.tone} />
        </div>
      ))}
    </div>
  )
}

export { Demo, meta }
