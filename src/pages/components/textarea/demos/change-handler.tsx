import * as React from "react"
import { Label, LabelDescription, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 40,
  titleKey: "preview.components.changeHandler",
  descriptionKey:
    "preview.components.textareaMirrorsInputByPassingTheNextStringValueToOnchangeBeforeTheNativeEvent",
})

function Demo() {
  const [value, setValue] = React.useState("Controlled Draft Notes")

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-change-handler">Controlled Notes</Label>
      <Textarea
        id="textarea-change-handler"
        onChange={setValue}
        placeholder="Write Controlled Notes"
        value={value}
      />
      <LabelDescription>{value.length} characters</LabelDescription>
    </div>
  )
}

export { Demo, meta }
