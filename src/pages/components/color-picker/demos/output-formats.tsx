import * as React from "react"
import { Card, ColorPicker, Field, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const outputFormats = [
  ["auto", "hsl(174 72% 42%)"],
  ["hex", "#22c55e"],
  ["rgb", "rgb(249 115 22)"],
  ["hsl", "hsl(199 89% 48%)"],
  ["hwb", "hwb(262 27% 11%)"],
  ["lab", "lab(62% -35 42)"],
  ["lch", "lch(70% 68 145)"],
  ["oklab", "oklab(0.72 -0.12 0.08)"],
  ["oklch", "oklch(0.7 0.18 145)"],
  ["p3", "color(display-p3 0.2 0.7 0.45)"],
] as const

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.outputFormats",
  descriptionKey:
    "preview.components.colorpickerOutputFormatAndShowValueExamplesCoverCompactSwatchesAndCssColorSerialization",
})

function Demo() {
  const [lastValue, setLastValue] = React.useState("Change any swatch")

  return (
    <Card className="max-w-4xl">
      <Card.Header className="grid-cols-[1fr_auto] items-center gap-3">
        <Card.Title>Output formats</Card.Title>
        <Tag color="secondary" size="sm" variant="outlined">
          {lastValue}
        </Tag>
      </Card.Header>
      <Card.Content className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {outputFormats.map(([outputFormat, value]) => (
          <Field
            description={`Changes serialize as ${outputFormat}.`}
            key={outputFormat}
            label={outputFormat}
            size="sm"
          >
            <ColorPicker
              defaultValue={value}
              onChange={setLastValue}
              outputFormat={outputFormat}
              showValue={outputFormat !== "p3"}
              size="sm"
            />
          </Field>
        ))}
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
