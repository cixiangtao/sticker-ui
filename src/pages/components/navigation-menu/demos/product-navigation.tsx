import { ArrowRight, BookOpen, Boxes, PanelsTopLeft } from "lucide-react"
import { NavigationMenu } from "sticker-ui"

import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.productNavigation",
  descriptionKey:
    "preview.components.navigationMenuGroupsTopLevelProductAreasWithKeyboardReachablePanels",
})

function Demo() {
  return (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Product</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div className="grid w-[520px] grid-cols-[1.1fr_1fr] gap-2 p-3">
              <NavigationMenu.Link
                className="row-span-3 grid content-end gap-2 rounded-su-xl border-2 border-su-ink bg-su-fill-info p-4 shadow-su-md"
                href="#/product"
              >
                <Boxes aria-hidden="true" className="size-8 stroke-[3]" />
                <div className="text-base font-black">Registry kits</div>
                <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
                  Copy source-first components into product dashboards.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/product/components">
                <PanelsTopLeft
                  aria-hidden="true"
                  className="mb-2 size-5 stroke-[3]"
                />
                <div className="font-black">Components</div>
                <p className="m-0 text-xs leading-5 text-su-fg-muted">
                  Buttons, menus, dialogs, and form controls.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/product/docs">
                <BookOpen
                  aria-hidden="true"
                  className="mb-2 size-5 stroke-[3]"
                />
                <div className="font-black">Documentation</div>
                <p className="m-0 text-xs leading-5 text-su-fg-muted">
                  API tables and copyable usage examples.
                </p>
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
          <NavigationMenu.Content tone="secondary">
            <div className="grid w-[420px] gap-2 p-3">
              <NavigationMenu.Link href="#/resources/templates">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-black">Templates</span>
                  <Tag color="secondary" size="sm">
                    New
                  </Tag>
                </div>
                <p className="m-0 mt-1 text-xs leading-5 text-su-fg-muted">
                  Starter layouts for PC dashboards and tool surfaces.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#/resources/changelog">
                <div className="flex items-center gap-2 font-black">
                  Changelog
                  <ArrowRight aria-hidden="true" className="size-4" />
                </div>
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
