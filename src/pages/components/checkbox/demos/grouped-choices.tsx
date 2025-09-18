import * as React from "react"
import { Checkbox, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.groupedChoices",
  descriptionKey:
    "preview.components.checkboxGroupManagesMultipleSelectedValuesWhileSharingSizeToneVariantAndDisabledState",
})

const deliveryOptions = [
  { label: "Release Notes", value: "release-notes" },
  { label: "Security Alerts", value: "security-alerts" },
  { label: "Design Updates", value: "design-updates" },
]

function Demo() {
  const [value, setValue] = React.useState(["release-notes", "security-alerts"])

  return (
    <div className="grid max-w-xl gap-4 rounded-su-xl border border-su-ink bg-white/80 p-4">
      <Checkbox.Group
        description="Choose every update stream this workspace should receive."
        label="Notification Streams"
        name="notifications"
        onValueChange={setValue}
        tone="secondary"
        value={value}
        variant="filled"
      >
        {deliveryOptions.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Checkbox.Group>
      <div className="flex flex-wrap items-center gap-2">
        <Tag color="secondary" size="sm">
          {value.length} selected
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
