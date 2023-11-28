import { Button } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#FFF6DC]",
  description:
    "Size choices are constrained so icon, short text, and long commands still read as one family.",
  title: "Sizes",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large Action</Button>
      <Button aria-label="Add component" size="icon">
        +
      </Button>
    </div>
  )
}

export { Demo }
export default meta
