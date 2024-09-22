import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 60,
  titleKey: "preview.components.metadataRow",
  descriptionKey:
    "preview.components.combineTagsWithCalmerBordersForRouteCardsFiltersAndRegistryDetailPanels",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="rounded-sticker-xl border border-ink bg-white p-4">
      <div className="mb-3 font-extrabold">src/components/ui/tag.tsx</div>
      <div className="flex flex-wrap gap-2">
        <Tag size="sm" variant="outlined">
          registry:ui
        </Tag>
        <Tag color="success" dot size="sm">
          {tm("preview.components.ready")}
        </Tag>
        <Tag color="info" size="sm" variant="filled">
          {tm("preview.components.sourceFirst")}
        </Tag>
      </div>
    </div>
  )
}

export { Demo, meta }
