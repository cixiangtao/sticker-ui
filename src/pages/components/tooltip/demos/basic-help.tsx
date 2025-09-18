import { Button, Tooltip } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicHelp",
  descriptionKey:
    "preview.components.tooltipAddsACompactPaperHintForControlsThatNeedExtraContextWithoutTakingOverThePage",
})

function Demo() {
  return (
    <Tooltip.Provider>
      <div className="w-fit">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Hover For Note</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            Keep tooltip copy short specific and connected to one visible
            control.
          </Tooltip.Content>
        </Tooltip>
      </div>
    </Tooltip.Provider>
  )
}

export { Demo, meta }
