import { Field, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignSwitchesWithCompactToolbarsStandardSettingsAndRoomyPreferencePanelsWhileToneKeepsStateContextVisible",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        classNames={{ body: "order-1 flex-1", control: "order-2" }}
        label="Small Toggle"
        layout="inline"
        size="sm"
      >
        <Switch defaultChecked size="sm" />
      </Field>
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        classNames={{ body: "order-1 flex-1", control: "order-2" }}
        label="Standard Sync"
        layout="inline"
      >
        <Switch defaultChecked tone="secondary" variant="filled" />
      </Field>
      <Field
        className="rounded-sticker-xl border border-ink bg-white/80 p-4"
        classNames={{ body: "order-1 flex-1", control: "order-2" }}
        label="Roomy Alerts"
        layout="inline"
        size="lg"
      >
        <Switch defaultChecked size="lg" tone="success" variant="filled" />
      </Field>
    </div>
  )
}

export { Demo, meta }
