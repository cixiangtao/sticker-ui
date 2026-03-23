import { BookOpen, ExternalLink, Settings } from "lucide-react"
import { Sidebar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.asChildNavigation",
  descriptionKey:
    "preview.components.sidebarMenuButtonAsChildKeepsAnchorNavigationSemanticsWithActiveDisabledAndToneStates",
})

function Demo() {
  return (
    <Sidebar className="max-h-96" size="sm" variant="flat">
      <Sidebar.Header>
        <strong className="text-sm font-black">Docs shell</strong>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Links</Sidebar.GroupLabel>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton active asChild tone="success">
                <a href="#components">
                  <BookOpen aria-hidden="true" className="size-4" />
                  <Sidebar.MenuLabel>Components</Sidebar.MenuLabel>
                </a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton asChild tone="info">
                <a href="#external">
                  <ExternalLink aria-hidden="true" className="size-4" />
                  <Sidebar.MenuLabel>External docs</Sidebar.MenuLabel>
                  <Sidebar.MenuBadge>new</Sidebar.MenuBadge>
                </a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton disabled tone="warning">
                <Settings aria-hidden="true" className="size-4" />
                <Sidebar.MenuLabel>Locked settings</Sidebar.MenuLabel>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar>
  )
}

export { Demo, meta }
