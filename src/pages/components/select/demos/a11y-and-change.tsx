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

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "id, aria-describedby, aria-invalid, onChange, and onValueChange are forwarded to the trigger and value callbacks.",
  order: 40,
  title: "A11y & Change",
  titleKey: "preview.components.a11yAndChange",
  descriptionKey:
    "preview.components.idAriaDescribedbyAriaInvalidOnchangeAndOnvaluechangeAreForwardedToTheTriggerAndValueCallbacks",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [value, setValue] = React.useState("preview")
  const descriptionId = "select-a11y-change-description"

  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="select-a11y-change">
        {tm("preview.components.deliveryArea")}
      </Label>
      <Select
        aria-describedby={descriptionId}
        aria-invalid={value === "blocked"}
        id="select-a11y-change"
        onChange={setValue}
        onValueChange={setValue}
        value={value}
      >
        <SelectTrigger>
          <SelectValue placeholder={tm("preview.components.chooseAnArea")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="preview">
            {tm("preview.components.previewDemos")}
          </SelectItem>
          <SelectItem value="docs">
            {tm("preview.components.apiDocs")}
          </SelectItem>
          <SelectItem value="blocked">
            {tm("preview.components.blockedState")}
          </SelectItem>
        </SelectContent>
      </Select>
      <LabelDescription id={descriptionId}>
        {tm("preview.components.selectedArea")}
        {value}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
