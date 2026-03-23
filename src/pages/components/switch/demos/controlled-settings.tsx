import * as React from "react"
import { Card, Switch, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 40,
  titleKey: "preview.components.controlledSettings",
  descriptionKey:
    "preview.components.switchClassnameControlledCheckedAndOncheckedchangeSupportCustomSettingsRows",
})

function Demo() {
  const [checked, setChecked] = React.useState(true)

  return (
    <Card className="max-w-xl" variant="panel">
      <Card.Header className="grid-cols-[1fr_auto] items-center gap-3">
        <Card.Title>Release automation</Card.Title>
        <Tag color={checked ? "success" : "warning"} rounded="pill" size="sm">
          {checked ? "Enabled" : "Paused"}
        </Tag>
      </Card.Header>
      <Card.Content className="flex items-center justify-between gap-4 rounded-su-xl border border-su-ink bg-su-surface p-4">
        <div className="grid gap-1">
          <span className="text-sm font-black">Auto-run preview checks</span>
          <span className="text-xs leading-5 font-bold text-su-fg-muted">
            Controlled checked state updates the status chip immediately.
          </span>
        </div>
        <Switch
          checked={checked}
          className="data-[state=checked]:shadow-su-lg"
          onCheckedChange={setChecked}
          size="lg"
          tone="success"
          variant="filled"
        />
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
