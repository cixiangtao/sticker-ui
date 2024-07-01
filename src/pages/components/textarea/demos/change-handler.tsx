import * as React from "react"
import { Label, LabelDescription, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Textarea mirrors Input by passing the next string value to onChange before the native event.",
  order: 40,
  title: "Change Handler",
})

function Demo() {
  const [value, setValue] = React.useState(
    "Draft notes stay controlled while keeping native multiline editing.",
  )

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-change-handler">Controlled notes</Label>
      <Textarea
        id="textarea-change-handler"
        onChange={setValue}
        placeholder="Write controlled notes"
        value={value}
      />
      <LabelDescription>{value.length} characters</LabelDescription>
    </div>
  )
}

export { Demo, meta }
