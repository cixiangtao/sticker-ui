import * as React from "react"
import { Checkbox, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const choices = [
  { label: "API table", value: "api" },
  { label: "Usage states", value: "states" },
  { label: "Source preview", value: "source" },
]

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 50,
  titleKey: "preview.components.groupDefaults",
  descriptionKey:
    "preview.components.checkboxGroupDefaultValueDirectionAndOnchangeMirrorOnvaluechangeForFormFriendlyArrays",
})

function Demo() {
  const [value, setValue] = React.useState(["api"])

  return (
    <div className="grid max-w-2xl gap-4 rounded-su-xl border border-su-ink bg-white/80 p-4">
      <Checkbox.Group
        className="rounded-su-xl border border-su-ink bg-su-surface p-3"
        defaultValue={["api", "source"]}
        description="Horizontal groups work well for compact settings rows."
        direction="horizontal"
        label="Demo checklist"
        name="demo-checklist"
        onChange={setValue}
        size="sm"
        tone="success"
        variant="filled"
      >
        {choices.map((choice) => (
          <Checkbox
            className="data-[state=checked]:bg-su-fill-success"
            key={choice.value}
            label={choice.label}
            value={choice.value}
          />
        ))}
      </Checkbox.Group>
      <div className="flex flex-wrap gap-2">
        <Tag color="success" size="sm">
          onChange: {value.length || "0"} selected
        </Tag>
        {value.map((item) => (
          <Tag key={item} size="sm" variant="outlined">
            {item}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export { Demo, meta }
