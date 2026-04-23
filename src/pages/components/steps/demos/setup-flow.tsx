import { Steps } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.setupFlow",
  descriptionKey:
    "preview.components.stepsCanRenderFromItemDataForSimpleOnboardingAndCheckoutFlows",
})

function Demo() {
  return (
    <Steps
      current={1}
      items={[
        {
          description: "Install package and tokens.",
          title: "Install",
        },
        {
          description: "Add registry components.",
          title: "Compose",
        },
        {
          description: "Run preview and release checks.",
          title: "Verify",
        },
      ]}
    />
  )
}

export { Demo, meta }
