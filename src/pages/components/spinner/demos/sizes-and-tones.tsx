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
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.spinnerSizesAndTonesMatchInlineControlsCardsAndStatusPanels",
})

function Demo() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Spinner decorative size="sm" tone="default" />
        <Spinner decorative size="md" tone="danger" />
        <Spinner decorative size="lg" tone="success" />
        <Spinner decorative size="lg" tone="warning" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {SPINNER_TONES.map((tone, index) => (
          <div
            className="flex items-center gap-2 rounded-su-xl border border-su-ink bg-white/80 px-3 py-2"
            key={tone}
          >
            <Spinner
              decorative
              size={index < 2 ? "sm" : index > 3 ? "lg" : "md"}
              tone={tone}
            />
            <span className="text-sm font-extrabold text-su-ink capitalize">
              {tone}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Demo, meta }
