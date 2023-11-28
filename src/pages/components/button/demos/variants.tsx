import { Button } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#EAF7FF]",
  description:
    "Variants define structure while color sets the sticker paper tone.",
  title: "Variants",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Solid</Button>
      <Button color="info" variant="outlined">
        Outlined
      </Button>
      <Button color="warning" variant="dashed">
        Dashed
      </Button>
      <Button color="success" variant="filled">
        Filled
      </Button>
      <Button color="danger" variant="text">
        Text
      </Button>
      <Button color="secondary" variant="link">
        Link
      </Button>
    </div>
  )
}

export { Demo }
export default meta
