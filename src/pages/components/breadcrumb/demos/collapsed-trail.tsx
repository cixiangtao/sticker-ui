import { Breadcrumb, DropdownMenu } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.collapsedTrail",
  descriptionKey:
    "preview.components.ellipsisCanHideMiddleLevelsWhileKeepingTheCurrentPageExplicit",
})

function Demo() {
  return (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/workspaces">Workspaces</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <DropdownMenu>
            <DropdownMenu.Trigger className="rounded-su-sm outline-none focus-visible:ring-[2px] focus-visible:ring-su-ring/65">
              <Breadcrumb.Ellipsis />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start">
              <DropdownMenu.Item>North America</DropdownMenu.Item>
              <DropdownMenu.Item>Planning</DropdownMenu.Item>
              <DropdownMenu.Item>Quarterly review</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/reports">Reports</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Pipeline health</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  )
}

export { Demo, meta }
