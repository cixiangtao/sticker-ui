import { Menubar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.menubarCheckboxAndRadioItemsSupportDesktopPreferenceMenus",
  order: 20,
  titleKey: "preview.components.checkboxRadio",
})

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Label>Panels</Menubar.Label>
          <Menubar.CheckboxItem checked>Preview</Menubar.CheckboxItem>
          <Menubar.CheckboxItem>Source</Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.RadioGroup value="comfortable">
            <Menubar.RadioItem value="compact">Compact</Menubar.RadioItem>
            <Menubar.RadioItem value="comfortable">
              Comfortable
            </Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  )
}

export { Demo, meta }
