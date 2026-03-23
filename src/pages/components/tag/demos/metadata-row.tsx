import { Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 60,
  titleKey: "preview.components.metadataRow",
  descriptionKey:
    "preview.components.combineTagsWithCalmerBordersForRouteCardsFiltersAndRegistryDetailPanels",
})

function Demo() {
  return (
    <div className="rounded-su-xl border border-su-ink bg-white p-4">
      <div className="mb-3 font-extrabold">src/components/ui/tag.tsx</div>
      <div className="flex flex-wrap gap-2">
        <Tag size="sm" variant="outlined">
          registry:ui
        </Tag>
        <Tag color="success" dot size="sm">
          Ready
        </Tag>
        <Tag color="info" size="sm" variant="filled">
          Source First
        </Tag>
        <Tag color="secondary" size="sm" variant="solid">
          Secondary
        </Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
