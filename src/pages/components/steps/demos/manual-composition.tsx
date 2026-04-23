import { Steps, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.stepsManualCompositionKeepsCustomStepContentInsideTheSameOrderedList",
  order: 30,
  titleKey: "preview.components.manualComposition",
})

function Demo() {
  return (
    <Steps className="w-full max-w-3xl" orientation="horizontal">
      <Steps.Item index={1} status="complete">
        <span className="grid gap-1">
          <span className="text-sm font-black">Install</span>
          <Tag color="success" rounded="pill" size="sm">
            Done
          </Tag>
        </span>
      </Steps.Item>
      <Steps.Item index={2} status="current">
        <span className="grid gap-1">
          <span className="text-sm font-black">Configure</span>
          <span className="text-sm font-bold text-su-fg-muted">
            Choose registry components.
          </span>
        </span>
      </Steps.Item>
      <Steps.Item description="Ship the preview." index={3} title="Publish" />
    </Steps>
  )
}

export { Demo, meta }
