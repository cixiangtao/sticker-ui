import { Label } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.labelSizesAndTonesCoverDenseFormsStatusRowsAndSectionCaptions",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
})

const labels = [
  { size: "sm", text: "Small info", tone: "info" },
  { size: "md", text: "Default label", tone: "default" },
  { size: "lg", text: "Large warning", tone: "warning" },
] as const

function Demo() {
  return (
    <div className="grid gap-3">
      {labels.map((label) => (
        <Label key={label.text} size={label.size} tone={label.tone}>
          {label.text}
        </Label>
      ))}
    </div>
  )
}

export { Demo, meta }
