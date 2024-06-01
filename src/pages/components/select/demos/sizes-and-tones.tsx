import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes align selects with compact filters, standard forms, and roomy settings panels while tone keeps semantic context visible.",
  order: 20,
  title: "Sizes & Tones",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-small" size="sm">
          Small filter
        </Label>
        <Select defaultValue="open" id="select-size-small" size="sm">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="ready">Ready</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-medium">Standard plan</Label>
        <Select
          defaultValue="weekly"
          id="select-size-medium"
          tone="secondary"
          variant="filled"
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily check</SelectItem>
            <SelectItem value="weekly">Weekly review</SelectItem>
            <SelectItem value="monthly">Monthly map</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-large" size="lg">
          Roomy priority
        </Label>
        <Select
          defaultValue="high"
          id="select-size-large"
          size="lg"
          tone="success"
          variant="filled"
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low touch</SelectItem>
            <SelectItem value="normal">Normal pass</SelectItem>
            <SelectItem value="high">High focus</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { Demo, meta }
