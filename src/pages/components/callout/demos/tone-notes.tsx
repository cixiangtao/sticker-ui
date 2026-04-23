import { Callout } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 10,
  titleKey: "preview.components.toneNotes",
  descriptionKey:
    "preview.components.calloutTonesSeparateInformationalTipsWarningsSuccessAndFailureStates",
})

function Demo() {
  return (
    <div className="grid gap-3">
      {[
        [
          "info",
          "Registry ready",
          "The component source, demos, and docs are aligned.",
        ],
        [
          "warning",
          "Check dependency",
          "This component requires tailwindcss-animate in package apps.",
        ],
        [
          "success",
          "Published",
          "The registry item is available for shadcn installs.",
        ],
      ].map(([tone, title, description]) => (
        <Callout key={tone} tone={tone as never}>
          <Callout.Icon tone={tone as never} />
          <div className="grid gap-1">
            <Callout.Title>{title}</Callout.Title>
            <Callout.Description>{description}</Callout.Description>
          </div>
        </Callout>
      ))}
    </div>
  )
}

export { Demo, meta }
