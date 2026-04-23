import * as React from "react"
import { Calendar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicMonth",
  descriptionKey:
    "preview.components.calendarRendersASingleMonthGridWithKeyboardFocusableDayButtons",
})

function Demo() {
  const [date, setDate] = React.useState(new Date(2026, 6, 8))

  return (
    <Calendar
      className="max-w-sm"
      defaultMonth={new Date(2026, 6, 1)}
      onSelect={setDate}
      value={date}
    />
  )
}

export { Demo, meta }
