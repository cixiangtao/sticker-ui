import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 10,
  descriptionKey:
    "preview.components.popoverHostsCompactInteractiveContentSuchAsQuickSettingsFiltersAndContextualActions",
  titleKey: "preview.components.quickPanel",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="secondary">
          {tm("preview.components.openSettings")}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">
              {tm("preview.components.boardSettings")}
            </h3>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              {tm(
                "preview.components.tuneThePreviewWithoutLeavingTheCurrentSurface",
              )}
            </p>
          </div>
          <label className="flex items-center justify-between gap-4 rounded-sticker-lg border border-ink bg-surface px-3 py-2">
            <span className="text-sm font-bold">
              {tm("preview.components.showHelperNotes")}
            </span>
            <Switch defaultChecked size="sm" />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Demo, meta }
