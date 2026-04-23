import { Input, Label, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.labelAddsRadixControlBindingPlusStickerTypographyAndRequiredMarkers",
  order: 10,
  titleKey: "preview.components.fieldLabels",
})

function Demo() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="project-name" required>
          Project name
        </Label>
        <Tag color="info" rounded="pill" size="sm">
          Required
        </Tag>
      </div>
      <Input id="project-name" placeholder="Sticker launch kit" />
      <Label htmlFor="project-slug" size="sm" tone="info">
        Public slug
      </Label>
      <Input id="project-slug" placeholder="sticker-launch-kit" />
    </div>
  )
}

export { Demo, meta }
