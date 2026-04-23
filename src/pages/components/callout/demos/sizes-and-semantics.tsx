import { Callout } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.calloutSizeAndSemanticRootOptionsFitNotesWarningsAndInlineAsideContent",
  order: 30,
  titleKey: "preview.components.sizesAndSemantics",
})

const notes = [
  { as: "aside", size: "sm", title: "Aside tip", tone: "secondary" },
  { as: "section", size: "md", title: "Status note", tone: "success" },
  { as: "div", size: "lg", title: "Large warning", tone: "warning" },
] as const

function Demo() {
  return (
    <div className="grid w-full max-w-2xl gap-3">
      {notes.map((note) => (
        <Callout
          as={note.as}
          key={note.title}
          size={note.size}
          tone={note.tone}
        >
          <Callout.Icon size={note.size} tone={note.tone} />
          <div className="grid gap-1">
            <Callout.Title>{note.title}</Callout.Title>
            <Callout.Description>
              The root element, size, and tone can change without rebuilding the
              callout layout.
            </Callout.Description>
          </div>
        </Callout>
      ))}
    </div>
  )
}

export { Demo, meta }
