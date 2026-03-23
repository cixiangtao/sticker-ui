import { BarChart3, Home, Settings } from "lucide-react"
import { Sidebar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 40,
  titleKey: "preview.components.sizeToneMatrix",
  descriptionKey:
    "preview.components.sidebarSizeToneMatrixCoversLargePanelAndExplicitMenuButtonSizeToneOverrides",
})

function Demo() {
  return (
    <Sidebar className="max-h-96" size="lg" variant="panel">
      <Sidebar.Header>
        <strong className="text-sm font-black">Large panel sidebar</strong>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Matrix</Sidebar.GroupLabel>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton active size="md" tone="default">
                <Home aria-hidden="true" className="size-4" />
                <Sidebar.MenuLabel>Default md</Sidebar.MenuLabel>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg" tone="info">
                <BarChart3 aria-hidden="true" className="size-4" />
                <Sidebar.MenuLabel>Info lg</Sidebar.MenuLabel>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="sm" tone="warning">
                <Settings aria-hidden="true" className="size-4" />
                <Sidebar.MenuLabel>Warning sm</Sidebar.MenuLabel>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar>
  )
}

export { Demo, meta }
