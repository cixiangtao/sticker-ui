import { useEffect, useRef, useState } from "react"
import { Button, Toaster, toast, type ToastId } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-async-lifecycle"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.asyncLifecycle",
  descriptionKey:
    "preview.components.loadingToastsCanBeUpdatedOrDismissedAsAsyncWorkSettles",
})

function Demo() {
  const [loadingToastId, setLoadingToastId] = useState<ToastId | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function clearPendingTimer() {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  function startLoadingFlow() {
    clearPendingTimer()

    const id = toast.loading("Building registry...", {
      description: "Generating component JSON.",
      duration: 9000,
      showClose: false,
      toasterId: TOASTER_ID,
    })

    setLoadingToastId(id)
    timeoutRef.current = window.setTimeout(() => {
      toast.update(id, {
        description: "Toast JSON is ready to copy.",
        duration: 4200,
        showClose: true,
        title: "Registry build complete.",
        tone: "success",
        toasterId: TOASTER_ID,
      })
      setLoadingToastId(null)
      timeoutRef.current = null
    }, 1400)
  }

  function startRetryFlow() {
    clearPendingTimer()

    const id = toast.loading("Publishing package...", {
      description: "Waiting for the registry response.",
      duration: 9000,
      showClose: false,
      toasterId: TOASTER_ID,
    })

    setLoadingToastId(id)
    timeoutRef.current = window.setTimeout(() => {
      toast.update(id, {
        action: {
          label: "Retry",
          onClick: startLoadingFlow,
        },
        description: "The preview server did not answer in time.",
        duration: 6000,
        showClose: true,
        title: "Publish needs attention.",
        tone: "error",
        toasterId: TOASTER_ID,
      })
      setLoadingToastId(null)
      timeoutRef.current = null
    }, 1200)
  }

  function dismissLoadingToast() {
    if (loadingToastId === null) {
      toast.info("No pending toast to dismiss.", { toasterId: TOASTER_ID })
      return
    }

    clearPendingTimer()
    toast.dismiss(loadingToastId)
    setLoadingToastId(null)
    toast("Pending toast dismissed.", {
      duration: 2800,
      toasterId: TOASTER_ID,
    })
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button loading={loadingToastId !== null} onClick={startLoadingFlow}>
          Start loading
        </Button>
        <Button
          color="warning"
          disabled={loadingToastId !== null}
          onClick={startRetryFlow}
          variant="outlined"
        >
          Fail then retry
        </Button>
        <Button
          color="secondary"
          disabled={loadingToastId === null}
          onClick={dismissLoadingToast}
          variant="dashed"
        >
          Dismiss pending
        </Button>
      </div>
      <Toaster placement="bottom-right" toasterId={TOASTER_ID} />
    </>
  )
}

export { Demo, meta }
