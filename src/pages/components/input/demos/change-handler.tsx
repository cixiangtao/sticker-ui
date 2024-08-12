import * as React from "react"
import { Input, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  order: 40,
  titleKey: "preview.components.changeHandler",
  descriptionKey:
    "preview.components.onchangeReceivesTheNextStringValueFirstSoControlledFieldsDoNotNeedToReadEventCurrenttargetValue",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [value, setValue] = React.useState("Sticker notes")

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="input-change-handler">
        {tm("preview.components.controlledTitle")}
      </Label>
      <Input
        id="input-change-handler"
        onChange={setValue}
        placeholder={tm("preview.components.typeATitle")}
        value={value}
      />
      <LabelDescription>
        {tm("preview.components.currentValue")}
        {value || "Empty"}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
