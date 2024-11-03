import { Input, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.formCaptions",
  descriptionKey:
    "preview.components.labelsStayCompactReadableAndConnectedToNativeControlsWithTheNormalHtmlforRelationship",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="label-component-name" required>
          Component Name
        </Label>
        <Input
          defaultValue="Sticker Label"
          id="label-component-name"
          required
        />
        <LabelDescription>
          Required markers are part of the caption not the input frame.
        </LabelDescription>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="label-component-note" optional>
          Release Note
        </Label>
        <textarea
          className="min-h-24 resize-none rounded-sticker-lg border-2 border-ink bg-white px-3 py-2 text-sm font-bold shadow-sticker-sm outline-none focus-visible:ring-2 focus-visible:ring-fill-danger"
          defaultValue="Use optional markers for helper fields and short notes."
          id="label-component-note"
        />
        <LabelDescription>
          Description copy can sit under any control in the same field.
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
