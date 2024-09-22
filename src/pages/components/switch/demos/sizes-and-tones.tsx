import { Label, Switch } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignSwitchesWithCompactToolbarsStandardSettingsAndRoomyPreferencePanelsWhileToneKeepsStateContextVisible",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-small" size="sm">
          {tm("preview.components.smallToggle")}
        </Label>
        <Switch defaultChecked id="switch-size-small" size="sm" />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-medium">
          {tm("preview.components.standardSync")}
        </Label>
        <Switch
          defaultChecked
          id="switch-size-medium"
          tone="secondary"
          variant="filled"
        />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="switch-size-large" size="lg">
          {tm("preview.components.roomyAlerts")}
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

export { Demo, meta }
