import * as React from "react"
import { Field, Input } from "sticker-ui"

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
      <Field
        description={`Current value: ${value || "Empty"}`}
        label="Controlled Title"
      >
        <Input onChange={setValue} placeholder="Type A Title" value={value} />
      </Field>
    </div>
  )
}

export { Demo, meta }
