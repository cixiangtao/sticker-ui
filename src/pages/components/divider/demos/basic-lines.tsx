import { Divider } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Divider keeps the line semantic while variants tune weight and texture for calm section breaks.",
  order: 10,
  title: "Basic Lines",
})

function Demo() {
  return (
    <div className="grid gap-5 rounded-sticker-2xl border-2 border-ink bg-surface p-5 shadow-sticker-lg">
      <Divider decorative={false} />
      <Divider variant="dashed" />
      <Divider tone="info" variant="dotted" />
      <Divider tone="success" weight="lg" />
    </div>
  )
}

export { Demo, meta }
