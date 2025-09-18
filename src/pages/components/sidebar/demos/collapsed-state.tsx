import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  LayoutDashboard,
  Settings,
} from "lucide-react"
import * as React from "react"
import { Sidebar } from "sticker-ui"

import { Button } from "@/components/ui/button"
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
        <Sidebar.Header>
          <span className="flex size-10 items-center justify-center rounded-su-lg border-2 border-su-ink bg-su-fill-default text-sm font-black shadow-su-sm">
            Q
          </span>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Queue</Sidebar.GroupLabel>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton active tone="secondary">
                  <LayoutDashboard aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Overview</Sidebar.MenuLabel>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                  <Inbox aria-hidden="true" className="size-5" />
                  <Sidebar.MenuLabel>Inbox</Sidebar.MenuLabel>
                  <Sidebar.MenuBadge>8</Sidebar.MenuBadge>
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
        </Sidebar.Footer>
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
