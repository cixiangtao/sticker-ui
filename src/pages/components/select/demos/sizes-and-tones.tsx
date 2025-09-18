import { Field, Select } from "sticker-ui"

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
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="open">Open</Select.Item>
              <Select.Item value="ready">Ready</Select.Item>
              <Select.Item value="archived">Archived</Select.Item>
            </Select.Content>
          </Select>
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Standard Plan">
          <Select defaultValue="weekly" tone="secondary" variant="filled">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="daily">Daily Check</Select.Item>
              <Select.Item value="weekly">Weekly Review</Select.Item>
              <Select.Item value="monthly">Monthly Map</Select.Item>
            </Select.Content>
          </Select>
        </Field>
      </div>
      <div className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-4">
        <Field label="Roomy Priority" size="lg">
          <Select defaultValue="high" size="lg" tone="success" variant="filled">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="low">Low Touch</Select.Item>
              <Select.Item value="normal">Normal Pass</Select.Item>
              <Select.Item value="high">High Focus</Select.Item>
            </Select.Content>
          </Select>
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
