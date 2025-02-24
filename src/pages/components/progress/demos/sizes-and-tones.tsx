import { Progress } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const PROGRESS_TONES = [
  {
    label: "Default",
    tone: "default",
    value: 42,
  },
  {
    label: "Info",
    tone: "info",
    value: 58,
  },
  {
    label: "Secondary",
    tone: "secondary",
    value: 66,
  },
  {
    label: "Success",
    tone: "success",
    value: 84,
  },
  {
    label: "Warning",
    tone: "warning",
    value: 36,
  },
  {
    label: "Danger",
    tone: "danger",
    value: 18,
  },
] as const

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.progressSizesFitDenseRowsStandardCardsAndLargerSummaryPanels",
})

function Demo() {
  return (
    <div className="grid gap-3">
      {PROGRESS_TONES.map((item, index) => (
        <div
          className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-3 sm:grid-cols-[7rem_1fr] sm:items-center"
          key={item.tone}
        >
          <div className="text-sm font-extrabold text-ink">{item.label}</div>
          <Progress
            aria-label={`${item.label} progress`}
            showValue={index > 2}
            size={index === 0 ? "sm" : index === 5 ? "lg" : "md"}
            tone={item.tone}
            value={item.value}
          />
        </div>
      ))}
    </div>
  )
}

export { Demo, meta }
