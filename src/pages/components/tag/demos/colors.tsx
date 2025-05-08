import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TAG_COLORS = [
  {
    color: "default",
    label: "Default",
  },
  {
    color: "info",
    label: "Info",
  },
  {
    color: "secondary",
    label: "Secondary",
  },
  {
    color: "success",
    label: "Success",
  },
  {
    color: "warning",
    label: "Warning",
  },
  {
    color: "danger",
    label: "Danger",
  },
] as const

const TAG_VARIANTS = [
  {
    label: "Solid",
    variant: "solid",
  },
  {
    label: "Filled",
    variant: "filled",
  },
  {
    label: "Outlined",
    variant: "outlined",
  },
] as const

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.colors",
  descriptionKey:
    "preview.components.compareEachSemanticColorAcrossSolidFilledAndOutlinedTags",
})

function Demo() {
  return (
    <div className="grid gap-3">
      {TAG_COLORS.map((item) => (
        <div
          className="grid gap-2 rounded-su-xl border border-su-ink bg-white/80 p-3 sm:grid-cols-[7rem_1fr] sm:items-center"
          key={item.color}
        >
          <div className="text-sm font-extrabold text-su-ink">{item.label}</div>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map((variantItem) => (
              <Tag
                color={item.color}
                key={variantItem.variant}
                size="sm"
                variant={variantItem.variant}
              >
                {variantItem.label}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { Demo, meta }
