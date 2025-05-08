import * as React from "react"
import { RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.changeHandlers",
  descriptionKey:
    "preview.components.onvaluechangeFollowsRadixNamingWhileOnchangeMirrorsTheFormFriendlyValueCallback",
})

function Demo() {
  const [value, setValue] = React.useState("preview")
  const [lastEvent, setLastEvent] = React.useState("onChange: preview")

  return (
    <div className="grid max-w-xl gap-4">
      <RadioGroup
        onChange={(nextValue) => {
          setLastEvent(`onChange: ${nextValue}`)
        }}
        onValueChange={setValue}
        value={value}
      >
        {[
          ["preview", "Preview demos"],
          ["docs", "API docs"],
          ["registry", "Registry JSON"],
        ].map(([itemValue, label]) => (
          <RadioGroupItem key={itemValue} label={label} value={itemValue} />
        ))}
      </RadioGroup>
      <div className="rounded-su-lg border border-su-ink bg-su-surface px-3 py-2 text-sm font-extrabold">
        Selected: {value} / {lastEvent}
      </div>
    </div>
  )
}

export { Demo, meta }
