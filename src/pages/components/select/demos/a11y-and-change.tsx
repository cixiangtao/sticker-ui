import * as React from "react"
import {
  Label,
  LabelDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 40,
  titleKey: "preview.components.a11yAndChange",
  descriptionKey:
    "preview.components.idAriaDescribedbyAriaInvalidOnchangeAndOnvaluechangeAreForwardedToTheTriggerAndValueCallbacks",
})

function Demo() {
  const [value, setValue] = React.useState("preview")
  const descriptionId = "select-a11y-change-description"

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="select-a11y-change">Delivery Area</Label>
      <Select
        aria-describedby={descriptionId}
        aria-invalid={value === "blocked"}
        id="select-a11y-change"
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
      <LabelDescription id={descriptionId}>
        Selected area: {value}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
