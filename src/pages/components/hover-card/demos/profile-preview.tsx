import { Avatar, Button, HoverCard } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.profilePreview",
  descriptionKey:
    "preview.components.hoverCardProvidesLightweightProfileAndEntityPreviewsOnPointerHover",
})

function Demo() {
  return (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <Button variant="outlined">Hover Ada</Button>
      </HoverCard.Trigger>
      <HoverCard.Content showArrow>
        <div className="flex gap-3">
          <Avatar tone="info">
            <Avatar.Fallback>AD</Avatar.Fallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="font-black">Ada Designer</div>
            <p className="m-0 text-sm leading-6 font-medium text-su-fg-muted">
              Maintains component coverage and keeps demo copy literal.
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  )
}

export { Demo, meta }
