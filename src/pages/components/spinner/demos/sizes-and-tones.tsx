import { Spinner } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const SPINNER_TONES = [
  "default",
  "info",
  "secondary",
  "success",
  "warning",
  "danger",
] as const

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.spinnerSizesAndTonesMatchInlineControlsCardsAndStatusPanels",
})

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {SPINNER_TONES.map((tone, index) => (
        <div
          className="flex items-center gap-2 rounded-sticker-xl border border-ink bg-white/80 px-3 py-2"
          key={tone}
        >
          <Spinner
            decorative
            size={index < 2 ? "sm" : index > 3 ? "lg" : "md"}
            tone={tone}
          />
          <span className="text-sm font-extrabold text-ink capitalize">
            {tone}
          </span>
        </div>
      ))}
    </div>
  )
}

export { Demo, meta }
