import { Field, Input, Textarea } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 10,
  titleKey: "preview.components.formCaptions",
  descriptionKey:
    "preview.components.fieldsStayCompactReadableAndConnectedToNativeControlsWithTheNormalHtmlforRelationship",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field
        description="Required markers are part of the caption not the input frame."
        label="Component Name"
        required
      >
        <Input defaultValue="Sticker Field" required />
      </Field>
      <Field
        description="Description copy can sit under any control in the same field."
        label="Release Note"
        optional
      >
        <Textarea defaultValue="Use optional markers for helper fields and short notes." />
      </Field>
    </div>
  )
}

export { Demo, meta }
