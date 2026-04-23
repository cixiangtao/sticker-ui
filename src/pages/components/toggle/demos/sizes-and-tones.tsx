import { Toggle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.toggleSizesTonesAndVariantsCoverToolbarAndPreferenceControls",
  order: 20,
  titleKey: "preview.components.sizesAndTones",
})

const toggles = [
  { label: "S", size: "sm", tone: "info", variant: "outlined" },
  { label: "M", size: "md", tone: "success", variant: "outlined" },
  { label: "L", size: "lg", tone: "warning", variant: "ghost" },
] as const

function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {toggles.map((toggle) => (
        <Toggle
          aria-label={`${toggle.label} toggle`}
          defaultPressed
          key={toggle.label}
          size={toggle.size}
          tone={toggle.tone}
          variant={toggle.variant}
        >
          {toggle.label}
        </Toggle>
      ))}
    </div>
  )
}

export { Demo, meta }
