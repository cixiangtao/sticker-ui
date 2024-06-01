import { Label, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Sizes scale the writing area for compact notes, standard forms, and roomy planning panels while tone keeps semantic feedback visible.",
  order: 20,
  title: "Sizes & Tones",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-small" size="sm">
          Quick note
        </Label>
        <Textarea
          id="textarea-size-small"
          placeholder="Add a compact note"
          size="sm"
          tone="secondary"
          variant="quiet"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-medium">Feedback</Label>
        <Textarea
          defaultValue="The sticker frame keeps comments readable without losing the playful paper tone."
          id="textarea-size-medium"
          placeholder="Share feedback"
          tone="info"
          variant="filled"
        />
      </div>
      <div className="grid gap-2 rounded-sticker-xl border border-ink bg-white/80 p-4">
        <Label htmlFor="textarea-size-large" size="lg">
          Launch plan
        </Label>
        <Textarea
          id="textarea-size-large"
          placeholder="Outline the launch plan"
          size="lg"
          tone="success"
          variant="filled"
        />
      </div>
    </div>
  )
}

export { Demo, meta }
