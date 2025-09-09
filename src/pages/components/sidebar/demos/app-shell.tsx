import {
  BarChart3,
  Bell,
  FolderKanban,
  LayoutDashboard,
  Settings,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Tag } from "@/components/ui/tag"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  order: 10,
  titleKey: "preview.components.appShell",
  descriptionKey:
    "preview.components.sidebarCreatesPersistentPcNavigationWithHeaderContentAndFooterRegions",
})

function Demo() {
  return (
    <div className="flex min-h-[430px] w-full max-w-4xl gap-4">
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-su-lg border-2 border-su-ink bg-su-fill-default text-sm font-black shadow-su-sm">
              SU
            </span>
            <div className="grid min-w-0">
              <strong className="truncate text-sm font-black">
                Sticker Ops
              </strong>
              <span className="truncate text-xs font-bold text-su-fg-muted">
                Team workspace
              </span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton active tone="info">
                  <LayoutDashboard aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Dashboard</SidebarMenuLabel>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FolderKanban aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Projects</SidebarMenuLabel>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Reports</SidebarMenuLabel>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>System</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Bell aria-hidden="true" className="size-5" />
                  <SidebarMenuLabel>Notifications</SidebarMenuLabel>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
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
          <Tag color="success" size="sm">
            Online
          </Tag>
        </SidebarFooter>
      </Sidebar>

      <Card className="min-w-0 flex-1">
        <CardHeader>
          <CardTitle>Workspace dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            The sidebar stays persistent while the main panel changes between
            product areas.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export { Demo, meta }
