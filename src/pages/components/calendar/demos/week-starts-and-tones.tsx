import { Calendar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.calendarWeekStartsAndTonesAdaptTheGridForRegionalAndPanelContext",
  order: 30,
  titleKey: "preview.components.weekStartsAndTones",
})

const demoMonth = new Date(2026, 6, 1)

function Demo() {
  return (
    <div className="grid w-full max-w-3xl gap-4 md:grid-cols-2">
      <Calendar
        defaultMonth={demoMonth}
        size="sm"
        tone="info"
        value={new Date(2026, 6, 8)}
        weekStartsOn={1}
      />
      <Calendar
        defaultMonth={demoMonth}
        size="sm"
        tone="secondary"
        value={new Date(2026, 6, 14)}
        weekStartsOn={6}
      />
    </div>
  )
}

export { Demo, meta }
