import {
  Button,
  Toaster,
  toast,
  type ToastSize,
  type ToastTone,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-sizes-and-tones"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 40,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.toastSizesAndTonesTuneDensityAndSemanticEmphasisPerMessage",
})

const TOAST_EXAMPLES = [
  {
    buttonColor: "default",
    description: "Compact feedback for dense toolbars.",
    label: "Small default",
    message: "Queued for review.",
    size: "sm",
    tone: "default",
  },
  {
    buttonColor: "success",
    description: "Standard feedback for a completed action.",
    label: "Medium success",
    message: "Draft saved.",
    size: "md",
    tone: "success",
  },
  {
    buttonColor: "info",
    description: "Roomier feedback for a longer state change.",
    label: "Large info",
    message: "Preview build is running.",
    size: "lg",
    tone: "info",
  },
] as const satisfies ReadonlyArray<{
  buttonColor: "default" | "info" | "success"
  description: string
  label: string
  message: string
  size: ToastSize
  tone: ToastTone
}>

function Demo() {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        {TOAST_EXAMPLES.map((item) => (
          <Button
            color={item.buttonColor}
            key={item.label}
            onClick={() =>
              toast(item.message, {
                description: item.description,
                showClose: true,
                size: item.size,
                tone: item.tone,
                toasterId: TOASTER_ID,
              })
            }
            variant="outlined"
          >
            {item.label}
          </Button>
        ))}
      </div>
      <Toaster placement="bottom-right" toasterId={TOASTER_ID} />
    </>
  )
}

export { Demo, meta }
