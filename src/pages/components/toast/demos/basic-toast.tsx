import { Button, Toaster, toast } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-basic-toast"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.basicToast",
  descriptionKey:
    "preview.components.toastShowsAShortAnnouncedMessageForImmediateFeedback",
})

function Demo() {
  return (
    <>
      <Button
        onClick={() =>
          toast.success("Saved to drafts.", { toasterId: TOASTER_ID })
        }
      >
        Save
      </Button>
      <Toaster toasterId={TOASTER_ID} />
    </>
  )
}

export { Demo, meta }
