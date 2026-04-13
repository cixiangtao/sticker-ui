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
    <div className="grid max-w-3xl gap-4">
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
        <Accordion.Item tone="warning" value="warning" variant="filled">
          <Accordion.Trigger className="uppercase" size="lg" variant="filled">
            Warning filled item
          </Accordion.Trigger>
          <Accordion.Content size="lg">
            Large filled triggers are useful for high-emphasis disclosures.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultValue="info" tone="info" type="single">
        <Accordion.Item tone="info" value="info" variant="filled">
          <Accordion.Trigger variant="filled">Info filled</Accordion.Trigger>
          <Accordion.Content>Info root tone.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultValue="secondary" tone="secondary" type="single">
        <Accordion.Item tone="secondary" value="secondary" variant="solid">
          <Accordion.Trigger>Secondary solid</Accordion.Trigger>
          <Accordion.Content>Secondary root tone.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultValue="success" tone="success" type="single">
        <Accordion.Item tone="success" value="success">
          <Accordion.Trigger>Success item</Accordion.Trigger>
          <Accordion.Content>Success root tone.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultValue="default" tone="default" type="single">
        <Accordion.Item value="default">
          <Accordion.Trigger>Default root tone</Accordion.Trigger>
          <Accordion.Content>Default root tone.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export { Demo, meta }
