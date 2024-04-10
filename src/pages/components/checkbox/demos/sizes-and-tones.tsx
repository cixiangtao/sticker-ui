import { Checkbox, Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes align checkbox controls with compact lists, standard forms, and roomy settings while tone keeps semantic context visible.",
  order: 20,
  title: "Sizes & Tones",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox defaultChecked id="checkbox-size-small" size="sm" />
        <Label htmlFor="checkbox-size-small" size="sm">
          Small checklist
        </Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked
          id="checkbox-size-medium"
          tone="secondary"
          variant="filled"
        />
        <Label htmlFor="checkbox-size-medium">Standard review</Label>
      </div>
      <div className="flex items-center gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Checkbox
          defaultChecked="indeterminate"
          id="checkbox-size-large"
          size="lg"
          tone="warning"
        />
        <Label htmlFor="checkbox-size-large" size="lg">
          Roomy mixed state
        </Label>
      </div>
    </div>
  )
}

export { Demo }
export default meta
