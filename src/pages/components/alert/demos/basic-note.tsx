import { Alert, AlertDescription, AlertTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Alert creates a readable sticker note for status messages, validation summaries, and helpful next steps.",
  order: 10,
  title: "Basic Note",
})

function Demo() {
  return (
    <Alert className="max-w-xl" tone="info">
      <AlertTitle>Preview updated</AlertTitle>
      <AlertDescription>
        The registry output is ready to inspect before publishing the component
        page.
      </AlertDescription>
    </Alert>
  )
}

export { Demo }
export default meta
