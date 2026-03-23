import { NavigationMenu } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.defaultOverrides",
  descriptionKey:
    "preview.components.navigationMenuDefaultOverridesShowExplicitMediumDefaultTriggerAndContentProps",
})

function Demo() {
  return (
    <NavigationMenu size="md" tone="default">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger size="md" tone="default">
            Default branch
          </NavigationMenu.Trigger>
          <NavigationMenu.Content tone="default">
            <div className="grid w-72 gap-2 p-3">
              <NavigationMenu.Link href="#/defaults/overview">
                Overview
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/defaults/api">
                API defaults
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
