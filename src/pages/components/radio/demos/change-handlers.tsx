import * as React from "react"
import { Field, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
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
          <Field
            className="items-center"
            controlPlacement="start"
            key={itemValue}
            label={label}
          >
            <RadioGroupItem value={itemValue} />
          </Field>
        ))}
      </RadioGroup>
      <div className="rounded-sticker-lg border border-ink bg-surface px-3 py-2 text-sm font-extrabold">
        Selected: {value} / {lastEvent}
      </div>
    </div>
  )
}

export { Demo, meta }
