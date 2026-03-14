import * as React from "react"
import { Accordion, Button, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.multipleAndControlled",
  descriptionKey:
    "preview.components.accordionSupportsMultipleOpenPanelsAndControlledValueState",
})

function Demo() {
  const [openItems, setOpenItems] = React.useState<string[]>([
    "install",
    "theme",
  ])

  return (
    <div className="grid max-w-2xl gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setOpenItems(["install", "theme", "publish"])}
          size="sm"
        >
          Open all
        </Button>
        <Button onClick={() => setOpenItems([])} size="sm" variant="outlined">
          Collapse all
        </Button>
        <Tag rounded="pill" size="sm" variant="outlined">
          {openItems.length} open
        </Tag>
      </div>

      <Accordion
        onValueChange={setOpenItems}
        type="multiple"
        value={openItems}
        variant="filled"
      >
        <Accordion.Item tone="info" value="install">
          <Accordion.Header>
            <Accordion.Trigger>Install package</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Package consumers install once and import components from the
            sticker-ui root entry.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item tone="secondary" value="theme">
          <Accordion.Header>
            <Accordion.Trigger>Wire tokens</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Import the CSS tokens, then let Tailwind scan the installed package
            so copied source utilities are generated.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item tone="success" value="publish">
          <Accordion.Header>
            <Accordion.Trigger>Publish registry</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Maintainers run the registry and preview builds after component API,
            demos, or docs change.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export { Demo, meta }
