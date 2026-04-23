import { Button, Callout } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.actions",
  descriptionKey:
    "preview.components.calloutsCanCarrySmallRecoveryActionsWithoutBecomingFullCards",
})

function Demo() {
  return (
    <Callout tone="secondary">
      <Callout.Icon tone="secondary" />
      <div className="grid gap-1">
        <Callout.Title>Preview build needs attention</Callout.Title>
        <Callout.Description>
          API docs changed after adding a component. Regenerate before
          publishing.
        </Callout.Description>
        <Callout.Actions>
          <Button size="sm">Run build</Button>
          <Button size="sm" variant="outlined">
            View diff
          </Button>
        </Callout.Actions>
      </div>
    </Callout>
  )
}

export { Demo, meta }
