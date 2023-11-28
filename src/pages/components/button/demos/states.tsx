import { Button } from "sticker-ui"

import type { PreviewDemoMeta } from "@/layouts/preview"

const meta = {
  className: "bg-[#FFF0F4]",
  description:
    "Disabled and loading states keep the sticker shape while preventing duplicate actions.",
  title: "States",
} satisfies PreviewDemoMeta

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button color="info" loading variant="outlined">
        Saving
      </Button>
      <Button color="danger" disabled variant="dashed">
        Disabled Danger
      </Button>
    </div>
  )
}

export { Demo }
export default meta
