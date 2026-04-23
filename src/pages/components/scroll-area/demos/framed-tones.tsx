import { ScrollArea, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.scrollAreaFrameAndToneOptionsFitCardsDrawersAndNestedPanels",
  order: 20,
  titleKey: "preview.components.framedTones",
})

const tones = ["default", "info", "secondary"] as const

function Demo() {
  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
      {tones.map((tone) => (
        <ScrollArea className="h-40" key={tone} tone={tone}>
          <div className="grid gap-2 p-3">
            <Tag rounded="pill">{tone}</Tag>
            {Array.from({ length: 6 }, (_, index) => (
              <p className="m-0 text-sm font-bold" key={index}>
                Scroll item {index + 1}
              </p>
            ))}
          </div>
        </ScrollArea>
      ))}
    </div>
  )
}

export { Demo, meta }
