import * as React from "react"
import { Label, RadioGroup, RadioGroupItem } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "onValueChange follows Radix naming, while onChange mirrors the form-friendly value callback.",
  order: 40,
  title: "Change Handlers",
  titleKey: "preview.components.changeHandlers",
  descriptionKey:
    "preview.components.onvaluechangeFollowsRadixNamingWhileOnchangeMirrorsTheFormFriendlyValueCallback",
})

function Demo() {
  const { tm } = usePreviewI18n()
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
        {tm("preview.components.selected")}
        {value} / {lastEvent}
      </div>
    </div>
  )
}

export { Demo, meta }
