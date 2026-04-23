import { Timeline } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.releaseFeed",
  descriptionKey:
    "preview.components.timelineCombinesStatusMarkersTimestampsAndPaperEventCards",
})

function Demo() {
  return (
    <Timeline>
      {[
        [
          "1",
          "Component source added",
          "New UI files landed in src/components/ui.",
          "09:10",
          "success",
        ],
        [
          "2",
          "Registry wired",
          "Each component declares its shadcn dependencies.",
          "09:25",
          "info",
        ],
        [
          "3",
          "Preview audit",
          "Demos and route descriptions are ready for review.",
          "09:40",
          "warning",
        ],
      ].map(([step, title, description, time, tone], index, list) => (
        <Timeline.Item key={step} last={index === list.length - 1}>
          <Timeline.Indicator tone={tone as never}>{step}</Timeline.Indicator>
          <Timeline.Content>
            <Timeline.Time>{time}</Timeline.Time>
            <Timeline.Title>{title}</Timeline.Title>
            <Timeline.Description>{description}</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export { Demo, meta }
