import { useState } from "react"
import { Button, Toaster, toast, type ToastPlacement } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-viewport-placement"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 50,
  titleKey: "preview.components.viewportPlacement",
  descriptionKey:
    "preview.components.toastViewportPlacementKeepsShortFeedbackClearOfPrimaryPageControls",
})

const PLACEMENTS = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const satisfies ReadonlyArray<ToastPlacement>

function Demo() {
  const [placement, setPlacement] = useState<ToastPlacement>("top-right")

  function showPlacementToast(nextPlacement: ToastPlacement) {
    setPlacement(nextPlacement)
    window.setTimeout(() => {
      toast(`Toast moved to ${nextPlacement}.`, {
        toasterId: TOASTER_ID,
      })
    }, 0)
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        {PLACEMENTS.map((nextPlacement) => (
          <Button
            key={nextPlacement}
            onClick={() => showPlacementToast(nextPlacement)}
            variant={placement === nextPlacement ? "solid" : "outlined"}
          >
            {nextPlacement}
          </Button>
        ))}
      </div>
      <Toaster placement={placement} toasterId={TOASTER_ID} />
    </>
  )
}

export { Demo, meta }
