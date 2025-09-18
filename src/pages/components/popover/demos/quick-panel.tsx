import { Button, Popover, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 10,
  descriptionKey:
    "preview.components.popoverHostsCompactInteractiveContentSuchAsQuickSettingsFiltersAndContextualActions",
  titleKey: "preview.components.quickPanel",
})

function Demo() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button color="secondary">Open Settings</Button>
      </Popover.Trigger>
      <Popover.Content align="start">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">
              Board Settings
            </h3>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              Tune the preview without leaving the current surface.
            </p>
          </div>
          <label className="flex items-center justify-between gap-4 rounded-su-lg border border-su-ink bg-su-surface px-3 py-2">
            <span className="text-sm font-bold">Show Helper Notes</span>
            <Switch defaultChecked size="sm" />
          </label>
        </div>
      </Popover.Content>
    </Popover>
  )
}

export { Demo, meta }
