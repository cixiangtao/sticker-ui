import { AspectRatio, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  descriptionKey:
    "preview.components.aspectRatioRatiosAndTonesKeepMediaLayoutsPredictableAcrossCards",
  order: 20,
  titleKey: "preview.components.ratiosAndTones",
})

const frames = [
  { label: "Square", ratio: 1, tone: "default" },
  { label: "Portrait", ratio: 3 / 4, tone: "info" },
  { label: "Story", ratio: 9 / 16, tone: "warning" },
] as const

function Demo() {
  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
      {frames.map((frame) => (
        <AspectRatio key={frame.label} ratio={frame.ratio} tone={frame.tone}>
          <div className="grid size-full place-items-center p-4 text-center">
            <Tag rounded="pill" size="sm">
              {frame.label}
            </Tag>
            <span className="text-2xl font-black">
              {frame.ratio.toFixed(2)}
            </span>
          </div>
        </AspectRatio>
      ))}
    </div>
  )
}

export { Demo, meta }
