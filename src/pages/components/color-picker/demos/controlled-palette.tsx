import * as React from "react"
import { ColorPicker, Field, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.controlledPalette",
  descriptionKey:
    "preview.components.onchangeReceivesTheNextHexValueFirstSoPaletteStateCanStayControlled",
})

function Demo() {
  const [color, setColor] = React.useState("hsl(174 72% 42%)")

  return (
    <div className="grid max-w-xl gap-4 md:grid-cols-[minmax(0,1fr)_160px]">
      <Field description={`Selected value: ${color}`} label="Notebook Cover">
        <ColorPicker onChange={setColor} value={color} />
      </Field>
      <div
        className="grid min-h-28 place-items-center rounded-su-xl border-2 border-su-ink bg-su-paper p-4 shadow-su-md"
        style={{ backgroundColor: color }}
      >
        <Tag className="bg-su-surface text-xs" variant="outlined">
          Live Swatch
        </Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
