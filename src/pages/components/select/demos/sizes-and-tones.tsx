import {
  Field,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignSelectsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Small Filter" size="sm">
          <Select defaultValue="open" size="sm">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="ready">Ready</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Standard Plan">
          <Select defaultValue="weekly" tone="secondary" variant="filled">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily Check</SelectItem>
              <SelectItem value="weekly">Weekly Review</SelectItem>
              <SelectItem value="monthly">Monthly Map</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Roomy Priority" size="lg">
          <Select defaultValue="high" size="lg" tone="success" variant="filled">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low Touch</SelectItem>
              <SelectItem value="normal">Normal Pass</SelectItem>
              <SelectItem value="high">High Focus</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
