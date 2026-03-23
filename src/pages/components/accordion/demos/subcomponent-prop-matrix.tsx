import { Accordion } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.subcomponentPropMatrix",
  descriptionKey:
    "preview.components.accordionSubcomponentPropMatrixCoversDangerToneSolidVariantAndMediumOverrides",
})

function Demo() {
  return (
    <Accordion
      className="max-w-2xl"
      defaultValue="danger"
      size="md"
      tone="danger"
      type="single"
      variant="solid"
    >
      <Accordion.Item
        className="bg-su-surface"
        tone="danger"
        value="danger"
        variant="solid"
      >
        <Accordion.Trigger size="md" variant="solid">
          Danger solid item
        </Accordion.Trigger>
        <Accordion.Content className="font-medium" size="md">
          Root, item, trigger, and content all show their medium or solid
          override props explicitly.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item tone="default" value="default" variant="minimal">
        <Accordion.Trigger size="sm" variant="minimal">
          Default minimal item
        </Accordion.Trigger>
        <Accordion.Content size="sm">
          Subcomponents can diverge from the root when needed.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}

export { Demo, meta }
