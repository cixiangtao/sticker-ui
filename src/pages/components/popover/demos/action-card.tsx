import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  description:
    "Close can wrap a sticker button so short popover workflows can finish from inside the panel.",
  order: 20,
  title: "Action Card",
})

function Demo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button color="success" variant="outlined">
          Review draft
        </Button>
      </PopoverTrigger>
      <PopoverContent showArrow size="sm" tone="success">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <h3 className="m-0 text-base leading-6 font-black">Draft ready</h3>
            <p className="m-0 text-sm leading-6 font-medium text-text-muted">
              The component page has demos, API docs, and translated preview
              copy.
            </p>
          </div>
          <PopoverClose asChild>
            <Button color="success" size="sm">
              Looks good
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Demo, meta }
