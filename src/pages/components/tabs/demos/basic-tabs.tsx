import { Card, Tabs, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicTabs",
  descriptionKey:
    "preview.components.tabsKeepRadixKeyboardNavigationWhileAddingChunkyStickerTriggersAndPaperPanels",
})

function Demo() {
  return (
    <Tabs className="max-w-2xl" defaultValue="overview">
      <Tabs.List aria-label="Project sections">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="schedule">Schedule</Tabs.Trigger>
        <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <Card className="border-0 bg-transparent shadow-none">
          <Card.Header className="px-0 pt-0">
            <Tag rounded="pill" size="sm">
              Active Sprint
            </Tag>
            <Card.Title>Design System Pass</Card.Title>
          </Card.Header>
          <Card.Content className="px-0 pb-0">
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              Use tabs to keep related views close without sending the reader
              through a full route change.
            </p>
          </Card.Content>
        </Card>
      </Tabs.Content>
      <Tabs.Content value="schedule">
        <p className="m-0 text-sm leading-6 font-medium">
          Monday review, Wednesday polish, Friday registry handoff.
        </p>
      </Tabs.Content>
      <Tabs.Content value="notes">
        <p className="m-0 text-sm leading-6 font-medium">
          Keyboard navigation, focus rings, and disabled triggers are owned by
          Radix Tabs.
        </p>
      </Tabs.Content>
    </Tabs>
  )
}

export { Demo, meta }
