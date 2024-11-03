import { ExternalLink } from "lucide-react"
import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-secondary",
  order: 40,
  titleKey: "preview.components.asChild",
  descriptionKey:
    "preview.components.aschildMovesTheStickerButtonStylingOntoLinksOrRouterPrimitivesWhilePreservingLoadingAndDisabledStates",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild color="info" variant="outlined">
        <a href="#button-as-child">
          Docs Link
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </Button>
      <Button asChild disabled variant="dashed">
        <a href="#button-as-child-disabled">Disabled Link</a>
      </Button>
      <Button loading={true}>Loading State</Button>
    </div>
  )
}

export { Demo, meta }
