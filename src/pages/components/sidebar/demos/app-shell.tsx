import {
  BarChart3,
  Bell,
  FolderKanban,
  LayoutDashboard,
  Settings,
} from "lucide-react"
import { Card, Sidebar } from "sticker-ui"

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
        <Sidebar.Header>
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
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Main</Sidebar.GroupLabel>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton active tone="info">
                  <LayoutDashboard aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Dashboard</Sidebar.MenuLabel>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <FolderKanban aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Projects</Sidebar.MenuLabel>
                  <Sidebar.MenuBadge>12</Sidebar.MenuBadge>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <BarChart3 aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Reports</Sidebar.MenuLabel>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Group>
          <Sidebar.Separator />
          <Sidebar.Group>
            <Sidebar.GroupLabel>System</Sidebar.GroupLabel>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <Bell aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Notifications</Sidebar.MenuLabel>
                  <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <Settings aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Settings</Sidebar.MenuLabel>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Tag color="success" size="sm">
            Online
          </Tag>
        </Sidebar.Footer>
      </Sidebar>

      <Card className="min-w-0 flex-1">
        <Card.Header>
          <Card.Title>Workspace dashboard</Card.Title>
        </Card.Header>
        <Card.Content>
          <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
            The sidebar stays persistent while the main panel changes between
            product areas.
          </p>
        </Card.Content>
      </Card>
    </div>
  )
}

export { Demo, meta }
