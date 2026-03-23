import { Tabs } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.subcomponentPropMatrix",
  descriptionKey:
    "preview.components.tabsSubcomponentPropMatrixCoversDangerDefaultMediumWarningAndSlotOverrides",
})

function Demo() {
  return (
    <Tabs
      className="max-w-2xl"
      defaultValue="danger"
      size="md"
      tone="danger"
      variant="solid"
    >
      <Tabs.List className="w-full" size="md" variant="solid">
        <Tabs.Trigger
          className="flex-1"
          size="md"
          tone="danger"
          value="danger"
          variant="solid"
        >
          Danger
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex-1"
          size="md"
          tone="default"
          value="default"
          variant="quiet"
        >
          Default
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex-1"
          size="md"
          tone="warning"
          value="warning"
          variant="underline"
        >
          Warning
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="font-medium"
        size="md"
        tone="danger"
        value="danger"
      >
        Danger content with an explicit medium size.
      </Tabs.Content>
      <Tabs.Content size="md" tone="default" value="default">
        Default content can override a danger root.
      </Tabs.Content>
      <Tabs.Content size="md" tone="warning" value="warning">
        Warning content matches the warning trigger.
      </Tabs.Content>
    </Tabs>
  )
}

export { Demo, meta }
