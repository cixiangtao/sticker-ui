import { Menubar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.menubarTriggerSizeAndToneOptionsKeepTopLevelMenusReadable",
  order: 30,
  titleKey: "preview.components.triggerTones",
})

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger size="sm" tone="info">
          File
        </Menubar.Trigger>
        <Menubar.Content tone="info">
          <Menubar.Item>New file</Menubar.Item>
          <Menubar.Item>Open recent</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger tone="secondary">Tools</Menubar.Trigger>
        <Menubar.Content tone="secondary">
          <Menubar.Item>Command palette</Menubar.Item>
          <Menubar.Item>Theme editor</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger size="lg" tone="warning">
          Help
        </Menubar.Trigger>
        <Menubar.Content tone="warning">
          <Menubar.Item>Docs</Menubar.Item>
          <Menubar.Item>Shortcuts</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}

export { Demo, meta }
