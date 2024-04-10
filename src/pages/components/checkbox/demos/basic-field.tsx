import { Checkbox, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Checkbox keeps Radix keyboard behavior while adding a chunky sticker square, hard shadow, and clear checked mark.",
  order: 10,
  title: "Basic Field",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <div className="flex items-start gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked id="checkbox-launch-notes" />
        <div className="grid gap-1">
          <Label htmlFor="checkbox-launch-notes">Publish launch notes</Label>
          <LabelDescription>
            Pair Checkbox with Label when a single option needs accessible copy
            and helper text.
          </LabelDescription>
        </div>
      </div>
    </div>
  )
}

export { Demo }
export default meta
