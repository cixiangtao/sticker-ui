import * as React from "react"
import { InputOtp, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.inputOtpCanStayControlledForValidationAndSubmitState",
  order: 30,
  titleKey: "preview.components.controlledOtp",
})

function Demo() {
  const [value, setValue] = React.useState("42")

  return (
    <div className="grid gap-3">
      <InputOtp maxLength={4} onChange={setValue} value={value}>
        <InputOtp.Group>
          <InputOtp.Slot index={0} />
          <InputOtp.Slot index={1} />
          <InputOtp.Slot index={2} />
          <InputOtp.Slot index={3} />
        </InputOtp.Group>
      </InputOtp>
      <Tag color={value.length === 4 ? "success" : "warning"} rounded="pill">
        {value.length}/4 digits
      </Tag>
    </div>
  )
}

export { Demo, meta }
