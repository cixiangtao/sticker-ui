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
  className: "bg-[#FFF0F4]",
  description:
    "id, aria-describedby, aria-invalid, onChange, and onValueChange are forwarded to the trigger and value callbacks.",
  order: 40,
  title: "A11y & Change",
})

function Demo() {
  const [value, setValue] = React.useState("preview")
  const descriptionId = "select-a11y-change-description"

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="select-a11y-change">Delivery area</Label>
      <Select
        aria-describedby={descriptionId}
        aria-invalid={value === "blocked"}
        id="select-a11y-change"
        onChange={setValue}
        onValueChange={setValue}
        value={value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Choose an area" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="preview">Preview demos</SelectItem>
          <SelectItem value="docs">API docs</SelectItem>
          <SelectItem value="blocked">Blocked state</SelectItem>
        </SelectContent>
      </Select>
      <LabelDescription id={descriptionId}>
        Selected area: {value}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
