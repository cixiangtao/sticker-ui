import { Field, Input, FieldMarker } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 25,
  titleKey: "preview.components.requiredMark",
  descriptionKey:
    "preview.components.requiredMarksHandleFieldSemanticsWhileFieldmarkerStaysAvailableForCustomStatusChips",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Field
        className="rounded-su-lg border border-su-ink bg-white p-4"
        description="Use the default badge when the label has room."
        label="Badge Required"
        required
      >
        <Input defaultValue="Badge keeps the sticker feel." required />
      </Field>
      <Field
        className="rounded-su-lg border border-su-ink bg-white p-4"
        description="Use the asterisk when horizontal forms need tighter labels."
        label="Asterisk Required"
        required
        requiredMark="asterisk"
      >
        <Input defaultValue="Compact for narrow label columns." required />
      </Field>
      <Field
        className="rounded-su-lg border border-su-ink bg-white p-4"
        description="FieldMarker is for extra status text not required semantics."
        label={
          <>
            Custom Marker<FieldMarker tone="success">New</FieldMarker>
          </>
        }
      >
        <Input defaultValue="Status Copy Stays Manual" />
      </Field>
    </div>
  )
}

export { Demo, meta }
