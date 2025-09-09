import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  LayoutDashboard,
  Settings,
} from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuLabel,
} from "@/components/ui/sidebar"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.collapsedState",
  descriptionKey:
    "preview.components.collapsedSidebarKeepsIconNavigationAvailableForDensePcTools",
})

function Demo() {
  const [collapsed, setCollapsed] = React.useState(true)

  return (
    <div className="flex min-h-[360px] w-full max-w-3xl gap-4">
      <Sidebar collapsed={collapsed} size="sm">
        <SidebarHeader>
          <span className="flex size-10 items-center justify-center rounded-su-lg border-2 border-su-ink bg-su-fill-default text-sm font-black shadow-su-sm">
            Q
          </span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Queue</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton active tone="secondary">
                  <LayoutDashboard aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Overview</SidebarMenuLabel>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Inbox</SidebarMenuLabel>
                  <SidebarMenuBadge>8</SidebarMenuBadge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Settings</SidebarMenuLabel>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((value) => !value)}
            size="icon"
            variant="outlined"
          >
            {collapsed ? (
              <ChevronRight aria-hidden="true" className="size-5 stroke-[3]" />
            ) : (
              <ChevronLeft aria-hidden="true" className="size-5 stroke-[3]" />
            )}
          </Button>
        </SidebarFooter>
      </Sidebar>

      <div className="grid flex-1 content-start gap-3 rounded-su-panel border-[3px] border-su-ink bg-su-paper p-5 shadow-su-lg">
        <h3 className="m-0 text-lg font-black">
          Collapsed: {String(collapsed)}
        </h3>
        <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
          Labels and badges hide when collapsed, while icon buttons remain
          keyboard reachable.
        </p>
      </div>
    </div>
  )
}

export { Demo, meta }
