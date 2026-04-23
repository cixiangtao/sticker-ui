import { ScrollArea, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.scrollAreaIncludesAHorizontalScrollbarForWideRowsAndCodeLikeContent",
  order: 30,
  titleKey: "preview.components.horizontalContent",
})

function Demo() {
  return (
    <ScrollArea className="w-full max-w-lg" tone="secondary">
      <div className="flex w-max gap-3 p-3">
        {["Components", "Registry", "Themes", "Routing", "Docs"].map((item) => (
          <div
            className="grid w-48 gap-2 rounded-su-xl border-2 border-su-ink bg-su-paper p-3 shadow-su-sm"
            key={item}
          >
            <Tag color="info" rounded="pill">
              {item}
            </Tag>
            <p className="m-0 text-sm leading-6 font-bold text-su-fg-muted">
              Wide content stays inside the frame.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export { Demo, meta }
