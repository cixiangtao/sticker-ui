import { Steps } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.verticalStatus",
  descriptionKey:
    "preview.components.stepsCanSwitchToVerticalLayoutForNarrowPanelsAndSidebars",
})

function Demo() {
  return (
    <Steps orientation="vertical">
      <Steps.Item
        description="Registry json is updated."
        index={1}
        status="complete"
        title="Source"
      />
      <Steps.Item
        description="Demo pages are being reviewed."
        index={2}
        status="current"
        title="Preview"
      />
      <Steps.Item
        description="Publish after the final dry run."
        index={3}
        status="pending"
        title="Release"
      />
    </Steps>
  )
}

export { Demo, meta }
