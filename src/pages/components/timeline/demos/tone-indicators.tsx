import { Timeline } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.timelineIndicatorTonesMakeMixedActivityStatesReadable",
  order: 30,
  titleKey: "preview.components.toneIndicators",
})

const events = [
  {
    description: "Registry item generated.",
    marker: "1",
    title: "Created",
    tone: "success",
  },
  {
    description: "Preview examples need another pass.",
    marker: "2",
    title: "Review",
    tone: "warning",
  },
  {
    description: "API table is ready.",
    marker: "3",
    title: "Docs",
    tone: "info",
  },
] as const

function Demo() {
  return (
    <Timeline className="w-full max-w-xl">
      {events.map((event, index) => (
        <Timeline.Item key={event.title} last={index === events.length - 1}>
          <Timeline.Indicator tone={event.tone}>
            {event.marker}
          </Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Title>{event.title}</Timeline.Title>
            <Timeline.Description>{event.description}</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export { Demo, meta }
