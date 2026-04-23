import { AspectRatio, Card } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.aspectRatioCanDropItsOuterFrameWhenTheParentSurfaceAlreadyOwnsTheStickerChrome",
  order: 30,
  titleKey: "preview.components.unframedEmbed",
})

function Demo() {
  return (
    <Card className="w-full max-w-xl">
      <Card.Header>
        <Card.Title>Report preview</Card.Title>
        <Card.Description>
          Use an unframed ratio inside an existing card to avoid doubled
          borders.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <AspectRatio framed={false} ratio={4 / 3} tone="info">
          <div className="grid size-full place-items-center rounded-su-xl border-2 border-dashed border-su-ink bg-su-fill-info text-center text-sm font-black">
            Embedded chart canvas
          </div>
        </AspectRatio>
      </Card.Content>
    </Card>
  )
}

export { Demo, meta }
