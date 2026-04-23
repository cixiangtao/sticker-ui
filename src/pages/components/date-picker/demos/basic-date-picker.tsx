import * as React from "react"
import { DatePicker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicDatePicker",
  descriptionKey:
    "preview.components.datePickerCombinesButtonPopoverAndCalendarForCompactFormUse",
})

function Demo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 6, 8))

  return <DatePicker onChange={setDate} value={date} />
}

export { Demo, meta }
