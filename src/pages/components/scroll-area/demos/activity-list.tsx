import { ScrollArea, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.scrollAreaFramesDenseContentWithRadixScrollbarsAndStickerThumbs",
  order: 10,
  titleKey: "preview.components.activityList",
})

const items = [
  "Registry package dry-run passed",
  "Preview route map generated",
  "API docs refreshed from TSDoc",
  "Calendar keyboard focus checked",
  "Upload queue empty state reviewed",
  "Sheet side placement verified",
  "Command search result copy polished",
  "Toast viewport placement tested",
]

function Demo() {
  return (
    <ScrollArea className="h-64 w-full max-w-md" tone="secondary">
      <div className="space-y-3 p-4">
        {items.map((item, index) => (
          <div
            className="flex items-center justify-between gap-4 rounded-su-lg border-2 border-su-ink bg-su-surface px-3 py-2 shadow-su-xs"
            key={item}
          >
            <span className="text-sm font-black">{item}</span>
            <Tag rounded="pill" size="sm">
              {String(index + 1).padStart(2, "0")}
            </Tag>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export { Demo, meta }
