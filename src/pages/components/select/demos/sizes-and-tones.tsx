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
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignSelectsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-small" size="sm">
          Small Filter
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
        <Label htmlFor="select-size-medium">Standard Plan</Label>
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
            <SelectItem value="daily">Daily Check</SelectItem>
            <SelectItem value="weekly">Weekly Review</SelectItem>
            <SelectItem value="monthly">Monthly Map</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-large" size="lg">
          Roomy Priority
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
            <SelectItem value="low">Low Touch</SelectItem>
            <SelectItem value="normal">Normal Pass</SelectItem>
            <SelectItem value="high">High Focus</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { Demo, meta }
