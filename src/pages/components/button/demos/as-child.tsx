import { ExternalLink } from "lucide-react"
import { Button } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "asChild moves the sticker button styling onto links or router primitives while preserving loading and disabled states.",
  order: 40,
  title: "As Child",
  titleKey: "preview.components.asChild",
  descriptionKey:
    "preview.components.aschildMovesTheStickerButtonStylingOntoLinksOrRouterPrimitivesWhilePreservingLoadingAndDisabledStates",
})

function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild color="info" variant="outlined">
        <a href="#button-as-child">
          Docs link
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </Button>
      <Button asChild disabled variant="dashed">
        <a href="#button-as-child-disabled">Disabled link</a>
      </Button>
      <Button loading={true}>Loading state</Button>
    </div>
  )
}

export { Demo, meta }
