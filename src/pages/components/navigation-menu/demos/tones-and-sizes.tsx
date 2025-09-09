import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
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
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Compact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-72 gap-1 p-2">
                <NavigationMenuLink href="#/compact/overview">
                  Overview
                </NavigationMenuLink>
                <NavigationMenuLink href="#/compact/settings">
                  Settings
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>

      <NavigationMenu size="lg" tone="warning">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Roomy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-80 gap-1 p-3">
                <NavigationMenuLink href="#/roomy/approvals">
                  Approval center
                </NavigationMenuLink>
                <NavigationMenuLink href="#/roomy/audit">
                  Audit timeline
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  )
}

export { Demo, meta }
