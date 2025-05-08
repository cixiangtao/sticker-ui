import { Progress } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.indeterminate",
  descriptionKey:
    "preview.components.nullValueCreatesAnIndeterminateStripeForWorkThatHasStartedButCannotBeMeasuredYet",
})

function Demo() {
  return (
    <div className="grid gap-3 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md">
      <div>
        <div className="text-sm font-black text-su-ink">Syncing Registry</div>
        <p className="text-sm leading-6 font-medium text-su-fg-muted">
          Waiting for generated files to settle.
        </p>
      </div>
      <Progress aria-label="Syncing registry" tone="secondary" value={null} />
    </div>
  )
}

export { Demo, meta }
