import { ToggleGroup } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.toggleGroupSharesSizeToneAndVariantDefaultsWithEveryItem",
  order: 30,
  titleKey: "preview.components.sizesAndVariants",
})

function Demo() {
  return (
    <div className="grid gap-4">
      <ToggleGroup defaultValue="list" size="sm" tone="info" type="single">
        <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
        <ToggleGroup.Item value="list">List</ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup
        defaultValue="week"
        size="lg"
        tone="warning"
        type="single"
        variant="ghost"
      >
        <ToggleGroup.Item value="day">Day</ToggleGroup.Item>
        <ToggleGroup.Item value="week">Week</ToggleGroup.Item>
        <ToggleGroup.Item value="month">Month</ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}

export { Demo, meta }
