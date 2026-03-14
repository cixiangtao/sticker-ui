import { Accordion } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.sizesAndStates",
  descriptionKey:
    "preview.components.sizeToneVariantAndDisabledStateTuneAccordionsForDenseOrExpressiveSurfaces",
})

function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Accordion defaultValue="compact" size="sm" type="single">
        <Accordion.Item value="compact">
          <Accordion.Header>
            <Accordion.Trigger>Compact notes</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Small accordions fit dense sidebars and settings groups.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Accordion
        defaultValue="warning"
        tone="warning"
        type="single"
        variant="filled"
      >
        <Accordion.Item value="warning">
          <Accordion.Header>
            <Accordion.Trigger>Filled warning</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Filled sections pull attention to policy notes or uncommon actions.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultValue="quiet" size="lg" type="single" variant="minimal">
        <Accordion.Item value="quiet">
          <Accordion.Header>
            <Accordion.Trigger>Minimal frame</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Minimal accordions sit quietly inside an already framed card.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item disabled value="disabled">
          <Accordion.Header>
            <Accordion.Trigger>Disabled section</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            This panel is not reachable while disabled.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export { Demo, meta }
