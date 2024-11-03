import * as React from "react"
import { Input, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-success",
  order: 40,
  titleKey: "preview.components.changeHandler",
  descriptionKey:
    "preview.components.onchangeReceivesTheNextStringValueFirstSoControlledFieldsDoNotNeedToReadEventCurrenttargetValue",
})

function Demo() {
  const [value, setValue] = React.useState("Sticker notes")

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-change-handler">Controlled Title</Label>
      <Input
        id="input-change-handler"
        onChange={setValue}
        placeholder="Type A Title"
        value={value}
      />
      <LabelDescription>Current value: {value || "Empty"}</LabelDescription>
    </div>
  )
}

export { Demo, meta }
