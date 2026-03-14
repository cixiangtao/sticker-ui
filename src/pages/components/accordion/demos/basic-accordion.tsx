import { Accordion, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicAccordion",
  descriptionKey:
    "preview.components.accordionKeepsRadixDisclosureSemanticsInsideCompactStickerSections",
})

function Demo() {
  return (
    <Accordion
      className="max-w-2xl"
      collapsible
      defaultValue="registry"
      type="single"
    >
      <Accordion.Item value="registry">
        <Accordion.Header>
          <Accordion.Trigger>Registry delivery</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          <div className="grid gap-2">
            <Tag rounded="pill" size="sm">
              Source first
            </Tag>
            <p className="m-0">
              Keep the canonical component source in{" "}
              <code>src/components/ui</code>, then generate shadcn-compatible
              registry JSON from that source.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="preview">
        <Accordion.Header>
          <Accordion.Trigger>Preview coverage</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Component pages should show realistic states, copyable source, and the
          generated API table in one place.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="docs">
        <Accordion.Header>
          <Accordion.Trigger>API docs</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          TSDoc comments become the generated reference, while translated
          preview metadata stays in the i18n dictionaries.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}

export { Demo, meta }
