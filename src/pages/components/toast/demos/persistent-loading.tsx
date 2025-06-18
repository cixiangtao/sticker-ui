import { useEffect, useRef, useState } from "react"
import { Button, Toaster, toast, type ToastId } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const TOASTER_ID = "toast-persistent-loading"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 25,
  titleKey: "preview.components.persistentLoading",
  descriptionKey:
    "preview.components.loadingToastsCanStayOpenUntilDismissedForLongRunningWorkflows",
})

function Demo() {
  const [loadingToastId, setLoadingToastId] = useState<ToastId | null>(null)
  const loadingToastIdRef = useRef<ToastId | null>(null)

  useEffect(() => {
    return () => {
      if (loadingToastIdRef.current !== null) {
        toast.dismiss(loadingToastIdRef.current)
      }
    }
  }, [])

  function startLoadingToast() {
    const id = toast.loading("Syncing registry metadata...", {
      duration: Infinity,
      showClose: false,
      toasterId: TOASTER_ID,
    })

    loadingToastIdRef.current = id
    setLoadingToastId(id)
  }

  function dismissLoadingToast() {
    if (loadingToastId === null) {
      return
    }

    toast.dismiss(loadingToastId)
    loadingToastIdRef.current = null
    setLoadingToastId(null)
    toast.success("Persistent loading dismissed.", {
      duration: 2800,
      toasterId: TOASTER_ID,
    })
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          disabled={loadingToastId !== null}
          loading={loadingToastId !== null}
          onClick={startLoadingToast}
        >
          Start loading
        </Button>
        <Button
          color="secondary"
          disabled={loadingToastId === null}
          onClick={dismissLoadingToast}
          variant="outlined"
        >
          Dismiss loading
        </Button>
      </div>
      <Toaster placement="bottom-right" toasterId={TOASTER_ID} />
    </>
  )
}

export { Demo, meta }
