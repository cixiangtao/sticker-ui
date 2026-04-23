import * as React from "react"
import { DatePicker, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.datePickerPassesCalendarPropsThroughForDisabledDatesAndPanelTone",
  order: 30,
  titleKey: "preview.components.disabledAndCalendarProps",
})

function Demo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 6, 8))

  return (
    <div className="flex flex-wrap items-center gap-3">
      <DatePicker
        calendarProps={{
          disabledDate: (nextDate) => nextDate.getDay() === 0,
          tone: "secondary",
          weekStartsOn: 1,
        }}
        onChange={setDate}
        value={date}
      />
      <DatePicker disabled placeholder="Disabled picker" />
      <Tag rounded="pill">{date?.toDateString() ?? "No date"}</Tag>
    </div>
  )
}

export { Demo, meta }
