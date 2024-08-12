import { Button } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  order: 20,
  descriptionKey:
    "preview.components.sizeChoicesAreConstrainedSoIconShortTextAndLongCommandsStillReadAsOneFamily",
  titleKey: "preview.components.sizes",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">{tm("preview.components.small")}</Button>
      <Button size="md">{tm("preview.components.medium")}</Button>
      <Button size="lg">{tm("preview.components.largeAction")}</Button>
      <Button aria-label={tm("preview.components.addComponent")} size="icon">
        +
      </Button>
    </div>
  )
}

export { Demo, meta }
