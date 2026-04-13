import { NavigationMenu, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.triggerOverrides",
  descriptionKey:
    "preview.components.navigationMenuRootTriggerAndContentPropsCanMixSizesAndTonesForDifferentProductAreas",
})

function Demo() {
  return (
    <NavigationMenu size="sm" tone="secondary">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger size="sm" tone="info">
            Docs
          </NavigationMenu.Trigger>
          <NavigationMenu.Content tone="info">
            <div className="grid w-72 gap-2 p-3">
              <NavigationMenu.Link href="#/docs/getting-started">
                Getting started
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/docs/api">
                API reference
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger size="md" tone="secondary">
            Components
          </NavigationMenu.Trigger>
          <NavigationMenu.Content tone="secondary">
            <div className="grid w-72 gap-2 p-3">
              <NavigationMenu.Link href="#/components/button">
                Button
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/components/card">
                Card
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger size="lg" tone="warning">
            Releases
          </NavigationMenu.Trigger>
          <NavigationMenu.Content tone="warning">
            <div className="grid w-80 gap-2 p-3">
              <NavigationMenu.Link href="#/releases/current">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black">Current train</span>
                  <Tag color="warning" size="sm">
                    Live
                  </Tag>
                </div>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/releases/archive">
                Archive
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Indicator />
      <NavigationMenu.Viewport />
    </NavigationMenu>
  )
}

export { Demo, meta }
