import { Avatar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.shapesAndSizes",
  descriptionKey:
    "preview.components.avatarShapesAndSizesFitDenseTablesProfilesAndRoomierIdentityCards",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <Avatar shape="circle" size="xs" tone="secondary">
        <Avatar.Fallback>XS</Avatar.Fallback>
      </Avatar>
      <Avatar shape="circle" size="sm" tone="info">
        <Avatar.Fallback>SM</Avatar.Fallback>
      </Avatar>
      <Avatar shape="rounded" size="md" tone="warning">
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
      <Avatar shape="square" size="lg" tone="success">
        <Avatar.Fallback>LG</Avatar.Fallback>
      </Avatar>
      <Avatar shape="rounded" size="xl" tone="danger">
        <Avatar.Fallback>XL</Avatar.Fallback>
      </Avatar>
    </div>
  )
}

export { Demo, meta }
