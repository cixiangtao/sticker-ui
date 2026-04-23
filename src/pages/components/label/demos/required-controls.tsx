import { Input, Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.labelRequiredMarkersAndHtmlForConnectCleanlyToNativeControls",
  order: 30,
  titleKey: "preview.components.requiredControls",
})

function Demo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="workspace-name" required>
        Workspace name
      </Label>
      <Input id="workspace-name" placeholder="Design ops" />
      <Label htmlFor="archive-reason" size="sm" tone="danger">
        Archive reason
      </Label>
      <Input id="archive-reason" placeholder="Optional note" tone="danger" />
    </div>
  )
}

export { Demo, meta }
