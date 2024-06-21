import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Tooltip adds a compact paper hint for controls that need extra context without taking over the page.",
  order: 10,
  title: "Basic Help",
})

function Demo() {
  return (
    <TooltipProvider>
      <div className="w-fit">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outlined">Hover for note</Button>
          </TooltipTrigger>
          <TooltipContent>
            Keep tooltip copy short, specific, and connected to one visible
            control.
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export { Demo, meta }
