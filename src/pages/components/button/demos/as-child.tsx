import { ExternalLink } from "lucide-react"
import { Button } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 40,
  titleKey: "preview.components.asChild",
  descriptionKey:
    "preview.components.aschildMovesTheStickerButtonStylingOntoLinksOrRouterPrimitivesWhilePreservingLoadingAndDisabledStates",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild color="info" variant="outlined">
        <a href="#button-as-child">
          {tm("preview.components.docsLink")}
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </Button>
      <Button asChild disabled variant="dashed">
        <a href="#button-as-child-disabled">
          {tm("preview.components.disabledLink")}
        </a>
      </Button>
      <Button loading={true}>{tm("preview.components.loadingState")}</Button>
    </div>
  )
}

export { Demo, meta }
