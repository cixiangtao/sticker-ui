import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Tone and side options keep hint bubbles useful in dense toolbars and status rows.",
  order: 20,
  title: "Tones & Sides",
})

function Demo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="info" variant="outlined">
              Info
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" tone="info">
            Explains a field without interrupting the current task.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="success" variant="outlined">
              Ready
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" tone="success">
            Shows why this action is available.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="warning" variant="outlined">
              Watch
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" tone="warning">
            Warns about a small constraint before clicking.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
