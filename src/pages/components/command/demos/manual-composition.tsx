import { Command } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 20,
  titleKey: "preview.components.manualComposition",
  descriptionKey:
    "preview.components.commandSubcomponentsAllowCustomGroupedCommandLayouts",
})

function Demo() {
  return (
    <Command placeholder="Search preview tasks...">
      <Command.Group>
        <Command.GroupHeading>Preview</Command.GroupHeading>
        <Command.Item description="Build route pages and API docs.">
          Build preview
        </Command.Item>
        <Command.Item description="Open generated registry output.">
          Inspect registry
        </Command.Item>
        <Command.Item description="Waiting for package metadata." disabled>
          Publish package
        </Command.Item>
      </Command.Group>
    </Command>
  )
}

export { Demo, meta }
