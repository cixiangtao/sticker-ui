import * as React from "react"
import { Label, LabelDescription, Textarea } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 40,
  titleKey: "preview.components.changeHandler",
  descriptionKey:
    "preview.components.textareaMirrorsInputByPassingTheNextStringValueToOnchangeBeforeTheNativeEvent",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [value, setValue] = React.useState(
    tm("preview.components.controlledDraftNotes"),
  )

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="textarea-change-handler">
        {tm("preview.components.controlledNotes")}
      </Label>
      <Textarea
        id="textarea-change-handler"
        onChange={setValue}
        placeholder={tm("preview.components.writeControlledNotes")}
        value={value}
      />
      <LabelDescription>
        {value.length}
        {tm("preview.components.characters")}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
