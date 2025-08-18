import { Tabs, TabsContent, TabsList, TabsTrigger } from "sticker-ui"

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
        <TabsList aria-label="Small status tabs">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
        </TabsList>
        <TabsContent value="today">
          <p className="m-0 text-xs leading-5 font-bold">
            Compact tabs fit small status modules.
          </p>
        </TabsContent>
        <TabsContent value="week">Weekly view is ready.</TabsContent>
      </Tabs>

      <Tabs defaultValue="draft" tone="secondary" variant="quiet">
        <TabsList aria-label="Quiet filter tabs">
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
        </TabsList>
        <TabsContent value="draft">
          <p className="m-0 text-sm leading-6 font-medium">
            Quiet tabs keep filter groups light inside larger panels.
          </p>
        </TabsContent>
        <TabsContent value="live">Published work appears here.</TabsContent>
      </Tabs>

      <Tabs defaultValue="docs" size="lg" tone="info" variant="underline">
        <TabsList aria-label="Underline tabs">
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="docs">
          <p className="m-0 text-base leading-7 font-medium">
            Underline tabs feel lighter when the surrounding panel already owns
            the sticker frame.
          </p>
        </TabsContent>
        <TabsContent value="api">API examples appear here.</TabsContent>
      </Tabs>
    </div>
  )
}

export { Demo, meta }
