import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizesAlignSelectsWithCompactFiltersStandardFormsAndRoomySettingsPanelsWhileToneKeepsSemanticContextVisible",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-small" size="sm">
          {tm("preview.components.smallFilter")}
        </Label>
        <Select defaultValue="open" id="select-size-small" size="sm">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">
              {tm("preview.components.open")}
            </SelectItem>
            <SelectItem value="ready">
              {tm("preview.components.ready")}
            </SelectItem>
            <SelectItem value="archived">
              {tm("preview.components.archived")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-medium">
          {tm("preview.components.standardPlan")}
        </Label>
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
            <SelectItem value="daily">
              {tm("preview.components.dailyCheck")}
            </SelectItem>
            <SelectItem value="weekly">
              {tm("preview.components.weeklyReview")}
            </SelectItem>
            <SelectItem value="monthly">
              {tm("preview.components.monthlyMap")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="select-size-large" size="lg">
          {tm("preview.components.roomyPriority")}
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
            <SelectItem value="low">
              {tm("preview.components.lowTouch")}
            </SelectItem>
            <SelectItem value="normal">
              {tm("preview.components.normalPass")}
            </SelectItem>
            <SelectItem value="high">
              {tm("preview.components.highFocus")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { Demo, meta }
