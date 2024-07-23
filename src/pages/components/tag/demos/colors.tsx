import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const TAG_COLORS = [
  {
    color: "default",
    label: "Default",
    labelKey: "preview.components.default",
  },
  {
    color: "info",
    label: "Info",
    labelKey: "preview.components.info",
  },
  {
    color: "secondary",
    label: "Secondary",
    labelKey: "preview.components.secondary",
  },
  {
    color: "success",
    label: "Success",
    labelKey: "preview.components.success",
  },
  {
    color: "warning",
    label: "Warning",
    labelKey: "preview.components.warning",
  },
  {
    color: "danger",
    label: "Danger",
    labelKey: "preview.components.danger",
  },
] as const

const TAG_VARIANTS = [
  {
    label: "Solid",
    labelKey: "preview.components.solid",
    variant: "solid",
  },
  {
    label: "Filled",
    labelKey: "preview.components.filled",
    variant: "filled",
  },
  {
    label: "Outlined",
    labelKey: "preview.components.outlined",
    variant: "outlined",
  },
] as const

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Compare each semantic color across solid, filled, and outlined tags.",
  order: 20,
  title: "Colors",
  titleKey: "preview.components.colors",
  descriptionKey:
    "preview.components.compareEachSemanticColorAcrossSolidFilledAndOutlinedTags",
})

function Demo() {
  const { tm } = usePreviewI18n()

  return (
    <div className="grid gap-3">
      {TAG_COLORS.map((item) => (
        <div
          className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-3 sm:grid-cols-[7rem_1fr] sm:items-center"
          key={item.color}
        >
          <div className="text-sm font-extrabold text-ink">
            {tm(item.labelKey)}
          </div>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map((variantItem) => (
              <Tag
                color={item.color}
                key={variantItem.variant}
                size="sm"
                variant={variantItem.variant}
              >
                {tm(variantItem.labelKey)}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { Demo, meta }
