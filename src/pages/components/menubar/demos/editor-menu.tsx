import * as React from "react"
import { Menubar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.menubarSupportsDesktopAppMenusWithCheckboxRadioAndNestedItems",
  order: 10,
  titleKey: "preview.components.editorMenu",
})

function Demo() {
  const [showRulers, setShowRulers] = React.useState(true)
  const [density, setDensity] = React.useState("cozy")

  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New notebook
            <Menubar.Shortcut>Cmd N</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Export
            <Menubar.Shortcut>Shift Cmd E</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem
            checked={showRulers}
            onCheckedChange={(checked) => setShowRulers(checked === true)}
          >
            Show rulers
          </Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Label inset>Density</Menubar.Label>
          <Menubar.RadioGroup onValueChange={setDensity} value={density}>
            <Menubar.RadioItem value="compact">Compact</Menubar.RadioItem>
            <Menubar.RadioItem value="cozy">Cozy</Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Insert</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Sub>
            <Menubar.SubTrigger>Sticker block</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Callout</Menubar.Item>
              <Menubar.Item>Timeline</Menubar.Item>
              <Menubar.Item>Code block</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}

export { Demo, meta }
