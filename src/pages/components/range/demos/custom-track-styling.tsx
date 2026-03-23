import * as React from "react"
import { Card, Field, Range, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.customTrackStyling",
  descriptionKey:
    "preview.components.rangeStyleClassnameAndFormattedValuesCanCustomizeTrackTokensWithoutReplacingNativeInputBehavior",
})

function Demo() {
  const [value, setValue] = React.useState(35)

  return (
    <Card className="max-w-2xl" variant="panel">
      <Card.Header className="grid-cols-[1fr_auto] items-center gap-3">
        <Card.Title>Custom range tokens</Card.Title>
        <Tag color="secondary" rounded="pill">
          {value} points
        </Tag>
      </Card.Header>
      <Card.Content>
        <Field
          description="The wrapper style can override range CSS variables while the input stays native."
          label="Review weight"
        >
          <Range
            className="rounded-su-xl border border-su-ink bg-su-surface p-4"
            formatValue={(nextValue) => `${nextValue} pt`}
            max={50}
            min={10}
            onChange={setValue}
            showValue
            step={5}
            style={
              {
                "--range-fill": "var(--color-su-fill-secondary-strong)",
                "--range-track": "var(--color-su-paper)",
              } as React.CSSProperties
            }
            value={value}
          />
        </Field>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
