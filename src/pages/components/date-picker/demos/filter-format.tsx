import * as React from "react"
import { DatePicker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.filterFormat",
  descriptionKey:
    "preview.components.datePickerSupportsCustomTriggerFormattingAndCalendarRules",
})

function Demo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <DatePicker
      calendarProps={{
        defaultMonth: new Date(2026, 6, 1),
        disabledDate: (day) => day < new Date(2026, 6, 8),
        tone: "secondary",
      }}
      formatDate={(day) => `Due ${day.toLocaleDateString("en-US")}`}
      onChange={setDate}
      placeholder="Pick due date"
      value={date}
    />
  )
}

export { Demo, meta }
