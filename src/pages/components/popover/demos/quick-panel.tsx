import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Popover hosts compact interactive content such as quick settings, filters, and contextual actions.",
  order: 10,
  title: "Quick Panel",
})

function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="secondary">Open settings</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">
              Board settings
            </h3>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              Tune the preview without leaving the current surface.
            </p>
          </div>
          <label className="flex items-center justify-between gap-4 rounded-sticker-lg border border-ink bg-surface px-3 py-2">
            <span className="text-sm font-bold">Show helper notes</span>
            <Switch defaultChecked size="sm" />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Demo, meta }
