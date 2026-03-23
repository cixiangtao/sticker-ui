import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react"
import { Empty } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-default",
  order: 50,
  titleKey: "preview.components.toneMatrix",
  descriptionKey:
    "preview.components.emptyToneMatrixCoversDefaultSuccessDangerAndLargePanelShortcutStates",
})

function Demo() {
  return (
    <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-4">
      <Empty
        description="Default tone works for neutral blank states."
        heading="No drafts"
        icon={<Info />}
        size="md"
        tone="default"
        variant="panel"
      />
      <Empty
        description="Success tone fits completed setup areas."
        heading="All clear"
        icon={<CheckCircle2 />}
        size="lg"
        tone="success"
        variant="panel"
      />
      <Empty
        description="Warning tone keeps recoverable issues visible."
        heading="Needs review"
        icon={<AlertTriangle />}
        size="sm"
        tone="warning"
        variant="outlined"
      />
      <Empty
        description="Danger tone is available for blocked or failed states."
        heading="Blocked"
        icon={<XCircle />}
        size="md"
        tone="danger"
        variant="plain"
      />
    </div>
  )
}

export { Demo, meta }
