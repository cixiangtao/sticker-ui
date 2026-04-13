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
    <div className="grid max-w-3xl gap-4">
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
      <Tabs defaultValue="info" size="sm" tone="default" variant="quiet">
        <Tabs.List size="sm" variant="quiet">
          <Tabs.Trigger size="sm" tone="info" value="info" variant="quiet">
            Info
          </Tabs.Trigger>
          <Tabs.Trigger
            size="lg"
            tone="secondary"
            value="secondary"
            variant="underline"
          >
            Secondary
          </Tabs.Trigger>
          <Tabs.Trigger size="sm" tone="success" value="success">
            Success
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content size="sm" tone="info" value="info">
          Small info content.
        </Tabs.Content>
        <Tabs.Content size="lg" tone="secondary" value="secondary">
          Large secondary content.
        </Tabs.Content>
        <Tabs.Content size="sm" tone="success" value="success">
          Small success content.
        </Tabs.Content>
      </Tabs>
      <Tabs defaultValue="warning" tone="warning" variant="underline">
        <Tabs.List size="lg" variant="underline">
          <Tabs.Trigger size="lg" tone="warning" value="warning">
            Warning underline
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content size="lg" tone="warning" value="warning">
          Large warning content keeps the underline variant visible.
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

export { Demo, meta }
