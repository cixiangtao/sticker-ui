import * as React from "react"
import {
  Field,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 40,
  titleKey: "preview.components.a11yAndChange",
  descriptionKey:
    "preview.components.idAriaDescribedbyAriaInvalidOnchangeAndOnvaluechangeAreForwardedToTheTriggerAndValueCallbacks",
})

function Demo() {
  const [value, setValue] = React.useState("preview")

  return (
    <div className="grid max-w-xl gap-3">
      <Field description={`Selected area: ${value}`} label="Delivery Area">
        <Select
          aria-invalid={value === "blocked"}
          onChange={setValue}
          onValueChange={setValue}
          value={value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose An Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preview">Preview Demos</SelectItem>
            <SelectItem value="docs">API Docs</SelectItem>
            <SelectItem value="blocked">Blocked State</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}

export { Demo, meta }
