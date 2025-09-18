import { Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 30,
  titleKey: "preview.components.sizesAndCustomMarkers",
  descriptionKey:
    "preview.components.sizesAlignWithCompactStandardAndRoomyControlsMarkersCanBeComposedDirectlyWhenAFormNeedsCustomWording",
})

function Demo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field label="Small Caption" size="sm">
          <Input placeholder="Compact" size="sm" />
        </Field>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field
          label={
            <>
              Default Caption<Field.Marker>New</Field.Marker>
            </>
          }
        >
          <Input placeholder="Standard" />
        </Field>
      </div>
      <div className="rounded-su-lg border border-su-ink bg-white p-4">
        <Field label="Large Caption" size="lg">
          <Input placeholder="Roomy" size="lg" />
        </Field>
      </div>
    </div>
  )
}

export { Demo, meta }
