import { Button, Card, Toaster, toast } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const toasterId = "toast-scoped-defaults"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 70,
  titleKey: "preview.components.scopedDefaults",
  descriptionKey:
    "preview.components.toasterExpandGapToastOptionsAndToasterIdCanCreateScopedStacksWithSharedDefaults",
})

function Demo() {
  return (
    <Card className="max-w-xl" variant="panel">
      <Card.Header>
        <Card.Title>Scoped defaults</Card.Title>
      </Card.Header>
      <Card.Content className="flex flex-wrap gap-3">
        <Button
          onClick={() => {
            toast("Scoped default toast", {
              description: "This command routes to the named toaster.",
              toasterId,
            })
          }}
          size="sm"
        >
          Default stack
        </Button>
        <Button
          color="success"
          onClick={() => {
            toast.success("Per-toast override", {
              description: "This toast overrides size and close behavior.",
              showClose: true,
              size: "lg",
              toasterId,
            })
          }}
          size="sm"
        >
          Override one
        </Button>
      </Card.Content>
      <Toaster
        expand
        gap={10}
        placement="bottom-right"
        toasterId={toasterId}
        toastOptions={{
          duration: 6000,
          showClose: true,
          size: "sm",
          tone: "info",
        }}
        visibleToasts={4}
      />
    </Card>
  )
}

export { Demo, meta }
