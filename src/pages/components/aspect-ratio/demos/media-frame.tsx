import { AspectRatio, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.aspectRatioKeepsMediaCardsStableWhileImagesOrEmbedsLoad",
  order: 10,
  titleKey: "preview.components.mediaFrame",
})

function Demo() {
  return (
    <div className="w-full max-w-xl">
      <AspectRatio ratio={16 / 9} tone="secondary">
        <div className="flex size-full flex-col justify-between bg-[linear-gradient(135deg,var(--color-su-fill-info),var(--color-su-fill-warning))] p-5">
          <Tag color="info" rounded="pill">
            16:9
          </Tag>
          <div>
            <h3 className="m-0 text-2xl font-black text-su-ink">Launch desk</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 font-bold text-su-ink">
              Stable media frames keep cards from jumping while thumbnails,
              videos, or previews finish loading.
            </p>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}

export { Demo, meta }
