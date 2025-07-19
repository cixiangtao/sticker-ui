import { FileQuestion, FolderOpen, Sparkles } from "lucide-react"
import { Empty, EmptyDescription, EmptyIcon, EmptyTitle } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.sizesAndTones",
  descriptionKey:
    "preview.components.emptySizesAndTonesFitDensePanelsSearchResultsAndRoomierOnboardingSpaces",
})

const examples = [
  {
    description: "Use plain mode when the surrounding card already owns depth.",
    icon: <FileQuestion />,
    size: "sm",
    title: "No drafts",
    tone: "secondary",
    variant: "plain",
  },
  {
    description: "Outlined mode keeps the state visible inside dense panels.",
    icon: <FolderOpen />,
    size: "md",
    title: "Folder is empty",
    tone: "default",
    variant: "outlined",
  },
  {
    description: "Large panels help first-run areas feel intentional.",
    icon: <Sparkles />,
    size: "lg",
    title: "Ready for the first item",
    tone: "success",
    variant: "panel",
  },
] as const

function Demo() {
  return (
    <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-3">
      {examples.map((example) => (
        <Empty
          key={example.title}
          size={example.size}
          tone={example.tone}
          variant={example.variant}
        >
          <EmptyIcon>{example.icon}</EmptyIcon>
          <EmptyTitle>{example.title}</EmptyTitle>
          <EmptyDescription>{example.description}</EmptyDescription>
        </Empty>
      ))}
    </div>
  )
}

export { Demo, meta }
