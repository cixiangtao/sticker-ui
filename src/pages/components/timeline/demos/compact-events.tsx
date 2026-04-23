import { Timeline } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.compactEvents",
  descriptionKey:
    "preview.components.timelineDensityCanTightenActivityFeedsWithoutLosingConnectors",
})

function Demo() {
  return (
    <Timeline density="compact">
      <Timeline.Item>
        <Timeline.Indicator tone="secondary">A</Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>API docs generated</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item last>
        <Timeline.Indicator tone="success">B</Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Preview build passed</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}

export { Demo, meta }
