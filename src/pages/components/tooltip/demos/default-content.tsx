import { Button, Tooltip } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.defaultContent",
  descriptionKey:
    "preview.components.tooltipDefaultContentShowsMdDefaultToneAlongsideExplicitArrowAndOffsetProps",
})

function Demo() {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button variant="outlined">Hover default tooltip</Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          showArrow={true}
          sideOffset={8}
          size="md"
          tone="default"
        >
          Default tone, medium size, and the standard arrow are all explicit.
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}

export { Demo, meta }
