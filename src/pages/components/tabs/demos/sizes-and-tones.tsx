import { Tabs } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.sizeToneAndVariantTuneTabsForCompactToolbarsSoftFiltersAndPanelNavigation",
})

function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Tabs defaultValue="today" size="sm" tone="success">
        <Tabs.List aria-label="Small status tabs">
          <Tabs.Trigger value="today">Today</Tabs.Trigger>
          <Tabs.Trigger value="week">Week</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="today">
          <p className="m-0 text-xs leading-5 font-bold">
            Compact tabs fit small status modules.
          </p>
        </Tabs.Content>
        <Tabs.Content value="week">Weekly view is ready.</Tabs.Content>
      </Tabs>

      <Tabs defaultValue="draft" tone="secondary" variant="quiet">
        <Tabs.List aria-label="Quiet filter tabs">
          <Tabs.Trigger value="draft">Draft</Tabs.Trigger>
          <Tabs.Trigger value="live">Live</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="draft">
          <p className="m-0 text-sm leading-6 font-medium">
            Quiet tabs keep filter groups light inside larger panels.
          </p>
        </Tabs.Content>
        <Tabs.Content value="live">Published work appears here.</Tabs.Content>
      </Tabs>

      <Tabs defaultValue="docs" size="lg" tone="info" variant="underline">
        <Tabs.List aria-label="Underline tabs">
          <Tabs.Trigger value="docs">Docs</Tabs.Trigger>
          <Tabs.Trigger value="api">API</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="docs">
          <p className="m-0 text-base leading-7 font-medium">
            Underline tabs feel lighter when the surrounding panel already owns
            the sticker frame.
          </p>
        </Tabs.Content>
        <Tabs.Content value="api">API examples appear here.</Tabs.Content>
      </Tabs>
    </div>
  )
}

export { Demo, meta }
