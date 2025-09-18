import { NavigationMenu } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.tonesAndSizes",
  descriptionKey:
    "preview.components.navigationMenuSizesAndTonesAdaptHeaderDensityWithoutChangingRadixBehavior",
})

function Demo() {
  return (
    <div className="grid gap-5">
      <NavigationMenu size="sm" tone="info">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Compact</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div className="grid w-72 gap-1 p-2">
                <NavigationMenu.Link href="#/compact/overview">
                  Overview
                </NavigationMenu.Link>
                <NavigationMenu.Link href="#/compact/settings">
                  Settings
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.Indicator />
        <NavigationMenu.Viewport />
      </NavigationMenu>

      <NavigationMenu size="lg" tone="warning">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Roomy</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div className="grid w-80 gap-1 p-3">
                <NavigationMenu.Link href="#/roomy/approvals">
                  Approval center
                </NavigationMenu.Link>
                <NavigationMenu.Link href="#/roomy/audit">
                  Audit timeline
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.Indicator />
        <NavigationMenu.Viewport />
      </NavigationMenu>
    </div>
  )
}

export { Demo, meta }
