import { Button, Toaster, toast } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-tones-and-actions"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.tonesAndActions",
  descriptionKey:
    "preview.components.semanticTonesPairWithOptionalActionsForUndoRetryAndFollowUpWorkflows",
})

type ToastCommand = "error" | "info" | "success" | "warning"

const TOAST_EXAMPLES = [
  {
    buttonColor: "info",
    command: "info",
    label: "Info",
    message: "Comment added.",
  },
  {
    action: "Undo",
    buttonColor: "success",
    command: "success",
    label: "Success",
    message: "Copied import.",
  },
  {
    buttonColor: "warning",
    command: "warning",
    label: "Warning",
    message: "Registry changed.",
  },
  {
    buttonColor: "danger",
    command: "error",
    label: "Error",
    message: "Publish failed.",
  },
] as const satisfies ReadonlyArray<{
  action?: "Undo"
  buttonColor: "danger" | "info" | "success" | "warning"
  command: ToastCommand
  label: string
  message: string
}>

function Demo() {
  function showToneToast(item: (typeof TOAST_EXAMPLES)[number]) {
    if ("action" in item) {
      toast[item.command](item.message, {
        action: {
          label: item.action,
          onClick: () => toast.info("Undo queued.", { toasterId: TOASTER_ID }),
        },
        toasterId: TOASTER_ID,
      })
      return
    }

    toast[item.command](item.message, { toasterId: TOASTER_ID })
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {TOAST_EXAMPLES.map((item) => (
          <Button
            color={item.buttonColor}
            key={item.label}
            onClick={() => showToneToast(item)}
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
