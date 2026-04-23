import { Collapsible } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.collapsibleContentPaddingAndToneCanMatchDenseNotesOrRoomyPanels",
  order: 30,
  titleKey: "preview.components.paddingAndTones",
})

const panels = [
  { padding: "sm", tone: "secondary", title: "Compact" },
  { padding: "md", tone: "default", title: "Default" },
  { padding: "lg", tone: "warning", title: "Roomy" },
] as const

function Demo() {
  return (
    <div className="grid w-full max-w-2xl gap-3">
      {panels.map((panel) => (
        <Collapsible defaultOpen key={panel.title}>
          <Collapsible.Trigger>{panel.title}</Collapsible.Trigger>
          <Collapsible.Content
            className="mt-2"
            padding={panel.padding}
            tone={panel.tone}
          >
            <p className="m-0 text-sm leading-6 font-bold">
              {panel.padding} padding with {panel.tone} paper tone.
            </p>
          </Collapsible.Content>
        </Collapsible>
      ))}
    </div>
  )
}

export { Demo, meta }
