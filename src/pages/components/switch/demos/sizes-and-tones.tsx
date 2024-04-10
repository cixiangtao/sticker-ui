import { Label, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes align switches with compact toolbars, standard settings, and roomy preference panels while tone keeps state context visible.",
  order: 20,
  title: "Sizes & Tones",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-small" size="sm">
          Small toggle
        </Label>
        <Switch defaultChecked id="switch-size-small" size="sm" />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-medium">Standard sync</Label>
        <Switch
          defaultChecked
          id="switch-size-medium"
          tone="secondary"
          variant="filled"
        />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-large" size="lg">
          Roomy alerts
        </Label>
        <Switch
          defaultChecked
          id="switch-size-large"
          size="lg"
          tone="success"
          variant="filled"
        />
      </div>
    </div>
  )
}

export { Demo }
export default meta
