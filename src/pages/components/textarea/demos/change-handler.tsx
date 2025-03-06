import * as React from "react"
import { Field, Textarea } from "sticker-ui"

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
      <Field
        description={`${value.length} characters`}
        label="Controlled Notes"
      >
        <Textarea
          onChange={setValue}
          placeholder="Write Controlled Notes"
          value={value}
        />
      </Field>
    </div>
  )
}

export { Demo, meta }
