import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Semantic tones keep feedback readable while the sticker frame gives every message a clear paper surface.",
  order: 20,
  title: "Tones",
})

function Demo() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Alert tone="success">
        <AlertTitle>Ready to ship</AlertTitle>
        <AlertDescription>
          All checks passed for this component.
        </AlertDescription>
      </Alert>
      <Alert tone="warning">
        <AlertTitle>Needs review</AlertTitle>
        <AlertDescription>
          Translation copy changed in this demo.
        </AlertDescription>
      </Alert>
      <Alert tone="danger">
        <AlertTitle>Build failed</AlertTitle>
        <AlertDescription>
          Run lint before handing off the registry.
        </AlertDescription>
      </Alert>
      <Alert tone="secondary">
        <AlertTitle>Design note</AlertTitle>
        <AlertDescription>
          Keep nested surfaces quieter than this alert.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { Demo }
export default meta
