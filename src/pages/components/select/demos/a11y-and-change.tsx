import * as React from "react"
import { Field, Select } from "sticker-ui"

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
          aria-describedby="delivery-area-help"
          aria-invalid={value === "blocked"}
          id="delivery-area-select"
          onChange={setValue}
          onValueChange={setValue}
          value={value}
        >
          <Select.Trigger>
            <Select.Value placeholder="Choose An Area" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="preview">Preview Demos</Select.Item>
            <Select.Item value="docs">API Docs</Select.Item>
            <Select.Item value="blocked">Blocked State</Select.Item>
          </Select.Content>
        </Select>
      </Field>
      <p
        className="m-0 text-xs leading-5 font-bold text-su-fg-muted"
        id="delivery-area-help"
      >
        The root id and aria-describedby props are forwarded to the trigger.
      </p>
    </div>
  )
}

export { Demo, meta }
