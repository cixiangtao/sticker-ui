import * as React from "react"
import { Input, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  description:
    "onChange receives the next string value first, so controlled fields do not need to read event.currentTarget.value.",
  order: 40,
  title: "Change Handler",
})

function Demo() {
  const [value, setValue] = React.useState("Sticker notes")

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-change-handler">Controlled title</Label>
      <Input
        id="input-change-handler"
        onChange={setValue}
        placeholder="Type a title"
        value={value}
      />
      <LabelDescription>Current value: {value || "Empty"}</LabelDescription>
    </div>
  )
}

export { Demo, meta }
