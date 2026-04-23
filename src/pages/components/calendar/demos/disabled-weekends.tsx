import * as React from "react"
import { Calendar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.disabledWeekends",
  descriptionKey:
    "preview.components.calendarSupportsDisabledDateRulesAndMondayFirstWeekLayouts",
})

function Demo() {
  const [date, setDate] = React.useState(new Date(2026, 6, 10))

  return (
    <Calendar
      className="max-w-sm"
      defaultMonth={new Date(2026, 6, 1)}
      disabledDate={(day) => day.getDay() === 0 || day.getDay() === 6}
      onSelect={setDate}
      tone="secondary"
      value={date}
      weekStartsOn={1}
    />
  )
}

export { Demo, meta }
