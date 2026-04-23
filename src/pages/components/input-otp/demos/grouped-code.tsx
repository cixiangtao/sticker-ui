import { InputOtp, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.inputOtpGroupsAndSeparatorsMakeLongCodesEasierToScan",
  order: 20,
  titleKey: "preview.components.groupedCode",
})

function Demo() {
  return (
    <div className="grid gap-3">
      <Tag color="info" rounded="pill">
        Recovery code
      </Tag>
      <InputOtp maxLength={8}>
        <InputOtp.Group>
          <InputOtp.Slot index={0} />
          <InputOtp.Slot index={1} />
          <InputOtp.Slot index={2} />
          <InputOtp.Slot index={3} />
        </InputOtp.Group>
        <InputOtp.Separator />
        <InputOtp.Group>
          <InputOtp.Slot index={4} />
          <InputOtp.Slot index={5} />
          <InputOtp.Slot index={6} />
          <InputOtp.Slot index={7} />
        </InputOtp.Group>
      </InputOtp>
    </div>
  )
}

export { Demo, meta }
