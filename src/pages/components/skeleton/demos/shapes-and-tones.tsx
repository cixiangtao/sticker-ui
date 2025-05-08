import { Skeleton } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const SKELETON_SHAPES = ["line", "avatar", "block", "card"] as const
const SKELETON_TONES = ["default", "info", "secondary", "warning"] as const

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.shapesAndTones",
  descriptionKey:
    "preview.components.skeletonShapesMapToCommonLoadingSlotsAndTonesCanMatchTheSurroundingPaper",
})

function Demo() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {SKELETON_SHAPES.map((shape) => (
          <Skeleton
            className={shape === "line" ? "w-28" : undefined}
            key={shape}
            shape={shape}
          />
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        {SKELETON_TONES.map((tone) => (
          <Skeleton key={tone} shape="block" tone={tone} />
        ))}
      </div>
    </div>
  )
}

export { Demo, meta }
