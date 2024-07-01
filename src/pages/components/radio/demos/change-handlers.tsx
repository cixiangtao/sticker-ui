import * as React from "react"
import { Label, RadioGroup, RadioGroupItem } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "onValueChange follows Radix naming, while onChange mirrors the form-friendly value callback.",
  order: 40,
  title: "Change Handlers",
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
          <div className="flex items-center gap-3" key={itemValue}>
            <RadioGroupItem
              id={`radio-change-${itemValue}`}
              value={itemValue}
            />
            <Label htmlFor={`radio-change-${itemValue}`}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className="rounded-sticker-lg border border-ink bg-surface px-3 py-2 text-sm font-extrabold">
        Selected: {value} / {lastEvent}
      </div>
    </div>
  )
}

export { Demo, meta }
