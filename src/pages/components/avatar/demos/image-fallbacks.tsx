import { Avatar, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.avatarImageAndFallbackSlotsKeepProfilesReadableWhenPhotosAreMissing",
  order: 30,
  titleKey: "preview.components.imageFallbacks",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar aria-label="Mira Chen" size="xl" tone="info">
        <Avatar.Image
          alt="Mira Chen"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
        />
      </Avatar>
      <Avatar aria-label="Design team" size="lg" tone="secondary">
        <Avatar.Fallback>DT</Avatar.Fallback>
      </Avatar>
      <div className="grid gap-2">
        <Tag color="success" rounded="pill">
          Active
        </Tag>
        <p className="m-0 max-w-xs text-sm leading-6 font-bold text-su-fg-muted">
          Image and fallback slots can be mixed in the same avatar row.
        </p>
      </div>
    </div>
  )
}

export { Demo, meta }
