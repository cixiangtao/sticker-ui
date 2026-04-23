import { ToggleGroup } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.toggleGroupSupportsSingleChoiceAndMultipleSelectionPatterns",
  order: 20,
  titleKey: "preview.components.singleAndMultiple",
})

function Demo() {
  return (
    <div className="grid gap-5">
      <ToggleGroup defaultValue="center" type="single">
        <ToggleGroup.Item aria-label="Left" value="left">
          Left
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Center" value="center">
          Center
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Right" value="right">
          Right
        </ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup
        defaultValue={["bold", "code"]}
        tone="secondary"
        type="multiple"
      >
        <ToggleGroup.Item aria-label="Bold" value="bold">
          B
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Italic" value="italic">
          I
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Code" value="code">
          Code
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}

export { Demo, meta }
